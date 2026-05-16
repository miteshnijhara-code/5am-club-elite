'use client';
import { useState } from 'react';

export default function MemberPortal() {
  const [streak, setStreak] = useState(4); // Example Data: Day 4 of 20
  
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-black text-yellow-500 mb-2">YOUR JOURNEY</h1>
      <p className="text-gray-400 mb-8">DAY {streak} OF 20 | STAY UNSTOPPABLE</p>
      
      <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 mb-8">
        <div className="text-center text-7xl font-bold mb-4">{streak}</div>
        <div className="text-center text-gray-500 uppercase tracking-widest">Current Streak</div>
      </div>

      <button className="w-full bg-yellow-500 text-black font-bold py-4 rounded-full text-lg">
        JOIN 5 AM GOOGLE MEET
      </button>
    </div>
  );
}
