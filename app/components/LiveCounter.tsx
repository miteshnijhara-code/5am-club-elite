'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export default function LiveCounter() {
  const [count, setCount] = useState(120);

  useEffect(() => {
    async function fetchCount() {
      try {
        const { count: realCount, error } = await supabase
          .from('users')
          .select('*', { count: 'exact', head: true });
        
        if (!error && realCount !== null) {
          // Add a baseline of 120 so it always looks populated even on day 1
          setCount(120 + realCount);
        }
      } catch (e) {
        console.error('Error fetching count:', e);
      }
    }
    
    fetchCount();

    // Subtle random fluctuation to simulate live traffic
    const interval = setInterval(() => {
      setCount(prev => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-yellow-500/10 border border-yellow-500/50 text-yellow-500 py-3 px-6 rounded-full inline-block mb-8 text-sm font-bold tracking-widest transition-all">
      {count} ELITE MEMBERS ACTIVE
    </div>
  );
}
