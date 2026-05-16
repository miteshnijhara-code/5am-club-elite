import React from 'react';
import { Download, Smartphone, Lock, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <header className="py-20 px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-black text-yellow-500 mb-6 tracking-tighter">5 AM CLUB</h1>
        <p className="text-2xl text-gray-300 max-w-2xl mx-auto mb-10">Own your morning. Master your life. Join the elite community that masters the first hour of the day.</p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a href="/android-download" className="bg-yellow-500 text-black font-bold py-4 px-10 rounded-full text-lg hover:scale-105 transition">
            DOWNLOAD ANDROID APP
          </a>
          <a href="/ios-setup" className="border-2 border-yellow-500 text-yellow-500 font-bold py-4 px-10 rounded-full text-lg hover:bg-yellow-500 hover:text-black transition">
            GET iOS ACCESS
          </a>
        </div>
      </header>

      {/* Value Prop */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
          <Feature icon={<Zap />} title="Hardened Protocol" desc="Our app doesn't stop until the session is complete." />
          <Feature icon={<Lock />} title="Accountability" desc="20 days of brain-active, live interactive sessions." />
          <Feature icon={<Smartphone />} title="Mobile Elite" desc="Native performance on both Android & iOS." />
        </div>
      </section>

      {/* Payment Funnel */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">SECURE YOUR MEMBERSHIP</h2>
        <div className="bg-white p-8 rounded-3xl mx-auto w-72 mb-6">
          <img src="/qr-code.png" alt="UPI QR Code" className="w-full" />
        </div>
        <p className="text-xl font-bold text-yellow-500">Scan UPI to pay membership fee.</p>
        <p className="text-gray-500 mt-2">After payment, verify with your UTR ID.</p>
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
