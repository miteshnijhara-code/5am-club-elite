'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, ShieldCheck, Zap, Users, CheckCircle2, PlayCircle, Star, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500 selection:text-black overflow-x-hidden">
      
      {/* Navbar Placeholder */}
      <nav className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-black tracking-tighter flex items-center gap-2">
          <Zap className="text-yellow-500 w-6 h-6" /> 
          5 AM CLUB <span className="text-yellow-500">ELITE</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#tracks" className="hover:text-white transition">Tracks</a>
          <a href="#how-it-works" className="hover:text-white transition">How it Works</a>
          <a href="#reviews" className="hover:text-white transition">Reviews</a>
        </div>
        <a href="/login" className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full text-sm font-bold transition">
          Member Login
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-semibold mb-8"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
          </span>
          Next Wake-up-athon starts Monday
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6"
        >
          EARLY RISING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            MADE INEVITABLE.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 font-light leading-relaxed"
        >
          Join thousands of high-performers in a 21-day guided challenge. Powered by our proprietary <strong className="text-white font-semibold">Join-to-Silence™</strong> tech — you simply cannot oversleep.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a href="#pricing" className="bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg px-10 py-5 rounded-full flex items-center justify-center gap-2 transition group">
            SECURE YOUR SPOT
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#how-it-works" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-lg px-10 py-5 rounded-full flex items-center justify-center gap-2 transition">
            <PlayCircle className="w-5 h-5" /> WATCH DEMO
          </a>
        </motion.div>
      </section>

      {/* Stats Bar (Competitor parity) */}
      <section className="border-y border-white/10 bg-white/5 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          <Stat value="3,126+" label="Early Risers" />
          <Stat value="18,200+" label="Hours of Clubbing" />
          <Stat value="37" label="Wake-up-athons" />
          <Stat value="756" label="Days of Consistency" />
        </div>
      </section>

      {/* How It Works - The Hook */}
      <section id="how-it-works" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4">THE PROTOCOL</h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">We replaced willpower with technology. Here is exactly what happens when you join.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent -z-10" />
          
          <Step 
            number="01" 
            icon={<Smartphone className="w-8 h-8 text-yellow-500" />}
            title="The Unstoppable Alarm" 
            desc="Our PWA triggers a persistent alarm at 4:55 AM. Snooze doesn't exist." 
          />
          <Step 
            number="02" 
            icon={<ShieldCheck className="w-8 h-8 text-yellow-500" />}
            title="Join to Silence™" 
            desc="The only way to stop the alarm is by entering the live Google Meet room." 
          />
          <Step 
            number="03" 
            icon={<Users className="w-8 h-8 text-yellow-500" />}
            title="15-Min Power Session" 
            desc="Start your day with Kriya Yoga, breathwork, and goal-setting with 200+ elite members." 
          />
        </div>
      </section>

      {/* Pricing / CTA */}
      <section id="pricing" className="py-32 px-6 bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-black mb-6">COMMIT TO YOUR FUTURE.</h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">It's a worthy investment for yourself if you want to enhance your life. 21 days is all it takes to rewire your brain.</p>
            
            <ul className="space-y-4 mb-8">
              <CheckItem text="Full 21-Day Guided Challenge" />
              <CheckItem text="Access to Join-to-Silence™ App" />
              <CheckItem text="Daily 15-Min Live Sessions" />
              <CheckItem text="Progress & Streak Tracking Dashboard" />
            </ul>
          </div>

          <div className="w-full md:w-[380px] bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center flex flex-col items-center">
            <div className="text-yellow-500 font-bold mb-2">LIMITED SEATS</div>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-3xl font-bold text-gray-400">₹</span>
              <span className="text-6xl font-black text-white">999</span>
            </div>
            <div className="text-gray-400 mb-8">for the full 21 days</div>
            
            <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg py-4 rounded-xl transition">
              PAY & JOIN NOW
            </button>
            <p className="text-xs text-gray-500 mt-4 text-center">Secure UPI checkout via Razorpay</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 text-center text-gray-500">
        <div className="flex items-center justify-center gap-2 font-black tracking-tighter text-white mb-6">
          <Zap className="text-yellow-500 w-5 h-5" /> 
          5 AM CLUB
        </div>
        <p>© {new Date().getFullYear()} 5 AM Club Elite. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Penalty Policy</a>
        </div>
      </footer>
    </div>
  );
}

function Stat({ value, label }: { value: string, label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-black text-white mb-1">{value}</div>
      <div className="text-sm md:text-base text-yellow-500 font-semibold">{label}</div>
    </div>
  );
}

function Step({ number, icon, title, desc }: { number: string, icon: any, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white/5 border border-white/10 rounded-3xl">
      <div className="w-16 h-16 bg-black border border-white/10 rounded-2xl flex items-center justify-center mb-6 relative">
        <div className="absolute -top-3 -left-3 text-xs font-black text-gray-500 bg-gray-900 px-2 py-1 rounded">{number}</div>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-gray-300">
      <CheckCircle2 className="text-yellow-500 w-5 h-5 flex-shrink-0" />
      <span>{text}</span>
    </li>
  );
}
