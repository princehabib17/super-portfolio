'use client';
import { useEffect, useRef } from 'react';
import { useGsap } from '@/lib/motion/gsapClient';
import Image from 'next/image';

export default function WebDesignTimeline({ reduced }:{ reduced:boolean }){
  const { gsap } = useGsap();
  const root = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    if (!root.current) return;
    const tl = gsap.timeline({ defaults: { duration: 0.4 } });
    // simple staged fades; scrub omitted for reduced-motion friendliness
    tl.to('.bad', { opacity:0 }, 0.6).fromTo('.good', { opacity:0 }, { opacity:1 }, 0.75);
  }, [gsap, reduced]);

  return (
    <div ref={root} style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16}}>
      <div className="bad" aria-label="Before">
        <Image src="/voltron_side_by_side.png" alt="Before/After UI plates" width={960} height={600} style={{width:'100%', height:'auto', borderRadius:12}}/>
      </div>
      <div className="good" aria-label="After" style={{opacity:0}}>
        <Image src="/nav_plus_pricing.png" alt="Refined navigation and pricing" width={960} height={600} style={{width:'100%', height:'auto', borderRadius:12}}/>
      </div>
    </div>
  );
}
