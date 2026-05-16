'use client';
export default function MemberPortal() {
  const joinGoogleMeet = () => {
    window.location.href = "https://meet.google.com/YOUR-ROOM-CODE";
  };
  
  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center">
      <h1 className="text-4xl font-black text-yellow-500 mb-2">MEMBER PORTAL</h1>
      <p className="text-gray-400 mb-12">Session scheduled at 5:00 AM IST</p>
      
      <div className="w-full max-w-sm bg-gray-900 p-8 rounded-3xl border border-gray-800 mb-12 text-center">
        <div className="text-sm text-gray-500 uppercase tracking-widest mb-2">Next Session</div>
        <div className="text-3xl font-bold text-white">5:00 AM - 5:20 AM</div>
      </div>

      <button 
        onClick={joinGoogleMeet}
        className="w-full max-w-sm bg-yellow-500 text-black font-bold py-6 rounded-2xl text-xl hover:scale-105 transition"
      >
        JOIN GOOGLE MEET
      </button>
    </div>
  );
}
