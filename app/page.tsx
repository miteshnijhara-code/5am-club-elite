'use client';
import React from 'react';

export default function LandingPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <nav className="p-6 flex justify-between items-center border-b border-gray-900">
        <span className="text-xl font-black text-yellow-500">5 AM CLUB</span>
        <a href="/portal" className="text-sm uppercase tracking-widest border px-4 py-2 hover:bg-white hover:text-black">Member Login</a>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none">THE PROTOCOL.</h1>
        <p className="text-2xl text-gray-400 mb-12">20 days. 5 AM. No excuses. If you miss, you're out.</p>
        
        <div className="flex flex-col items-center gap-8">
          <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-sm border border-yellow-500/30">
            <p className="text-gray-400 text-sm mb-2 uppercase tracking-widest">Entry Fee</p>
            <p className="text-5xl font-black text-yellow-500 mb-6">₹999</p>
            <button className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold">JOIN THE NEXT BATCH</button>
          </div>
          
          <p className="text-gray-500 max-w-lg">Our members aren't just waking up. They are engineering their careers, fitness, and mental clarity through our proprietary 20-day streak engine.</p>
        </div>
      </main>
    </div>
  );
}
