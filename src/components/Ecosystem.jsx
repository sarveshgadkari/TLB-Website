const partners = [
  {
    delay: 'delay-1',
    image: 'https://img1.wsimg.com/isteam/ip/adc6a11b-2ba2-4e2a-b8d3-0e4e50140ce1/mydroneforce.com.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25',
    imageAlt: 'MyDroneForce logo',
    tag: 'Partner I',
    title: 'MyDroneForce',
    text: 'FAA Part 107 certification and drone workforce training for the expanding UAS industry.',
    services: ['Part 107 Certification', 'Drone Training', 'Workforce Development'],
    link: 'https://www.mydroneforce.com',
    linkLabel: 'Visit Partner',
  },
  {
    delay: 'delay-2',
    image: 'https://img1.wsimg.com/isteam/ip/adc6a11b-2ba2-4e2a-b8d3-0e4e50140ce1/Screen%20Shot%202025-08-19%20at%204.57.44%20AM.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25',
    imageAlt: 'STUDPAC MUSA Global logo',
    tag: 'Partner II',
    title: 'STUDPAC MUSA Global',
    text: 'AgriTech and precision manufacturing that extend TLB’s agricultural division globally.',
    services: ['Agricultural Technology', 'Manufacturing', 'Global Operations'],
    link: 'https://tlbenterprise.com/',
    linkLabel: 'Visit Partner',
  },
  {
    delay: 'delay-3',
    image: 'https://img1.wsimg.com/isteam/ip/adc6a11b-2ba2-4e2a-b8d3-0e4e50140ce1/WhatsApp%20Image%202025-08-21%20at%209.25.52%20AM.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25',
    imageAlt: 'GoFundItNow logo',
    tag: 'Partner III',
    title: 'GoFundItNow',
    text: 'AI-powered RFP automation for government and enterprise procurement.',
    services: ['AI Automation', 'RFP Intelligence', 'Procurement'],
    link: 'https://gofunditnow.com',
    linkLabel: 'Visit Partner',
  },
  {
    delay: 'delay-4',
    image: 'https://img1.wsimg.com/isteam/ip/adc6a11b-2ba2-4e2a-b8d3-0e4e50140ce1/Screen%20Shot%202025-08-19%20at%205.05.53%20AM.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25',
    imageAlt: 'MTA Engineers logo',
    tag: 'Partner IV',
    title: 'MTA Engineers',
    text: 'Multi-state geotechnical engineering for infrastructure and development projects.',
    services: ['Geotechnical', 'Infrastructure', 'Multi-State Ops'],
    link: 'https://www.mtaengineers.com',
    linkLabel: 'Visit Partner',
  },
  {
    delay: 'delay-5',
    image: '/sfg-logo-cropped.png',
    imageAlt: 'Sims Financial Services Group logo',
    tag: 'Partner V',
    title: 'Sims Financial Services Group',
    text: 'Financial advisory partner expanding client-focused solutions across the TLB ecosystem.',
    services: ['Financial Advisory', 'Client Solutions', 'Consulting'],
    link: 'https://www.simsfinancialgroup.com/',
    linkLabel: 'Visit Partner',
  },
  {
    delay: 'delay-1',
    image: '/partners/wsgci-logo.png',
    imageAlt: 'Wall Street Green Cap Intro logo',
    imageFit: 'dark',
    tag: 'Partner VI',
    title: 'Wall Street Green Cap Intro',
    text: 'Connects investor-ready companies with institutional capital through introductions, coaching, and close.',
    services: ['Investor Matching', 'Green Finance', 'Pitch Coaching'],
    link: 'https://investor-tlb.vercel.app/',
    linkLabel: 'Visit Partner',
  },
  {
    delay: 'delay-2',
    image: '/partners/tlbps-logo.png',
    imageAlt: 'TLBPS Infratech Developers logo',
    imageFit: 'dark',
    tag: 'Partner VII',
    title: 'TLBPS Infratech Developers',
    text: 'Sustainable infrastructure and eco-luxury hospitality across Central and South India.',
    services: ['Hospitality', 'Urban Development', 'Sustainability'],
    link: 'https://www.tlbps.com/',
    linkLabel: 'Visit Partner',
  },
  {
    delay: 'delay-3',
    image: '/partners/aviation-logo.jpeg',
    imageAlt: 'Mid-South Youth Aviation Initiative logo',
    tag: 'Partner VIII',
    title: 'Mid-South Youth Aviation Initiative',
    text: 'Free STEM and flight programs for grades 6–12 in Arkansas, Tennessee, and Mississippi.',
    services: ['STEM + Flight', 'Grades 6–12', 'AR · TN · MS'],
    link: 'https://aviation-blond.vercel.app/',
    linkLabel: 'Visit Partner',
  },
  {
    delay: 'delay-4',
    image: '/partners/dfi-logo.png',
    imageAlt: 'Dream Flights International logo',
    imageFit: 'dark',
    tag: 'Partner IX',
    title: 'Dream Flights International',
    text: 'Private mobility access across air, ground, sea, and stay for principals who cannot pause.',
    services: ['Air', 'Ground', 'Sea & Stay'],
    link: 'https://www.dreamflightsintl.com/',
    linkLabel: 'Visit Partner',
  },
  {
    delay: 'delay-5',
    image: '/partners/tlb-enterprises-logo.jpg',
    imageAlt: 'TLB Enterprises, Inc. logo',
    imageFit: 'zoom',
    tag: 'Partner X',
    title: 'TLB Enterprises, Inc.',
    text: 'Sustainable agriculture, container farms, and clean-food programs from Little Rock, Arkansas.',
    services: ['Container Farms', 'AgriTech', 'Food Security'],
    link: 'https://tlbenterprise.com/',
    linkLabel: 'Visit Partner',
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="ecosystem section section-dark">
      <div className="container">
        <div className="section-header">
          <div className="section-label reveal-up">Strategic Network</div>
          <h2 className="section-title text-center reveal-up delay-1">Our Ecosystem of Partners</h2>
          <p className="section-subtitle reveal-up delay-2">
            TLB operates at the center of a curated network of high-value strategic partnerships,
            each extending our capability and global reach across critical industry verticals.
          </p>
        </div>
        <div className="divisions-grid">
          {partners.map((p) => (
            <article key={p.tag} className={`division-card reveal-up ${p.delay}`}>
              <div className={`card-preview${p.imageFit === 'dark' ? ' is-dark' : ''}${p.imageFit === 'zoom' ? ' is-zoom' : ''}`}>
                <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`${p.linkLabel}: ${p.title}`}>
                  <img src={p.image} alt={p.imageAlt} loading="lazy" />
                </a>
              </div>
              <div className="card-body">
                <div className="card-tag">{p.tag}</div>
                <h3 className="card-title">{p.title}</h3>
                <p className="card-text">{p.text}</p>
                <ul className="card-services">
                  {p.services.map((s) => <li key={s}>{s}</li>)}
                </ul>
                <div className="card-footer">
                  <span className="card-status active">Active Partner</span>
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="card-visit-link">
                    {p.linkLabel} <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
