'use client';
import { useState, useEffect } from 'react';

export default function R3FOrb({ fallbackMp4, disabled }:{ fallbackMp4?:string; disabled?:boolean }){
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time for the orb
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Always show fallback image for now to avoid Three.js version conflicts
  return (
    <div style={{
      height:360, 
      border:'1px solid rgba(212,175,55,.25)', 
      borderRadius:12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(45deg, #0a0a0a, #1a1a1a)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <img 
        src="/orb_goldfleck.png" 
        alt="Gold fleck orb" 
        style={{
          width:'80%', 
          maxWidth: '300px',
          height: 'auto',
          borderRadius: 12,
          opacity: loaded ? 1 : 0.5,
          transition: 'opacity 0.5s ease',
          filter: 'drop-shadow(0 0 20px rgba(212,175,55,0.3))'
        }}
      />
      <div style={{
        position: 'absolute',
        bottom: 12,
        right: 12,
        fontSize: 12,
        opacity: 0.6,
        color: '#D4AF37'
      }}>
        Interactive 3D (Fallback)
      </div>
    </div>
  );
}
