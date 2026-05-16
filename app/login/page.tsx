'use client';

import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Zap, Mail, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/portal`,
      },
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Check your email for the magic link!');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-xl relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-500/20 blur-[60px] rounded-full pointer-events-none" />
        
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl flex items-center justify-center">
            <Zap className="text-yellow-500 w-8 h-8" />
          </div>
        </div>

        <h2 className="text-3xl font-black text-center mb-2">Member Login</h2>
        <p className="text-gray-400 text-center mb-8">Enter your email to receive a secure magic link.</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com" 
                className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-yellow-500 transition-colors placeholder:text-gray-600"
              />
            </div>
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:opacity-50 disabled:hover:bg-yellow-500 text-black font-black text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition group"
          >
            {loading ? 'SENDING...' : 'SEND MAGIC LINK'}
            {!loading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
          </button>
        </form>

        {message && (
          <div className={`mt-6 p-4 rounded-xl text-center text-sm font-semibold ${message.includes('Check your email') ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
