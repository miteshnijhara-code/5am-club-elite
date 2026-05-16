'use client';
import React from 'react';
import LiveCounter from './components/LiveCounter';
import { Smartphone, Lock, Zap, Star } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="py-20 px-6 text-center">
        <LiveCounter />
        <h1 className="text-6xl md:text-8xl font-black text-yellow-500 mb-6 tracking-tighter">5 AM CLUB</h1>
        <p className="text-2xl text-gray-300 max-w-2xl mx-auto mb-10">Own your morning. Master your life. Join 200+ elite members in the 20-day habit transformation.</p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a href="/portal" className="bg-yellow-500 text-black font-bold py-4 px-10 rounded-full text-lg hover:scale-105 transition">
            JOIN THE CLUB
          </a>
        </div>
      </header>

      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
          <Feature icon={<Zap />} title="Hardened Protocol" desc="App locks until session ends." />
          <Feature icon={<Lock />} title="Accountability" desc="20 days of brain-active sessions." />
          <Feature icon={<Smartphone />} title="Mobile Elite" desc="Native app integration." />
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-yellow-500">TRUSTED BY ELITES</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <p className="italic text-gray-300">"The best decision of my career was joining the club. My productivity has tripled."</p>
            <p className="mt-4 font-bold">- Rahul, Tech Founder</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <p className="italic text-gray-300">"This isn't just a wake-up club. It's a mental gym."</p>
            <p className="mt-4 font-bold">- Priya, Designer</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">MEMBERSHIP: ₹999 / 20 DAYS</h2>
        <div className="bg-white p-6 rounded-3xl mx-auto w-72 mb-6">
          <img src="/qr-code.png" alt="UPI QR Code" className="w-full" />
        </div>
        <p className="text-xl font-bold text-yellow-500">Scan to pay via UPI.</p>
        <p className="text-gray-500 mt-2">After payment, message your UTR to +91-XXXX-XXXXXX.</p>
      </section>
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-yellow-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}
