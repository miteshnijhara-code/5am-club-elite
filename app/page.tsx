'use client';
export default function LandingPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-8xl font-black text-yellow-500 mb-4 tracking-tighter">5 AM CLUB</h1>
      <p className="text-xl mb-12 text-gray-400">Where the 1% become the 0.1%.</p>
      
      <div className="bg-yellow-500 text-black px-12 py-6 rounded-full font-bold text-2xl mb-12 hover:scale-105 transition">
        JOIN THE NEXT COHORT
      </div>
      
      <div className="grid grid-cols-2 gap-4 max-w-sm">
         <div className="bg-gray-900 p-4 rounded-xl"> Streak: 4 Days </div>
         <div className="bg-gray-900 p-4 rounded-xl"> 212 Active Now </div>
      </div>
    </div>
  );
}
