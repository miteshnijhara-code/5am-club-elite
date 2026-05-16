'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BellRing, ShieldCheck, Zap, Video } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function PortalDashboard() {
  const [alarmRinging, setAlarmRinging] = useState(false);
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      if (!session) {
        window.location.href = '/login';
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (!session) {
        window.location.href = '/login';
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) return;

    // For demo purposes, trigger alarm after 3 seconds
    const timer = setTimeout(() => {
      setAlarmRinging(true);
      if (audioRef.current) {
        audioRef.current.play().catch(e => console.log('Audio autoplay prevented:', e));
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleJoinMeet = () => {
    setAlarmRinging(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    // Record check-in to backend here
    // Redirect to Meet
    window.open('https://meet.google.com/xyz-abcd-qwe', '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 font-sans flex flex-col items-center">
      
      {/* Hidden audio for alarm */}
      <audio ref={audioRef} src="https://assets.mixkit.co/sfx/preview/mixkit-classic-alarm-995.mp3" loop preload="auto" />

      {/* Header */}
      <header className="w-full max-w-4xl flex justify-between items-center mb-12 py-4">
        <div className="text-xl font-black tracking-tighter flex items-center gap-2">
          <Zap className="text-yellow-500 w-6 h-6" /> 
          5 AM ELITE
        </div>
        <div className="bg-white/10 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
          🔥 Streak: 12
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-4xl grid md:grid-cols-2 gap-8 relative">
        
        {/* Alarm Overlay (Join to Silence) */}
        <AnimatePresence>
          {alarmRinging && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="absolute inset-0 z-50 bg-black/80 backdrop-blur-xl border-2 border-red-500/50 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center shadow-[0_0_100px_rgba(239,68,68,0.3)]"
            >
              <motion.div 
                animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
                className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mb-6"
              >
                <BellRing className="w-12 h-12 text-red-500" />
              </motion.div>
              
              <h2 className="text-4xl font-black text-white mb-4">WAKE UP.</h2>
              <p className="text-xl text-gray-400 mb-10 max-w-sm">The 5 AM Club session is starting. The only way to stop this alarm is to join the room.</p>
              
              <button 
                onClick={handleJoinMeet}
                className="w-full max-w-xs bg-yellow-500 hover:bg-yellow-400 text-black font-black text-xl py-5 rounded-2xl flex items-center justify-center gap-3 transition shadow-lg shadow-yellow-500/20"
              >
                <Video className="w-6 h-6" />
                JOIN TO SILENCE
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dashboard Left */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex flex-col justify-between h-[400px]">
          <div>
            <div className="text-gray-400 font-semibold mb-2">TODAY&apos;S MISSION</div>
            <h1 className="text-4xl font-black mb-4 leading-tight">The Discipline of<br/>Brahma Muhurta</h1>
            <p className="text-gray-400">Led by Harsh Ramteke. 15-minute power session focusing on ancient Kriya breathing.</p>
          </div>
          <div>
            <div className="flex gap-4">
              <button className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-4 rounded-xl transition">
                View Past Sessions
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Right */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex flex-col h-[400px]">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="text-green-500 w-6 h-6" />
            <span className="font-bold">Accountability Status</span>
          </div>
          
          <div className="space-y-4 flex-1">
            <div className="bg-black/50 p-4 rounded-2xl border border-white/5 flex justify-between items-center">
              <div>
                <div className="text-sm text-gray-500 mb-1">Check-in Status</div>
                <div className="font-bold text-yellow-500">Pending (Waiting for 5 AM)</div>
              </div>
            </div>
            
            <div className="bg-black/50 p-4 rounded-2xl border border-white/5 flex justify-between items-center">
              <div>
                <div className="text-sm text-gray-500 mb-1">Current Track</div>
                <div className="font-bold text-white">Body, Mind & Soul</div>
              </div>
            </div>

            <div className="bg-black/50 p-4 rounded-2xl border border-white/5 flex justify-between items-center">
              <div>
                <div className="text-sm text-gray-500 mb-1">Your Partner</div>
                <div className="font-bold text-white">Rahul K.</div>
              </div>
              <button className="text-xs bg-white/10 px-3 py-1 rounded-full">Nudge</button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
