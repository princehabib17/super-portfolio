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
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px,1fr))', gap:16}}>
        {items.map(cs=>(
          <article key={cs.slug} className="card">
            <img src={cs.img} alt={cs.title} style={{width:'100%', height:'auto', display:'block', borderTopLeftRadius:14, borderTopRightRadius:14}}/>
            <div style={{padding:14}}>
              <div style={{fontWeight:600, marginBottom:6}}>{cs.title}</div>
              <div style={{opacity:.85, fontSize:14}}>Problem: {cs.problem}</div>
              <div style={{opacity:.85, fontSize:14}}>Direction: {cs.direction}</div>
              <div style={{opacity:.85, fontSize:14}}>Outcome: {cs.outcome}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
