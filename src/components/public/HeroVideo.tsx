'use client';

import { useRef, useState, useEffect } from 'react';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-bg">
      <video
        ref={videoRef}
        autoPlay muted loop playsInline
        poster="/poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-bg/60" />

      {/* Animated Content */}
      <div className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ease-out ${
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* 1. Subtitle — appears first */}
        <p className={`section-label mb-4 transition-all duration-700 delay-[200ms] ease-out ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Photographer & Videographer
        </p>

        {/* 2. Name — appears second */}
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold text-text mb-6 leading-tight transition-all duration-700 delay-[500ms] ease-out ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Chiranjibi<br />Khanal
        </h1>

        {/* 3. Tagline — appears third */}
        <p className={`text-text-secondary text-base md:text-lg max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-[800ms] ease-out ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Capturing moments that tell stories — through the lens and beyond.
        </p>
      </div>

      {/* Mute Button */}
      <button onClick={toggleMute}
        className="absolute bottom-24 md:bottom-16 right-6 z-20 p-3 rounded-full border border-border bg-bg/40 backdrop-blur-sm hover:bg-surface transition-all"
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a0a0a0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        )}
      </button>

      {/* Scroll indicator — appears last */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 transition-all duration-700 delay-[1100ms] ease-out ${
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <span className="text-xs text-text-muted uppercase tracking-widest">Scroll</span>
        <span className="w-px h-8 bg-border" />
      </div>
    </section>
  );
}