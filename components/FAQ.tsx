'use client';
export default function FAQ(){
  const items = [
    { q:'How fast?', a:'Simple sites 2–3 weeks. Complex interactions 4–6.' },
    { q:'Stack?', a:'Webflow for speed; Next.js/Three.js for advanced play.' },
    { q:'Handover?', a:'Editable CMS, pattern library, video walkthrough.' },
    { q:'Maintenance?', a:'Optional monthly care; patches guaranteed.' },
    { q:'Arabic?', a:'Full RTL and Arabic copy parity.' },
    { q:'Budget?', a:'Scoped after a 20-minute brief.' }
  ];
  return (
    <section className="section">
      <h2>FAQ</h2>
      <div style={{display:'grid', gap:10}}>
        {items.map((it,i)=>(
          <details key={i} className="card">
            <summary style={{padding:14, cursor:'pointer'}}>{it.q}</summary>
            <div style={{padding:'0 14px 14px'}}>{it.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
