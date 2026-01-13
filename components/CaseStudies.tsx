'use client';
export default function CaseStudies(){
  const items = [
    { slug: 'dxb-renewables', title: 'DXB Renewables', img:'/case_dxb.png', problem:'Dense pricing confused buyers.', direction:'Interactive tiles instead of charts.', outcome:'Faster understanding; calmer decisions.'},
    { slug: 'mahali-app', title: 'Mahali App', img:'/case_mahali.png', problem:'Frictiony onboarding.', direction:'Scroll-scrub narrative + native gestures.', outcome:'Onboarding feels inevitable.'},
    { slug: 'gulf-auto-parts', title: 'Gulf Auto Parts', img:'/case_gap.png', problem:'Flat PDP for complex parts.', direction:'Motion-led exploded views.', outcome:'Confidence without spreadsheets.'}
  ];
  return (
    <section id="work" className="section">
      <h2>Case Studies</h2>
      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',
        gap:24,
        gridAutoRows: 'minmax(300px, auto)'
      }}
      className="case-studies-grid"
      >
        {items.map((cs, idx) => (
          <article
            key={cs.slug}
            className="card"
            style={{
              gridColumn: idx === 0 ? 'span 2' : 'span 1',
              transform: `rotate(${idx % 2 === 0 ? '0.5deg' : '-0.5deg'})`,
              transition: 'all 0.3s ease'
            }}
          >
            <img src={cs.img} alt={cs.title} style={{width:'100%', height:'auto', display:'block', borderTopLeftRadius:14, borderTopRightRadius:14}}/>
            <div style={{padding:20}}>
              <div style={{fontWeight:600, marginBottom:12, fontSize:18, color:'var(--gold)'}}>{cs.title}</div>
              <div style={{opacity:.85, fontSize:14, marginBottom:6}}><strong>Problem:</strong> {cs.problem}</div>
              <div style={{opacity:.85, fontSize:14, marginBottom:6}}><strong>Direction:</strong> {cs.direction}</div>
              <div style={{opacity:.85, fontSize:14}}><strong>Outcome:</strong> {cs.outcome}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
