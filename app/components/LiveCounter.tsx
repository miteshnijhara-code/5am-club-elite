'use client';
import { useState, useEffect } from 'react';

export default function LiveCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(Math.floor(Math.random() * 50) + 120);
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-yellow-500/10 border border-yellow-500/50 text-yellow-500 py-3 px-6 rounded-full inline-block mb-8 text-sm font-bold tracking-widest">
      {count} ELITE MEMBERS ACTIVE NOW
    </div>
  );
}
