'use client';
import Image from 'next/image';

export default function ScrollShowreel({ src, poster, captions }:{ src?:string; poster?:string; captions?:string[]; }){
  // poster-only variant to avoid heavy video in starter bundle
  return (
    <div>
      {poster && <Image src={poster} alt="App showreel" width={1400} height={800} style={{width:'100%', height:'auto', borderRadius:12}}/>}
      {captions && <div style={{display:'flex', gap:8, flexWrap:'wrap', opacity:.8, fontSize:14, marginTop:8}}>
        {captions.map((c,i)=><span key={i} style={{border:'1px solid rgba(212,175,55,.25)', borderRadius:999, padding:'4px 10px'}}>{c}</span>)}
      </div>}
    </div>
  );
}
