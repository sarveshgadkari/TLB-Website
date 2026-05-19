const milestones = [
  {
    delay: '',
    dot: 'timeline-dot',
    year: '1987 — The Beginning',
    heading: 'Founded at 25',
    text: 'At just 25 years old, the founder establishes TLBISBIG — launching as a private, small-business consulting firm built on the conviction that strategic thinking and bold execution can transform industries and build lasting enterprise value.',
    gold: false,
  },
  {
    delay: 'delay-1',
    dot: 'timeline-dot',
    year: '30+ Years — Global Expansion',
    heading: 'Beyond US Borders',
    text: 'Over more than 30 years of sustained growth, TLBISBIG expands well beyond the United States — achieving global reach across customers, projects, programs, and services. The company diversifies into engineering, agriculture, and strategic advisory, building a multi-division enterprise portfolio.',
    gold: false,
  },
  {
    delay: 'delay-2',
    dot: 'timeline-dot',
    year: 'Digital Era — Innovation',
    heading: 'Technology & Digital Transformation',
    text: 'TLBISBIG embraces the digital economy with the launch of its E-Commerce platform and strategic partnerships in AI-powered procurement (GoFundItNow) and drone workforce development (MyDroneForce) — extending the group\'s reach into emerging technology verticals.',
    gold: false,
  },
  {
    delay: 'delay-3',
    dot: 'timeline-dot tl-dot-gold',
    year: 'Today — Global Conglomerate',
    heading: 'A Diversified Global Enterprise',
    text: 'TLBISBIG stands today as a diversified global enterprise holding group with four active strategic divisions, a curated portfolio of international partnerships, and an unwavering commitment to building legacies that endure across generations.',
    gold: true,
  },
];

export default function Heritage() {
  return (
    <section id="heritage" className="heritage section">
      <div className="container">
        <div className="section-header">
          <div className="section-label reveal-up">Our Story</div>
          <h2 className="section-title text-center reveal-up delay-1">A Legacy Built Over Decades</h2>
          <p className="section-subtitle reveal-up delay-2">
            From a bold vision in 1987 to a global enterprise conglomerate —
            the TLB story is one of relentless ambition and strategic execution.
          </p>
        </div>
        <div className="timeline">
          {milestones.map((m) => (
            <div key={m.year} className={`timeline-item reveal-left ${m.delay}`}>
              <div className={m.dot}></div>
              <div className="timeline-year">{m.year}</div>
              <div className={`timeline-content${m.gold ? ' timeline-content-gold' : ''}`}>
                <h3>{m.heading}</h3>
                <p>{m.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
