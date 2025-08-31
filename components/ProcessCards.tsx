'use client';
export default function ProcessCards(){
  const steps = [
    { t:'Discovery', b:'Goals, audience, constraints, success signals.' },
    { t:'Direction', b:'North star, references, motion grammar.' },
    { t:'Design', b:'Systems, components, interactions.' },
    { t:'Build', b:'Clean code, perf budget, QA gates.' },
    { t:'Polish', b:'Copy tone, a11y, RTL, micro-motion.' },
    { t:'Aftercare', b:'Analytics, tweaks, steady improvements.' },
  ];
  return (
    <section className="section">
      <h2>Process</h2>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px,1fr))', gap:16}}>
        {steps.map(s=>(
          <article key={s.t} className="card" style={{padding:16}}>
            <div style={{fontWeight:600, marginBottom:6}}>{s.t}</div>
            <p style={{opacity:.85}}>{s.b}</p>
          </article>
        ))}
      </div>
      <div style={{marginTop:12}}>
        <img src="/process_icons.png" alt="Process icons" style={{width:'100%', height:'auto', borderRadius:12}}/>
      </div>
    </section>
  );
}
