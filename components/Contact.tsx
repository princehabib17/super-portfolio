'use client';
import { useState } from 'react';
export default function Contact(){
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent)=>{ e.preventDefault(); setSent(true); };
  return (
    <section className="section">
      <h2>Start a brief</h2>
      <form onSubmit={onSubmit} className="card" style={{padding:16, display:'grid', gap:12}}>
        <input required placeholder="Name" style={inp}/>
        <input required type="email" placeholder="Email" style={inp}/>
        <input placeholder="Company" style={inp}/>
        <textarea placeholder="Message" rows={5} style={{...inp, resize:'vertical'}}/>
        <button className="btn" type="submit">Send</button>
        {sent && <div role="status" style={{color:'#F2C94C'}}>Got it. I’ll reply within a day.</div>}
      </form>
    </section>
  );
}
const inp: React.CSSProperties = { background:'transparent', color:'inherit', border:'1px solid rgba(212,175,55,.25)', borderRadius:10, padding:'12px 14px' };
