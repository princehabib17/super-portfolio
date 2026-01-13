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
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px,1fr))', gap:16}}>
        {tiles.map((t,i)=>(
          <div key={i} className="card" style={{padding:16, display:'grid', gap:6}}>
            <strong>{t.title}</strong>
            <span style={{opacity:.85}}>{t.micro}</span>
          </div>
        ))}
      </div>
      <div style={{marginTop:12}}>
        <img src="/bento_icons.png" alt="Bento icons" style={{width:'100%', height:'auto', borderRadius:12}}/>
      </div>
    </section>
  );
}
