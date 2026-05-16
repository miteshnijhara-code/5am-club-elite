'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BellRing, ShieldCheck, Zap, Video, LogOut, CheckCircle, Clock, Flame } from 'lucide-react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

const GOOGLE_MEET_URL = 'https://meet.google.com/xyz-abcd-qwe';
const SESSION_DURATION_SECS = 15 * 60; // 15 minutes
const ALARM_SOUND_URL = 'https://assets.mixkit.co/sfx/preview/mixkit-classic-alarm-995.mp3';

type CheckInStatus = 'pending' | 'in_session' | 'completed' | 'missed';

export default function PortalDashboard() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [alarmRinging, setAlarmRinging] = useState(false);
  const [checkInStatus, setCheckInStatus] = useState<CheckInStatus>('pending');
  const [streak, setStreak] = useState(0);
  const [sessionActive, setSessionActive] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(SESSION_DURATION_SECS);
  const [sessionCompleted, setSessionCompleted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const sessionStartRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const meetWindowRef = useRef<Window | null>(null);

  // ── Auth ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
      setLoading(false);
      if (!s) window.location.href = '/login';
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s);
      if (!s) window.location.href = '/login';
    });
    return () => subscription.unsubscribe();
  }, []);

  // ── Load streak ───────────────────────────────────────────────────────────
  useEffect(() => {
    if (!session) return;
    supabase
      .from('check_ins')
      .select('id', { count: 'exact', head: true })
      .eq('user_id', session.user.id)
      .eq('completed', true)
      .then(({ count }) => { if (count) setStreak(count); });
  }, [session]);

  // ── 5 AM alarm trigger ────────────────────────────────────────────────────
  useEffect(() => {
    if (!session) return;
    const checkTime = () => {
      const now = new Date();
      if (now.getHours() === 5 && now.getMinutes() === 0 && checkInStatus === 'pending' && !sessionCompleted) {
        setAlarmRinging(true);
        audioRef.current?.play().catch(() => {});
      }
    };
    checkTime();
    const interval = setInterval(checkTime, 30_000);
    return () => clearInterval(interval);
  }, [session, checkInStatus, sessionCompleted]);

  // ── Poll Meet window — restart alarm if closed before 20 min ─────────────
  useEffect(() => {
    if (!sessionActive || sessionCompleted) return;
    const poll = setInterval(() => {
      if (meetWindowRef.current?.closed) {
        clearInterval(poll);
        // Left early — restart alarm after 2s
        setSessionActive(false);
        setCheckInStatus('pending');
        if (timerRef.current) clearInterval(timerRef.current);
        setSecondsLeft(SESSION_DURATION_SECS);
        setTimeout(() => {
          setAlarmRinging(true);
          audioRef.current?.play().catch(() => {});
        }, 2000);
      }
    }, 3000);
    return () => clearInterval(poll);
  }, [sessionActive, sessionCompleted]);

  // ── Session countdown ─────────────────────────────────────────────────────
  useEffect(() => {
    if (!sessionActive || sessionCompleted) return;
    timerRef.current = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          // ✅ 20 min done — record check-in
          setSessionActive(false);
          setSessionCompleted(true);
          setCheckInStatus('completed');
          if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0; }
          if (session) {
            const today = new Date().toISOString().split('T')[0];
            supabase.from('check_ins').upsert({
              user_id: session.user.id,
              date: today,
              completed: true,
              joined_at: new Date(sessionStartRef.current!).toISOString(),
              completed_at: new Date().toISOString(),
            }, { onConflict: 'user_id,date' }).then(() => setStreak(s => s + 1));
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [sessionActive, sessionCompleted, session]);

  // ── Handlers ──────────────────────────────────────────────────────────────
  const handleJoinMeet = () => {
    setAlarmRinging(false);
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0; }
    setCheckInStatus('in_session');
    setSessionActive(true);
    sessionStartRef.current = Date.now();
    setSecondsLeft(SESSION_DURATION_SECS);
    meetWindowRef.current = window.open(GOOGLE_MEET_URL, '_blank');
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  const handleTestAlarm = () => {
    setSessionCompleted(false);
    setCheckInStatus('pending');
    setAlarmRinging(true);
    audioRef.current?.play().catch(() => {});
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const progressPct = ((SESSION_DURATION_SECS - secondsLeft) / SESSION_DURATION_SECS) * 100;

  // ── Loading ───────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-black text-white p-6 font-sans flex flex-col items-center">
      <audio ref={audioRef} src={ALARM_SOUND_URL} loop preload="auto" />

      {/* Header */}
      <header className="w-full max-w-4xl flex justify-between items-center mb-12 py-4">
        <div className="text-xl font-black tracking-tighter flex items-center gap-2">
          <Zap className="text-yellow-500 w-6 h-6" /> 5 AM ELITE
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white/10 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
            <Flame className="w-4 h-4 text-orange-400" /> Streak: {streak}
          </div>
          <button onClick={handleSignOut} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors" aria-label="Sign out">
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>
      </header>

      <main className="w-full max-w-4xl grid md:grid-cols-2 gap-8 relative">

        {/* ── ALARM OVERLAY ── */}
        <AnimatePresence>
          {alarmRinging && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="absolute inset-0 z-50 bg-black/90 backdrop-blur-xl border-2 border-red-500/60 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center shadow-[0_0_120px_rgba(239,68,68,0.4)]"
            >
              <div className="relative mb-8">
                <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping" />
                <div className="absolute inset-[-12px] rounded-full bg-red-500/10 animate-ping" style={{ animationDelay: '0.3s' }} />
                <motion.div
                  animate={{ rotate: [0, -12, 12, -12, 12, 0] }}
                  transition={{ repeat: Infinity, duration: 0.5 }}
                  className="relative w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center"
                >
                  <BellRing className="w-12 h-12 text-red-500" />
                </motion.div>
              </div>

              <h2 className="text-5xl font-black text-white mb-3">WAKE UP.</h2>
              <p className="text-lg text-gray-400 mb-2 max-w-sm">It&apos;s 5 AM. Your session is live.</p>
              <p className="text-sm text-gray-500 mb-10 max-w-xs">
                This alarm will not stop until you join. Stay for 15 minutes to complete your check-in. Leave early and it comes back.
              </p>

              <button
                onClick={handleJoinMeet}
                className="w-full max-w-xs bg-yellow-500 hover:bg-yellow-400 text-black font-black text-xl py-5 rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-lg shadow-yellow-500/30"
              >
                <Video className="w-6 h-6" /> JOIN TO SILENCE
              </button>
              <p className="text-xs text-gray-600 mt-4">Leave before 20 min and the alarm comes back.</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── LEFT: Mission + Timer ── */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex flex-col justify-between min-h-[420px]">
          <div>
            <div className="text-gray-400 font-semibold text-xs uppercase tracking-widest mb-3">Today&apos;s Mission</div>
            <h1 className="text-3xl font-black mb-3 leading-tight">The Discipline of<br />Brahma Muhurta</h1>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              15-minute power session at 5 AM sharp. Ancient Kriya breathing to engineer your morning.
            </p>

            {sessionActive && !sessionCompleted && (
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-5 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-yellow-500" />
                  <span className="text-yellow-500 text-sm font-bold uppercase tracking-widest">Session Active</span>
                </div>
                <div className="text-4xl font-black text-white mb-3">{formatTime(secondsLeft)}</div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full transition-all duration-1000" style={{ width: `${progressPct}%` }} />
                </div>
              <p className="text-gray-500 text-xs mt-2">Stay in the session to complete your check-in</p>
              </div>
            )}

            {sessionCompleted && (
              <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-5 mb-4 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <div>
                  <div className="font-black text-green-400">Check-in Complete!</div>
                  <div className="text-gray-400 text-sm">Streak saved. See you tomorrow at 5 AM.</div>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-xl transition text-sm">
              Past Sessions
            </button>
            <button
              onClick={handleTestAlarm}
              className="bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 font-bold py-3 px-4 rounded-xl transition text-sm"
              title="Test the 5 AM alarm"
            >
              Test Alarm
            </button>
          </div>
        </div>

        {/* ── RIGHT: Accountability ── */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex flex-col min-h-[420px]">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="text-green-500 w-5 h-5" />
            <span className="font-bold">Accountability Status</span>
          </div>

          <div className="space-y-3 flex-1">
            <div className="bg-black/50 p-4 rounded-2xl border border-white/5">
              <div className="text-xs text-gray-500 mb-1 uppercase tracking-widest">Check-in Status</div>
              <div className={`font-bold ${
                checkInStatus === 'completed'  ? 'text-green-400' :
                checkInStatus === 'in_session' ? 'text-yellow-400' :
                checkInStatus === 'missed'     ? 'text-red-400'   : 'text-gray-400'
              }`}>
                {checkInStatus === 'completed'  ? '✅ Completed — Streak saved' :
                 checkInStatus === 'in_session' ? '⏱ In session — stay for 20 min' :
                 checkInStatus === 'missed'     ? '❌ Missed — penalty applies' :
                 '⏳ Waiting for 5 AM'}
              </div>
            </div>

            <div className="bg-black/50 p-4 rounded-2xl border border-white/5">
              <div className="text-xs text-gray-500 mb-1 uppercase tracking-widest">Current Streak</div>
              <div className="font-bold text-white flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-400" /> {streak} day{streak !== 1 ? 's' : ''}
              </div>
            </div>

            <div className="bg-black/50 p-4 rounded-2xl border border-white/5">
              <div className="text-xs text-gray-500 mb-1 uppercase tracking-widest">Current Track</div>
              <div className="font-bold text-white">Body, Mind &amp; Soul</div>
            </div>

            <div className="bg-black/50 p-4 rounded-2xl border border-white/5 flex justify-between items-center">
              <div>
                <div className="text-xs text-gray-500 mb-1 uppercase tracking-widest">Wake-up Partner</div>
                <div className="font-bold text-white">Assigned at 5 AM</div>
              </div>
              <button className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition">Nudge</button>
            </div>

            <div className="bg-yellow-500/5 border border-yellow-500/20 p-4 rounded-2xl">
              <p className="text-xs text-yellow-500 font-bold uppercase tracking-widest mb-1">How it works</p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Alarm fires at 5 AM. Can&apos;t be dismissed — only silenced by joining the session. Stay 15 minutes to record your check-in. Close the tab early and the alarm comes back.
              </p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
