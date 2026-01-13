'use client';
export default function BentoWhy(){
  const tiles = [
    { title:'Speed', micro:'Weeks, not months.' },
    { title:'Code+Design', micro:'Unified decisions.' },
    { title:'Bilingual', micro:'Arabic + English.' },
    { title:'Automation', micro:'Bots do chores.' },
    { title:'3D/Motion', micro:'Feel the depth.' },
    { title:'Mobile-first', micro:'Thumb-ready flows.' }
  ];
  return (
    <section className="section">
      <h2>Why work with me</h2>
      <div
        className="bento-grid"
        style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))',
          gap:20,
          gridAutoRows: 'minmax(120px, auto)'
        }}
      >
        {tiles.map((t,i)=>(
          <div
            key={i}
            className="card"
            style={{
              padding:20,
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              gridColumn: i === 1 || i === 4 ? 'span 2' : 'span 1',
              background: i % 2 === 0
                ? 'rgba(212,175,55,.05)'
                : 'rgba(255,255,255,.02)',
              borderLeftWidth: i % 3 === 0 ? '3px' : '1px',
              borderLeftColor: i % 3 === 0 ? 'var(--gold)' : 'rgba(212,175,55,.22)'
            }}
          >
            <strong style={{fontSize:20, color:'var(--gold)', marginBottom:8}}>{t.title}</strong>
            <span style={{opacity:.85, fontSize:15}}>{t.micro}</span>
          </div>
        ))}
      </div>
      <div style={{marginTop:32}}>
        <img src="/bento_icons.png" alt="Bento icons" style={{width:'100%', height:'auto', borderRadius:12, opacity:.8}}/>
      </div>
    </section>
  );
}
