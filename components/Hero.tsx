'use client';
import Image from 'next/image';
import { useRef } from 'react';

export default function Hero(){
  const cta1 = useRef<HTMLAnchorElement>(null);
  const cta2 = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const targets = [cta1.current, cta2.current].filter(Boolean) as HTMLElement[];
    targets.forEach(el=>{
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width/2);
      const dy = e.clientY - (rect.top + rect.height/2);
      const dist = Math.hypot(dx, dy);
      const radius = 64, strength = 0.15;
      el.style.transform = dist < radius ? `translate(${(-dx)*strength}px, ${(-dy)*strength}px)` : 'translate(0,0)';
    });
  };
  const onLeave = ()=> [cta1.current, cta2.current].forEach(el=>{ if (el) el.style.transform = 'translate(0,0)'; });

  return (
    <header className="section" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="container" style={{paddingTop: '64px', paddingBottom: '32px'}}>
        <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:16}}>
          <Image src="/prince_crown_logo.png" alt="Prince Designs logo" width={38} height={38} priority />
          <span style={{opacity:.7, fontSize:14}}>Black & Gold — Superpower Showcase</span>
        </div>
        <h1 style={{fontSize:40, lineHeight:'48px', margin:'0 0 12px'}}>Design that moves.</h1>
        <p style={{opacity:.85, margin:'0 0 24px'}}>Web, apps, automation, motion, 3D — crafted for touch.</p>
        <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
          <a ref={cta1} className="btn" href="#services">Explore Services</a>
          <a ref={cta2} className="btn secondary" href="#work">See Case Studies</a>
        </div>
      </div>
    </header>
  );
}
