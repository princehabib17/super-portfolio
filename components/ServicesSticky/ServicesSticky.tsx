'use client';
import { useEffect, useRef, useState } from 'react';
import { useGsap } from '@/lib/motion/gsapClient';
import WebDesignTimeline from './WebDesignTimeline';
import ScrollShowreel from './ScrollShowreel';
import WorkflowRibbon from './WorkflowRibbon';
import MotionLottie from './MotionLottie';
import R3FOrb from './R3FOrb';
import { useReducedMotion } from '@/lib/a11y/useReducedMotion';

const LEFT = [
  { id:'web',   title:'Web Design',      one:'Sites that invite play and convert without shouting.' },
  { id:'apps',  title:'Mobile Apps',     one:'From prototype to store-ready, crisp and responsive.' },
  { id:'ai',    title:'AI Automation',   one:'Bots handle the boring. You keep the creative.' },
  { id:'motion',title:'Motion Graphics', one:'Narratives that glide, not flash.' },
  { id:'threeD',title:'3D Animation',    one:'Form, light, and physics, on cue.' },
];

export default function ServicesSticky(){
  const { gsap, ScrollTrigger } = useGsap();
  const reduced = useReducedMotion();
  const [active, setActive] = useState<string>('web');

  useEffect(()=>{
    const panels = gsap.utils.toArray<HTMLElement>('.service-panel');
    panels.forEach((panel)=>{
      ScrollTrigger.create({
        trigger: panel,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActive(panel.dataset.id!),
        onEnterBack: () => setActive(panel.dataset.id!),
      });
    });
    return ()=> ScrollTrigger.getAll().forEach(t=>t.kill());
  }, [gsap, ScrollTrigger]);

  return (
    <section id="services" className="section">
      <div className="services">
        <aside className="leftRail" aria-label="Services sticky list">
          <ul>
            {LEFT.map(item=>(
              <li key={item.id} aria-current={active===item.id}>
                <div style={{fontWeight:600}}>{item.title}</div>
                <div style={{opacity:.75, fontSize:14}}>{item.one}</div>
              </li>
            ))}
          </ul>
        </aside>

        <div className="rightPanels">
          <section className="service-panel" data-id="web" aria-labelledby="web">
            <h2 id="web">Web Design — Bad → Good + Artifact Playground</h2>
            <WebDesignTimeline reduced={reduced} />
          </section>

          <section className="service-panel" data-id="apps" aria-labelledby="apps">
            <h2 id="apps">Mobile Apps — Scroll-scrub showreel</h2>
            <ScrollShowreel src="" poster="/apps_strip.png" captions={['One-tap auth','Offline sync','Native gestures']}/>
          </section>

          <section className="service-panel" data-id="ai" aria-labelledby="ai">
            <h2 id="ai">AI Automation — Montage + Workflow ribbon</h2>
            <img src="/ai_ribbon.png" alt="AI workflow Trigger → Transform → Deliver" style={{width:'100%', borderRadius:12}}/>
            <WorkflowRibbon steps={['Trigger','Transform','Deliver']} />
          </section>

          <section className="service-panel" data-id="motion" aria-labelledby="motion">
            <h2 id="motion">Motion Graphics — Lottie stitch, scroll-tied</h2>
            <MotionLottie src="/lottie/motion_logo_stitch.json" />
          </section>

          <section className="service-panel" data-id="threeD" aria-labelledby="threeD">
            <h2 id="threeD">3D Animation — Gold-fleck orb</h2>
            <R3FOrb fallbackMp4="" disabled={reduced}/>
          </section>
        </div>
      </div>
    </section>
  );
}
