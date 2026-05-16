'use client';
import React from 'react';
import LiveCounter from './components/LiveCounter';
import { Zap, Lock, Smartphone } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans p-6 md:p-20">
      <div className="max-w-4xl mx-auto text-center">
        <LiveCounter />
        <h1 className="text-7xl font-black text-yellow-500 mb-6 tracking-tighter">5 AM CLUB</h1>
        <p className="text-2xl text-gray-400 mb-12">The elite protocol for those who win the day before it starts.</p>
        
        <div className="flex flex-col gap-6 justify-center">
          <a href="/portal" className="bg-yellow-500 text-black font-black py-6 px-12 rounded-full text-xl hover:scale-105 transition uppercase tracking-widest">
            ENTER MEMBER PORTAL
          </a>
        </div>
      </div>
    </div>
  );
}
