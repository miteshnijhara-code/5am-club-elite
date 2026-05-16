'use client';
import React, { useState, useEffect } from 'react';
import LiveCounter from './components/LiveCounter';

const TRACKS = [
  {
    title: 'The Discipline of Brahma Muhurta',
    lead: 'Harsh Ramteke',
    desc: 'Understand the ancient science of Amrit Kal — the sacred pre-dawn window — and build an unbreakable morning discipline rooted in scripture and modern habit science.',
    tag: 'Mindset',
    color: 'from-yellow-500/20 to-transparent',
  },
  {
    title: 'Kriya Yoga',
    lead: 'Certified Facilitator',
    desc: 'An ancient, scientific meditation technique focused on pranayama and breath regulation to accelerate mental clarity, spiritual growth, and daily energy.',
    tag: 'Meditation',
    color: 'from-purple-500/20 to-transparent',
  },
  {
    title: 'Body, Mind & Soul',
    lead: 'Sapna Verma',
    desc: '21 days of morning yoga designed to heal from within. Movement, mindfulness, and breathwork to restore your body and refresh your spirit every single morning.',
    tag: 'Yoga',
    color: 'from-green-500/20 to-transparent',
  },
  {
    title: 'Life is What You Make It',
    lead: 'Pranav Patil',
    desc: 'A 21-day journey of reflection, healing, and rebuilding — from confusion to clarity, from stuck to in control. Daily prompts, writing, and honest introspection.',
    tag: 'Growth',
    color: 'from-blue-500/20 to-transparent',
  },
];

const TESTIMONIALS = [
  {
    role: 'Entrepreneur, Mumbai',
    text: 'I never thought I could wake up at 5 AM consistently. After the 21-day challenge, it became the best part of my day. The accountability structure is what makes it stick.',
    initial: '🌅',
  },
  {
    role: 'Software Engineer, Pune',
    text: 'The penalty system sounds harsh but it\'s exactly what I needed. Knowing there\'s a consequence made me show up every single day. Completed 21 days and never looked back.',
    initial: '⚡',
  },
  {
    role: 'Fitness Coach, Bangalore',
    text: 'The 15-minute sessions are perfectly designed — short enough to not feel like a burden, powerful enough to completely shift your morning energy. Game changer.',
    initial: '🔥',
  },
  {
    role: 'Student, Delhi',
    text: 'Met incredible people from across the country at 5 AM. The community alone is worth it. We push each other every morning and the energy is unlike anything I\'ve experienced.',
    initial: '🏆',
  },
];

const FAQS = [
  {
    q: 'I have never been able to wake up this early. How will you help?',
    a: 'We use a proven 3-step system: a Sleep Theory workshop to fix your biology, a 21-day accountability structure with real penalties, and a wake-up buddy who checks in on you every morning.',
  },
  {
    q: 'Why 21 days?',
    a: 'Research shows 21 days is the minimum threshold to wire a new habit into your neural pathways. We designed the entire program around this science.',
  },
  {
    q: 'How long is each session?',
    a: 'Just 15 minutes. Sharp at 5 AM on Zoom. No fluff — pure focused energy to kick-start your day.',
  },
  {
    q: 'What happens if I miss a day?',
    a: 'You pay a penalty. That\'s the point. Skin in the game is what makes this work where every other morning routine has failed you.',
  },
  {
    q: 'Who can join?',
    a: 'Anyone with a smartphone and the desire to change. We have members from 11 countries, across all ages and professions.',
  },
];

const STATS = [
  { value: '5,500+', label: 'Early Risers' },
  { value: '65+', label: 'Wake-up-athons' },
  { value: '11', label: 'Countries' },
  { value: '39,000+', label: 'Hours of Clubbing' },
];

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-lg font-black text-yellow-500 tracking-tight">5 AM CLUB</span>
          <div className="flex items-center gap-6">
            <a href="#how-it-works" className="hidden md:block text-sm text-gray-400 hover:text-white transition-colors">How it works</a>
            <a href="#tracks" className="hidden md:block text-sm text-gray-400 hover:text-white transition-colors">Tracks</a>
            <a href="#app" className="hidden md:block text-sm text-gray-400 hover:text-white transition-colors">App</a>
            <a href="#testimonials" className="hidden md:block text-sm text-gray-400 hover:text-white transition-colors">Stories</a>
            <a href="/login" className="text-sm font-bold bg-yellow-500 text-black px-5 py-2 rounded-full hover:bg-yellow-400 transition-colors">Member Login</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-yellow-500 rounded-full pulse-ring inline-block" />
            Next batch: 1 – 21 June
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-6 tracking-tight">
            CRACK THE<br />
            <span className="text-yellow-500">21-DAY</span><br />
            WAKE-UP-ATHON
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed">
            A daily 15-minute power session at 5 AM. Miss once — you pay a penalty. Complete 21 days — you become a member for life.
          </p>

          <LiveCounter />

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <a href="https://rzp.io/l/5am-club-entry" target="_blank" rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg px-10 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-yellow-500/20">
              Secure Your Spot — ₹999
            </a>
            <a href="#how-it-works"
              className="border border-white/20 hover:border-white/50 text-white font-bold text-lg px-10 py-4 rounded-full transition-all hover:bg-white/5">
              See How It Works
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 text-xs">
          <span>Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
        </div>
      </section>

      {/* MARQUEE TICKER */}
      <div className="border-y border-yellow-500/20 bg-yellow-500/5 py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(6).fill(null).map((_, i) => (
            <span key={i} className="text-yellow-500 font-black text-sm uppercase tracking-widest mx-8">
              5 AM Club &nbsp;·&nbsp; Wake Up Early &nbsp;·&nbsp; 21 Days &nbsp;·&nbsp; No Excuses &nbsp;·&nbsp; Build Discipline &nbsp;·&nbsp; Join 5,500+ Members &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-yellow-500 mb-2">{s.value}</div>
              <div className="text-gray-400 text-sm uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-500 text-sm font-bold uppercase tracking-widest mb-3">The System</p>
            <h2 className="text-4xl md:text-5xl font-black">Proven Way to Become<br />an Early Riser</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Master Sleep Theory Workshop',
                desc: 'Crack the wake-up secret with our unparalleled sleep science — even if you\'re a night owl. 5 practical steps, myth-busting, and a biological alarm hack.',
                date: '31 May',
                icon: '🧠',
              },
              {
                step: '02',
                title: '21-Day Wake-up-athon',
                desc: 'Kick-start every morning with a 15-minute power session at 5 AM sharp. Multiple tracks, wake-up buddies, and a real penalty if you miss.',
                date: '1 – 21 June',
                icon: '⚡',
              },
              {
                step: '03',
                title: 'Get Club Membership',
                desc: 'Complete the 21-day challenge and unlock lifetime 5 AM Club membership — exclusive network, sub-communities, and your NFT certificate.',
                date: '21 June',
                icon: '🏆',
              },
            ].map((item) => (
              <div key={item.step} className="relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-yellow-500/30 transition-colors group">
                <div className="text-5xl mb-6">{item.icon}</div>
                <div className="text-yellow-500 text-xs font-black uppercase tracking-widest mb-2">Step {item.step}</div>
                <h3 className="text-xl font-black mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold px-3 py-1 rounded-full">
                  📅 {item.date}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://rzp.io/l/5am-club-entry" target="_blank" rel="noopener noreferrer"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg px-10 py-4 rounded-full transition-all hover:scale-105">
              Secure Your Spot Now
            </a>
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section id="tracks" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-500 text-sm font-bold uppercase tracking-widest mb-3">Morning Sessions</p>
            <h2 className="text-4xl md:text-5xl font-black">Kick-start Your Day<br />With 15-Min Tracks</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {TRACKS.map((track) => (
              <div key={track.title} className={`relative bg-gradient-to-br ${track.color} bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-yellow-500/30 transition-all hover:-translate-y-1`}>
                <div className="inline-block bg-white/10 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                  {track.tag}
                </div>
                <h3 className="text-xl font-black mb-2">{track.title}</h3>
                <p className="text-yellow-500 text-sm font-semibold mb-4">Led by {track.lead}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{track.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APP DOWNLOAD */}
      <section id="app" className="py-24 px-6 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-yellow-500/5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse inline-block" />
              Now Available
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              The Alarm That<br />
              <span className="text-yellow-500">Cannot Be Snoozed.</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
              The world&apos;s first accountability alarm. It rings at 5 AM, vibrates your phone, and the <strong className="text-white">only way to silence it</strong> is to join the live session. Stay 15 minutes. Miss it — it comes back.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — Phone mockup */}
            <div className="relative flex justify-center">
              {/* Glow rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border border-yellow-500/10 animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute w-80 h-80 rounded-full border border-yellow-500/5 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
              </div>

              {/* Phone frame */}
              <div className="relative z-10 w-64 animate-float">
                <div className="bg-gray-900 rounded-[3rem] border-4 border-gray-700 shadow-2xl shadow-yellow-500/20 overflow-hidden">
                  {/* Notch */}
                  <div className="bg-black h-8 flex items-center justify-center">
                    <div className="w-20 h-4 bg-gray-900 rounded-full" />
                  </div>

                  {/* Screen — Alarm state */}
                  <div className="bg-black px-4 py-6 min-h-[480px] flex flex-col items-center justify-center text-center">
                    {/* Pulsing alarm icon */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 rounded-full bg-red-500/30 animate-ping" />
                      <div className="relative w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center border border-red-500/40">
                        <span className="text-3xl">🔔</span>
                      </div>
                    </div>
                    <div className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-1">5 AM CLUB</div>
                    <div className="text-white text-2xl font-black mb-1">WAKE UP.</div>
                    <div className="text-gray-500 text-xs mb-6">Join to silence this alarm</div>

                    {/* Timer */}
                    <div className="bg-gray-900 rounded-2xl p-3 w-full mb-4 border border-white/10">
                      <div className="text-xs text-gray-500 mb-1">Session Timer</div>
                      <div className="text-yellow-500 text-2xl font-black">15:00</div>
                      <div className="w-full bg-gray-800 rounded-full h-1 mt-2">
                        <div className="bg-yellow-500 h-1 rounded-full w-0" />
                      </div>
                    </div>

                    {/* CTA button */}
                    <div className="w-full bg-yellow-500 rounded-2xl py-3 flex items-center justify-center gap-2">
                      <span className="text-black font-black text-sm">JOIN TO SILENCE</span>
                    </div>
                  </div>

                  {/* Home bar */}
                  <div className="bg-black h-8 flex items-end justify-center pb-2">
                    <div className="w-24 h-1 bg-gray-700 rounded-full" />
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -right-8 top-16 bg-green-500 text-black text-xs font-black px-3 py-1 rounded-full shadow-lg">
                  ✓ Streak: 7
                </div>
                <div className="absolute -left-10 bottom-24 bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg">
                  🔥 5,500+ members
                </div>
              </div>
            </div>

            {/* Right — Features + Download */}
            <div>
              {/* Feature list */}
              <div className="space-y-5 mb-10">
                {[
                  {
                    icon: '🔔',
                    title: 'Unstoppable 5 AM Alarm',
                    desc: 'Rings at exactly 5 AM with full-volume audio + haptic vibration. Cannot be dismissed from the lock screen. The only off switch is joining the session.',
                  },
                  {
                    icon: '📹',
                    title: 'Live Session Lock',
                    desc: 'Embedded Jitsi Meet session opens inside the app. Stay 15 minutes to complete your check-in. Leave early — alarm restarts immediately.',
                  },
                  {
                    icon: '🔥',
                    title: 'Streak Engine',
                    desc: 'Every completed session builds your streak. Miss one day and it resets to zero. Your streak is your identity in this club.',
                  },
                  {
                    icon: '⚡',
                    title: 'Background Persistence',
                    desc: 'Even if you close the app, the session timer keeps running. Your phone knows if you left. There is no escape.',
                  },
                  {
                    icon: '🤝',
                    title: 'Accountability Partner',
                    desc: 'Matched with a wake-up buddy every morning. They see if you showed up. You see if they did. Mutual accountability at 5 AM.',
                  },
                ].map((f) => (
                  <div key={f.title} className="flex gap-4 items-start group">
                    <div className="w-10 h-10 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex items-center justify-center text-lg flex-shrink-0 group-hover:bg-yellow-500/20 transition-colors">
                      {f.icon}
                    </div>
                    <div>
                      <div className="font-black mb-1">{f.title}</div>
                      <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Download buttons */}
              <div className="space-y-4">
                <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-4">Download the App</p>

                {/* Android */}
                <a
                  href="https://expo.dev/accounts/mnijhara/projects/five-am-club/builds/c3b1df80-b2c1-4092-b35f-fca2756625e6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-500/30 rounded-2xl px-6 py-4 transition-all group"
                >
                  <div className="w-10 h-10 flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
                      <path d="M17.523 15.341l1.5-2.598a.5.5 0 00-.866-.5l-1.52 2.633A9.5 9.5 0 0112 14a9.5 9.5 0 00-4.637 1.876l-1.52-2.633a.5.5 0 00-.866.5l1.5 2.598A9.5 9.5 0 002.5 22h19a9.5 9.5 0 00-3.977-6.659zM8.5 19a1 1 0 110-2 1 1 0 010 2zm7 0a1 1 0 110-2 1 1 0 010 2z" fill="#3DDC84"/>
                      <path d="M7 8l-1.5-2.6M17 8l1.5-2.6M9 2l1 2M15 2l-1 2" stroke="#3DDC84" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 uppercase tracking-widest">Download for</div>
                    <div className="font-black text-lg group-hover:text-yellow-500 transition-colors">Android</div>
                  </div>
                  <div className="text-gray-600 group-hover:text-yellow-500 transition-colors">→</div>
                </a>

                {/* iOS */}
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 opacity-60 cursor-not-allowed">
                  <div className="w-10 h-10 flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-400">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 uppercase tracking-widest">Coming Soon</div>
                    <div className="font-black text-lg text-gray-500">iOS App Store</div>
                  </div>
                  <div className="text-xs bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-2 py-1 rounded-full font-bold">Soon</div>
                </div>

                {/* PWA fallback */}
                <div className="text-center pt-2">
                  <p className="text-gray-600 text-xs">
                    On iPhone? Open this site in Safari → tap <strong className="text-gray-400">Share</strong> → <strong className="text-gray-400">Add to Home Screen</strong> for the full app experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom social proof */}
          <div className="mt-20 grid grid-cols-3 gap-6 border-t border-white/10 pt-12">
            {[
              { stat: '4.9★', label: 'Average Rating', sub: 'From early adopters' },
              { stat: '< 5MB', label: 'App Size', sub: 'Lightweight & fast' },
              { stat: '100%', label: 'Free to Download', sub: 'Pay only to join a batch' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl font-black text-yellow-500 mb-1">{item.stat}</div>
                <div className="font-bold text-sm mb-1">{item.label}</div>
                <div className="text-gray-500 text-xs">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-500 text-sm font-bold uppercase tracking-widest mb-3">Real Stories</p>
            <h2 className="text-4xl md:text-5xl font-black">Hear From Inside</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-yellow-500/20 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/20 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    {t.initial}
                  </div>
                  <div className="text-gray-400 text-sm">{t.role}</div>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">&ldquo;{t.text}&rdquo;</p>
                <div className="flex gap-1 mt-4">
                  {Array(5).fill(null).map((_, i) => (
                    <span key={i} className="text-yellow-500 text-sm">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-500 text-sm font-bold uppercase tracking-widest mb-3">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-black">Built by Early Risers,<br />For Early Risers</h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
              We are a small team obsessed with one idea — that winning your morning means winning your life. Every tool, session, and system we build is designed to make 5 AM the most powerful hour of your day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Accountability First', desc: 'We built real consequences into the system because motivation fades. Structure doesn\'t.' },
              { icon: '🌍', title: 'Global Community', desc: 'Members from 11 countries showing up at the same hour. You are never waking up alone.' },
              { icon: '🔬', title: 'Science-Backed', desc: 'Every track and session is designed around sleep science, habit formation, and peak performance research.' },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:border-yellow-500/20 transition-colors">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="font-black text-lg mb-3">{item.title}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-500 text-sm font-bold uppercase tracking-widest mb-3">Got Questions?</p>
            <h2 className="text-4xl md:text-5xl font-black">Frequently Asked</h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-500/20 transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4"
                >
                  <span className="font-bold text-sm md:text-base">{faq.q}</span>
                  <span className={`text-yellow-500 text-xl flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow-500/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Join Hundreds of Early Risers Taking Charge of Their Life.
          </h2>
          <p className="text-gray-400 text-xl mb-10 max-w-xl mx-auto">
            &ldquo;I was able to wake up from my first day. Now, every morning I kick-start my day with vibrant energy.&rdquo; — Poonam Mandke
          </p>
          <a href="https://rzp.io/l/5am-club-entry" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-black text-xl px-12 py-5 rounded-full transition-all hover:scale-105 shadow-2xl shadow-yellow-500/20">
            Pay &amp; Join Now — ₹999
          </a>
          <p className="text-gray-600 text-sm mt-6">Next batch starts 1 June · 15 min/day · 100% online</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="text-2xl font-black text-yellow-500 mb-4">5 AM CLUB</div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                A unit of OriginLabs. Headquartered in Vasco, Goa — a sea-facing house where we build tools to help millions wake up early and take charge of their lives.
              </p>
              <div className="space-y-1 text-sm text-gray-500">
                <a href="mailto:register@the5amclub.online" className="block hover:text-white transition-colors">
                  register@the5amclub.online
                </a>
                <a href="tel:+919811799776" className="block hover:text-white transition-colors">
                  +91 98117 99776
                </a>
              </div>
            </div>
            <div>
              <div className="font-black mb-4 text-sm uppercase tracking-widest text-gray-400">Quick Links</div>
              <div className="space-y-2 text-sm text-gray-500">
                <a href="#how-it-works" className="block hover:text-white transition-colors">How It Works</a>
                <a href="#tracks" className="block hover:text-white transition-colors">Tracks</a>
                <a href="#testimonials" className="block hover:text-white transition-colors">Stories</a>
                <a href="/login" className="block hover:text-white transition-colors">Member Login</a>
              </div>
            </div>
            <div>
              <div className="font-black mb-4 text-sm uppercase tracking-widest text-gray-400">Policies</div>
              <div className="space-y-2 text-sm text-gray-500">
                <a href="https://5amclub.co.in/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">Terms of Service</a>
                <a href="https://5amclub.co.in/penalty-policy" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">Penalty Policy</a>
                <a href="https://5amclub.co.in/privacy-policy" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">Privacy Policy</a>
                <a href="https://5amclub.co.in/refund-policy" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">Refund Policy</a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">© 2026 5 AM Club. All rights reserved.</p>
            <div className="flex gap-5">
              {/* Icons only — links to be added later */}
              <span className="text-gray-500 hover:text-white transition-colors cursor-pointer" title="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </span>
              <span className="text-gray-500 hover:text-white transition-colors cursor-pointer" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </span>
              <span className="text-gray-500 hover:text-white transition-colors cursor-pointer" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </span>
            </div>
            <blockquote className="text-gray-600 text-xs italic max-w-xs text-center md:text-right">
              &ldquo;It is well to be up before daybreak, for such habits contribute to health, wealth, and wisdom.&rdquo; — Aristotle
            </blockquote>
          </div>
        </div>
      </footer>

    </div>
  );
}
