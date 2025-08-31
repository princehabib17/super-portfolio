'use client';
export default function WorkflowRibbon({ steps }:{ steps:string[] }){
  return (
    <div style={{display:'flex', gap:12, alignItems:'center', marginTop:12}}>
      {steps.map((s,i)=>(
        <div key={s} style={{display:'flex', alignItems:'center', gap:12}}>
          <span style={{padding:'6px 10px', border:'1px solid rgba(212,175,55,.25)', borderRadius:999}}>{s}</span>
          {i<steps.length-1 && <span aria-hidden="true" style={{opacity:.5}}>→</span>}
        </div>
      ))}
    </div>
  );
}
