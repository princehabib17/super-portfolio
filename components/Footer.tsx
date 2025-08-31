'use client';
export default function Footer(){
  return (
    <footer className="section" style={{opacity:.75}}>
      <div className="container" style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:12}}>
        <nav style={{display:'flex', gap:12}}>
          {['Services','Work','Process','About','Contact'].map(l=><a key={l} href={`#${l.toLowerCase()}`} className="btn secondary">{l}</a>)}
        </nav>
        <span>© 2025 Prince Designs</span>
      </div>
    </footer>
  );
}
