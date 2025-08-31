'use client';
import { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';

export default function MotionLottie({ src }:{ src:string }){
  const [animationData, setAnimationData] = useState(null);
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch(src);
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error('Failed to load Lottie animation:', error);
      }
    };

    loadAnimation();
  }, [src]);

  useEffect(() => {
    if (lottieRef.current && animationData) {
      // Start paused at frame 10
      lottieRef.current.goToAndStop(10, true);
    }
  }, [animationData]);

  if (!animationData) {
    return (
      <div style={{
        width:'100%', 
        minHeight:240, 
        border:'1px solid rgba(212,175,55,.2)', 
        borderRadius:12,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        opacity: 0.6
      }}>
        Loading animation...
      </div>
    );
  }

  return (
    <div style={{width:'100%', minHeight:240, border:'1px solid rgba(212,175,55,.2)', borderRadius:12}}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={false}
        style={{ width: '100%', height: '240px' }}
      />
    </div>
  );
}
