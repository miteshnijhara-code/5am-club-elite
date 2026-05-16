'use client';
import React, { useState, useEffect } from 'react';
import LiveCounter from './components/LiveCounter';

const TRACKS = [
  {
    title: 'The Discipline of Brahma Muhurta',
    lead: 'Harsh Ramteke',
    desc: 'Understand the ancient science of Amrit Kal — the sacred pre-dawn window — and build an unbreakable morning discipline rooted in scripture and modern habit science.',
    tag: 'Mindset',
    color: 'from-yellow-500/20 to-transparent',
  },
  {
    title: 'Kriya Yoga',
    lead: 'Certified Facilitator',
    desc: 'An ancient, scientific meditation technique focused on pranayama and breath regulation to accelerate mental clarity, spiritual growth, and daily energy.',
    tag: 'Meditation',
    color: 'from-purple-500/20 to-transparent',
  },
  {
    title: 'Body, Mind & Soul',
    lead: 'Sapna Verma',
    desc: '21 days of morning yoga designed to heal from within. Movement, mindfulness, and breathwork to restore your body and refresh your spirit every single morning.',
    tag: 'Yoga',
    color: 'from-green-500/20 to-transparent',
  },
  {
    title: 'Life is What You Make It',
    lead: 'Pranav Patil',
    desc: 'A 21-day journey of reflection, healing, and rebuilding — from confusion to clarity, from stuck to in control. Daily prompts, writing, and honest introspection.',
    tag: 'Growth',
    color: 'from-blue-500/20 to-transparent',
  },
];

const TESTIMONIALS = [
  {
    role: 'Entrepreneur, Mumbai',
    text: 'I never thought I could wake up at 5 AM consistently. After the 21-day challenge, it became the best part of my day. The accountability structure is what makes it stick.',
    initial: '🌅',
  },
  {
    role: 'Software Engineer, Pune',
    text: 'The penalty system sounds harsh but it\'s exactly what I needed. Knowing there\'s a consequence made me show up every single day. Completed 21 days and never looked back.',
    initial: '⚡',
  },
  {
    role: 'Fitness Coach, Bangalore',
    text: 'The 15-minute sessions are perfectly designed — short enough to not feel like a burden, powerful enough to completely shift your morning energy. Game changer.',
    initial: '🔥',
  },
  {
    role: 'Student, Delhi',
    text: 'Met incredible people from across the country at 5 AM. The community alone is worth it. We push each other every morning and the energy is unlike anything I\'ve experienced.',
    initial: '🏆',
  },
];

const FAQS = [
  {
    q: 'I have never been able to wake up this early. How will you help?',
    a: 'We use a proven 3-step system: a Sleep Theory workshop to fix your biology, a 21-day accountability structure with real penalties, and a wake-up buddy who checks in on you every morning.',
  },
  {
    q: 'Why 21 days?',
    a: 'Research shows 21 days is the minimum threshold to wire a new habit into your neural pathways. We designed the entire program around this science.',
  },
  {
    q: 'How long is each session?',
    a: 'Just 15 minutes. Sharp at 5 AM on Zoom. No fluff — pure focused energy to kick-start your day.',
  },
  {
    q: 'What happens if I miss a day?',
    a: 'You pay a penalty. That\'s the point. Skin in the game is what makes this work where every other morning routine has failed you.',
  },
  {
    q: 'Who can join?',
    a: 'Anyone with a smartphone and the desire to change. We have members from 11 countries, across all ages and professions.',
  },
];

const STATS = [
  { value: '5,500+', label: 'Early Risers' },
  { value: '65+', label: 'Wake-up-athons' },
  { value: '11', label: 'Countries' },
  { value: '39,000+', label: 'Hours of Clubbing' },
];

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-lg font-black text-yellow-500 tracking-tight">5 AM CLUB</span>
          <div className="flex items-center gap-6">
            <a href="#how-it-works" className="hidden md:block text-sm text-gray-400 hover:text-white transition-colors">How it works</a>
            <a href="#tracks" className="hidden md:block text-sm text-gray-400 hover:text-white transition-colors">Tracks</a>
            <a href="#testimonials" className="hidden md:block text-sm text-gray-400 hover:text-white transition-colors">Stories</a>
            <a href="/login" className="text-sm font-bold bg-yellow-500 text-black px-5 py-2 rounded-full hover:bg-yellow-400 transition-colors">Member Login</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-yellow-500 rounded-full pulse-ring inline-block" />
            Next batch: 1 – 21 June
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-6 tracking-tight">
            CRACK THE<br />
            <span className="text-yellow-500">21-DAY</span><br />
            WAKE-UP-ATHON
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed">
            A daily 15-minute power session at 5 AM. Miss once — you pay a penalty. Complete 21 days — you become a member for life.
          </p>

          <LiveCounter />

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <a href="https://rzp.io/l/5am-club-entry" target="_blank" rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg px-10 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-yellow-500/20">
              Secure Your Spot — ₹999
            </a>
            <a href="#how-it-works"
              className="border border-white/20 hover:border-white/50 text-white font-bold text-lg px-10 py-4 rounded-full transition-all hover:bg-white/5">
              See How It Works
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 text-xs">
          <span>Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
        </div>
      </section>

      {/* MARQUEE TICKER */}
      <div className="border-y border-yellow-500/20 bg-yellow-500/5 py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(6).fill(null).map((_, i) => (
            <span key={i} className="text-yellow-500 font-black text-sm uppercase tracking-widest mx-8">
              5 AM Club &nbsp;·&nbsp; Wake Up Early &nbsp;·&nbsp; 21 Days &nbsp;·&nbsp; No Excuses &nbsp;·&nbsp; Build Discipline &nbsp;·&nbsp; Join 5,500+ Members &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-yellow-500 mb-2">{s.value}</div>
              <div className="text-gray-400 text-sm uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-500 text-sm font-bold uppercase tracking-widest mb-3">The System</p>
            <h2 className="text-4xl md:text-5xl font-black">Proven Way to Become<br />an Early Riser</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Master Sleep Theory Workshop',
                desc: 'Crack the wake-up secret with our unparalleled sleep science — even if you\'re a night owl. 5 practical steps, myth-busting, and a biological alarm hack.',
                date: '31 May',
                icon: '🧠',
              },
              {
                step: '02',
                title: '21-Day Wake-up-athon',
                desc: 'Kick-start every morning with a 15-minute power session at 5 AM sharp. Multiple tracks, wake-up buddies, and a real penalty if you miss.',
                date: '1 – 21 June',
                icon: '⚡',
              },
              {
                step: '03',
                title: 'Get Club Membership',
                desc: 'Complete the 21-day challenge and unlock lifetime 5 AM Club membership — exclusive network, sub-communities, and your NFT certificate.',
                date: '21 June',
                icon: '🏆',
              },
            ].map((item) => (
              <div key={item.step} className="relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-yellow-500/30 transition-colors group">
                <div className="text-5xl mb-6">{item.icon}</div>
                <div className="text-yellow-500 text-xs font-black uppercase tracking-widest mb-2">Step {item.step}</div>
                <h3 className="text-xl font-black mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold px-3 py-1 rounded-full">
                  📅 {item.date}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://rzp.io/l/5am-club-entry" target="_blank" rel="noopener noreferrer"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg px-10 py-4 rounded-full transition-all hover:scale-105">
              Secure Your Spot Now
            </a>
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section id="tracks" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-500 text-sm font-bold uppercase tracking-widest mb-3">Morning Sessions</p>
            <h2 className="text-4xl md:text-5xl font-black">Kick-start Your Day<br />With 15-Min Tracks</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {TRACKS.map((track) => (
              <div key={track.title} className={`relative bg-gradient-to-br ${track.color} bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-yellow-500/30 transition-all hover:-translate-y-1`}>
                <div className="inline-block bg-white/10 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                  {track.tag}
                </div>
                <h3 className="text-xl font-black mb-2">{track.title}</h3>
                <p className="text-yellow-500 text-sm font-semibold mb-4">Led by {track.lead}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{track.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-500 text-sm font-bold uppercase tracking-widest mb-3">Real Stories</p>
            <h2 className="text-4xl md:text-5xl font-black">Hear From Inside</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-yellow-500/20 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/20 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    {t.initial}
                  </div>
                  <div className="text-gray-400 text-sm">{t.role}</div>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">&ldquo;{t.text}&rdquo;</p>
                <div className="flex gap-1 mt-4">
                  {Array(5).fill(null).map((_, i) => (
                    <span key={i} className="text-yellow-500 text-sm">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-500 text-sm font-bold uppercase tracking-widest mb-3">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-black">Built by Early Risers,<br />For Early Risers</h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
              We are a small team obsessed with one idea — that winning your morning means winning your life. Every tool, session, and system we build is designed to make 5 AM the most powerful hour of your day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Accountability First', desc: 'We built real consequences into the system because motivation fades. Structure doesn\'t.' },
              { icon: '🌍', title: 'Global Community', desc: 'Members from 11 countries showing up at the same hour. You are never waking up alone.' },
              { icon: '🔬', title: 'Science-Backed', desc: 'Every track and session is designed around sleep science, habit formation, and peak performance research.' },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:border-yellow-500/20 transition-colors">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="font-black text-lg mb-3">{item.title}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-500 text-sm font-bold uppercase tracking-widest mb-3">Got Questions?</p>
            <h2 className="text-4xl md:text-5xl font-black">Frequently Asked</h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-500/20 transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4"
                >
                  <span className="font-bold text-sm md:text-base">{faq.q}</span>
                  <span className={`text-yellow-500 text-xl flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow-500/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Join Hundreds of Early Risers Taking Charge of Their Life.
          </h2>
          <p className="text-gray-400 text-xl mb-10 max-w-xl mx-auto">
            &ldquo;I was able to wake up from my first day. Now, every morning I kick-start my day with vibrant energy.&rdquo; — Poonam Mandke
          </p>
          <a href="https://rzp.io/l/5am-club-entry" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-black text-xl px-12 py-5 rounded-full transition-all hover:scale-105 shadow-2xl shadow-yellow-500/20">
            Pay &amp; Join Now — ₹999
          </a>
          <p className="text-gray-600 text-sm mt-6">Next batch starts 1 June · 15 min/day · 100% online</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="text-2xl font-black text-yellow-500 mb-4">5 AM CLUB</div>
              <p className="text-gray-500 text-sm leading-relaxed">
                A unit of OriginLabs. Headquartered in Vasco, Goa — a sea-facing house where we build tools to help millions wake up early and take charge of their lives.
              </p>
            </div>
            <div>
              <div className="font-black mb-4 text-sm uppercase tracking-widest text-gray-400">Quick Links</div>
              <div className="space-y-2 text-sm text-gray-500">
                <a href="#how-it-works" className="block hover:text-white transition-colors">How It Works</a>
                <a href="#tracks" className="block hover:text-white transition-colors">Tracks</a>
                <a href="#testimonials" className="block hover:text-white transition-colors">Stories</a>
                <a href="/login" className="block hover:text-white transition-colors">Member Login</a>
              </div>
            </div>
            <div>
              <div className="font-black mb-4 text-sm uppercase tracking-widest text-gray-400">Policies</div>
              <div className="space-y-2 text-sm text-gray-500">
                <a href="https://5amclub.co.in/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">Terms of Service</a>
                <a href="https://5amclub.co.in/penalty-policy" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">Penalty Policy</a>
                <a href="https://5amclub.co.in/privacy-policy" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">Privacy Policy</a>
                <a href="https://5amclub.co.in/refund-policy" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">Refund Policy</a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">© 2026 5 AM Club. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://wa.me/919823671410" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-sm">WhatsApp</a>
              <a href="https://www.instagram.com/5amclub.co.in/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-sm">Instagram</a>
              <a href="https://www.linkedin.com/company/5amclub/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-sm">LinkedIn</a>
            </div>
            <blockquote className="text-gray-600 text-xs italic max-w-xs text-center md:text-right">
              &ldquo;It is well to be up before daybreak, for such habits contribute to health, wealth, and wisdom.&rdquo; — Aristotle
            </blockquote>
          </div>
        </div>
      </footer>

    </div>
  );
}
