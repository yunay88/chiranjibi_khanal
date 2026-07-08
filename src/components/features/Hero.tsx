'use client';
import { useRef, useState, useEffect } from 'react';
export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [state, setState] = useState({ logo: false, nav: false, line1: false, line2: false, line3: false, subtitle: false, scroll: false });
  useEffect(() => {
    const t = (ms: number) => new Promise(r => setTimeout(r, ms));
    async function animate() {
      await t(300); setState(s => ({...s, logo: true}));
      await t(100); setState(s => ({...s, nav: true}));
      await t(200); setState(s => ({...s, line1: true}));
      await t(120); setState(s => ({...s, line2: true}));
      await t(120); setState(s => ({...s, line3: true}));
      await t(400); setState(s => ({...s, subtitle: true}));
      await t(400); setState(s => ({...s, scroll: true}));
    }
    animate();
  }, []);
  const toggleMute = () => { if (videoRef.current) { videoRef.current.muted = !videoRef.current.muted; setIsMuted(!isMuted); } };
  const fu = (a: boolean, d = 0) => ({ transition: `transform 1000ms cubic-bezier(.16,1,.3,1) ${d}ms, opacity 1000ms cubic-bezier(.16,1,.3,1) ${d}ms`, transform: a ? 'translateY(0)' : 'translateY(60px)', opacity: a ? 1 : 0 });
  return (
    <section className="relative w-full overflow-hidden" style={{ height: '100svh' }}>
      <div className="absolute inset-0" style={{ transform: state.line1 ? 'scale(1)' : 'scale(1.08)', transition: 'transform 4000ms cubic-bezier(.16,1,.3,1)' }}>
        <div className="absolute inset-0 bg-bg/40" />
        <video ref={videoRef} autoPlay muted loop playsInline poster="/hero-poster.jpg" className="absolute inset-0 w-full h-full object-cover"><source src="/hero-video.mp4" type="video/mp4" /></video>
      </div>
      <div className="absolute z-20" style={{ left: 'clamp(24px, 4vw, 80px)', bottom: 'clamp(40px, 5vw, 70px)', maxWidth: '900px' }}>
        <div className="hero-title text-text overflow-hidden"><div style={fu(state.line1)}>Stories</div><div style={fu(state.line2)}>That</div><div style={fu(state.line3)}>Move.</div></div>
        <p className="text-text-secondary mt-6 md:mt-8" style={{ fontSize: 'clamp(16px, 1.2vw, 20px)', fontWeight: 400, lineHeight: 1.6, maxWidth: '420px', transition: 'transform 900ms cubic-bezier(.16,1,.3,1), opacity 900ms cubic-bezier(.16,1,.3,1)', transform: state.subtitle ? 'translateY(0)' : 'translateY(20px)', opacity: state.subtitle ? 1 : 0 }}>Cinematic storytelling by Chiranjibi Khanal Kathmandu, Nepal.</p>
      </div>
      <button onClick={toggleMute} className="absolute z-20 p-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300" style={{ bottom: 'clamp(24px, 3vw, 40px)', right: 'clamp(24px, 4vw, 60px)' }} aria-label={isMuted ? 'Unmute' : 'Mute'}>
        {isMuted ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A6A6A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg> :
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>}
      </button>
      <div className="absolute z-10 flex flex-col items-center gap-2" style={{ bottom: 'clamp(24px, 3vw, 40px)', left: '50%', transform: 'translateX(-50%)', transition: 'opacity 700ms ease 200ms', opacity: state.scroll ? 1 : 0 }}>
        <span className="text-[10px] text-text-muted uppercase tracking-[0.2em]">Scroll</span><span className="w-px h-6 bg-border" />
      </div>
    </section>
  );
}
