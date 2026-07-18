'use client';

import React from 'react';
import { useRef, useState, useEffect } from 'react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  videoUrl?: string;
  posterUrl?: string;
}

export default function Hero({
  title = 'Stories\nThat\nMove.',
  subtitle = 'Cinematic storytelling by Chiranjibi Khanal — Kathmandu, Nepal.',
  videoUrl = '/hero-video.mp4',
  posterUrl = '/hero-poster.jpg',
}: HeroProps) {

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [state, setState] = useState({
    line1: false, line2: false, line3: false,
    subtitle: false, scroll: false,
  });

  useEffect(() => {
    const t = (ms: number) => new Promise((r) => setTimeout(r, ms));
    async function animate() {
      await t(300); setState(s => ({ ...s, line1: true }));
      await t(120); setState(s => ({ ...s, line2: true }));
      await t(120); setState(s => ({ ...s, line3: true }));
      await t(400); setState(s => ({ ...s, subtitle: true }));
      await t(400); setState(s => ({ ...s, scroll: true }));
    }
    animate();
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const fadeUp = (active: boolean) => ({
    transition: 'transform 1000ms cubic-bezier(.16,1,.3,1), opacity 1000ms cubic-bezier(.16,1,.3,1)',
    transform: active ? 'translateY(0)' : 'translateY(60px)',
    opacity: active ? 1 : 0,
  });

  return (
    <section className="relative w-full overflow-hidden -mt-[88px]" style={{ height: '100svh' }}>
      {/* VIDEO */}
      <div
        className="absolute inset-0"
        style={{
          transform: state.line1 ? 'scale(1)' : 'scale(1.08)',
          transition: 'transform 4000ms cubic-bezier(.16,1,.3,1)',
        }}
      >
        <video
          ref={videoRef}
          autoPlay muted loop playsInline
          poster={posterUrl}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-black/40" />

      {/* TEXT — The video shows through the letters because each word uses
          -webkit-background-clip: text with the video frames used as the background */}
      <div
        className="absolute z-[2]"
        style={{
          left: 'clamp(24px, 4vw, 80px)',
          bottom: 'clamp(40px, 5vw, 70px)',
          maxWidth: '900px',
        }}
      >
        <div className="hero-title overflow-hidden">
          {title.split('\n').filter(l => l.trim()).map((line, i) => (
            <React.Fragment key={i}>
              <div
                className="inline-block"
                style={{
                  ...fadeUp(i === 0 ? state.line1 : i === 1 ? state.line2 : state.line3),
                  background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.2) 50%, #ffffff 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {line}
              </div>
              {i < title.split('\n').filter(l => l.trim()).length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Subtitle */}
      <p
        className="absolute z-[3]"
        style={{
          left: 'clamp(24px, 4vw, 80px)',
          bottom: 'clamp(24px, 3vw, 35px)',
          fontSize: 'clamp(14px, 1.2vw, 18px)',
          fontWeight: 400,
          lineHeight: 1.6,
          maxWidth: '420px',
          color: 'rgba(255,255,255,0.6)',
          textShadow: '0 2px 20px rgba(0,0,0,0.4)',
          transition: 'opacity 900ms ease',
          opacity: state.subtitle ? 1 : 0,
        }}
      >
        {subtitle}
      </p>

      {/* Mute Button */}
      <button
        onClick={toggleMute}
        className="absolute z-20 p-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
        style={{ bottom: 'clamp(24px, 3vw, 40px)', right: 'clamp(24px, 4vw, 60px)' }}
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" /></svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /></svg>
        )}
      </button>

      {/* Scroll Indicator */}
      {/* <div
        className="absolute z-10 flex flex-col items-center gap-2"
        style={{
          bottom: 'clamp(24px, 3vw, 40px)',
          left: '50%',
          transform: 'translateX(-50%)',
          transition: 'opacity 700ms ease 200ms',
          opacity: state.scroll ? 1 : 0,
        }}
      >
        <span className="text-[10px] text-text-muted uppercase tracking-[0.2em]">Scroll</span>
        <span className="w-px h-6 bg-border" />
      </div> */}
    </section>
  );
}
