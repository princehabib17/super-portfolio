'use client';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { useGsap } from '@/lib/motion/gsapClient';

export default function Hero(){
  const { gsap } = useGsap();
  const cta1 = useRef<HTMLAnchorElement>(null);
  const cta2 = useRef<HTMLAnchorElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from(logoRef.current, { opacity: 0, scale: 0.5, duration: 0.8 })
      .from(h1Ref.current, { opacity: 0, y: 50, duration: 0.8 }, '-=0.4')
      .from(pRef.current, { opacity: 0, y: 30, duration: 0.6 }, '-=0.4')
      .from([cta1.current, cta2.current], {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.5
      }, '-=0.3');
  }, [gsap]);

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
        <div ref={logoRef} style={{display:'flex', alignItems:'center', gap:12, marginBottom:16}}>
          <Image src="/prince_crown_logo.png" alt="Prince Designs logo" width={38} height={38} priority />
          <span style={{opacity:.7, fontSize:14}}>Black & Gold — Superpower Showcase</span>
        </div>
        <h1 ref={h1Ref} style={{margin:'0 0 12px'}}>Design that moves.</h1>
        <p ref={pRef} style={{opacity:.85, margin:'0 0 24px'}}>Web, apps, automation, motion, 3D — crafted for touch.</p>
        <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
          <a ref={cta1} className="btn" href="#services">Explore Services</a>
          <a ref={cta2} className="btn secondary" href="#work">See Case Studies</a>
        </div>
      </div>
    </header>
  );
}
