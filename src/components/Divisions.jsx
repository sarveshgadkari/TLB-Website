const divisions = [
  {
    delay: 'delay-1',
    image: 'https://img1.wsimg.com/isteam/ip/adc6a11b-2ba2-4e2a-b8d3-0e4e50140ce1/Screen%20Shot%202025-08-19%20at%205.00.15%20PM.png/:/cr=t:8.43%25,l:0%25,w:100%25,h:83.15%25/rs=w:600,h:300,cg:true',
    imageAlt: 'Engineering Division',
    link: null,
    linkLabel: null,
    icon: 'fas fa-drafting-compass',
    tag: 'Division I',
    title: 'Engineering & Architecture',
    text: 'Integrated engineering consulting and architectural services delivering sustainable infrastructure, community development, and clean energy solutions with full-spectrum project management and QA/QC excellence.',
    services: ['Consulting & Advisory Services', 'Engineering & Architectural Design', 'Project Management & Delivery', 'QA/QC & Quality Assurance', 'Clean Energy & Sustainability'],
  },
  {
    delay: 'delay-2',
    image: 'https://img1.wsimg.com/isteam/ip/adc6a11b-2ba2-4e2a-b8d3-0e4e50140ce1/blob-e472455.png/:/cr=t:25%25,l:0%25,w:100%25,h:50%25/rs=w:600,h:300,cg:true',
    imageAlt: 'TLB Enterprises Agriculture',
    link: 'https://tlbenterprise.com/',
    linkLabel: 'Visit Site',
    icon: 'fas fa-seedling',
    tag: 'Division II',
    title: 'TLB Enterprises Agriculture',
    text: 'Driving sustainable, ethical, and accessible agricultural solutions that protect environmental resources, improve global food security, and deliver measurable community impact at institutional scale.',
    services: ['Sustainable Agriculture Systems', 'Global Food Security Solutions', 'Environmental Resource Management', 'AgriTech Integration', 'Community Development Programs'],
  },
  {
    delay: 'delay-3',
    image: 'https://img1.wsimg.com/isteam/ip/adc6a11b-2ba2-4e2a-b8d3-0e4e50140ce1/Screen%20Shot%202025-08-19%20at%201.15.23%20PM.png/:/cr=t:0.82%25,l:0%25,w:100%25,h:98.36%25/rs=w:600,h:300,cg:true',
    imageAlt: 'TLB E-Commerce Store',
    link: 'https://tlbisbigworld.espwebsites.com',
    linkLabel: 'Visit Store',
    icon: 'fas fa-store',
    tag: 'Division III',
    title: 'TLB E-Commerce Platform',
    text: 'A secure, high-performance digital commerce infrastructure designed for enterprise-grade convenience, product variety, and seamless global transactions — built with institutional security and operational efficiency.',
    services: ['Digital Commerce Infrastructure', 'Secure Payment Systems', 'Global Product Distribution', 'Enterprise-Grade Logistics', 'Customer Experience Architecture'],
  },
  {
    delay: 'delay-4',
    image: 'https://img1.wsimg.com/isteam/ip/adc6a11b-2ba2-4e2a-b8d3-0e4e50140ce1/Screen%20Shot%202025-08-19%20at%207.28.44%20PM.png/:/cr=t:0%25,l:7.15%25,w:85.69%25,h:100%25/rs=w:600,h:300,cg:true',
    imageAlt: 'TLB Enterprise USA',
    link: 'https://tlbenterprisesusa.com/',
    linkLabel: 'Visit Site',
    icon: 'fas fa-chess-king',
    tag: 'Division IV',
    title: 'TLB Enterprise USA',
    text: 'C-suite advisory and enterprise transformation services combining 37 years of market expertise with institutional-grade strategic frameworks. From market entry to capital strategy — we architect enterprise success.',
    services: ['C-Suite Advisory & Consulting', 'Business Transformation Strategy', 'Investment Strategy & Planning', 'Market Entry & Expansion', 'Enterprise Architecture Design'],
  },
];

export default function Divisions() {
  return (
    <section id="divisions" className="divisions section section-dark">
      <div className="container">
        <div className="section-header">
          <div className="section-label reveal-up">Business Architecture</div>
          <h2 className="section-title text-center reveal-up delay-1">Our Strategic Divisions</h2>
          <p className="section-subtitle reveal-up delay-2">
            A diversified portfolio of enterprise business units, each operating at the intersection
            of innovation, sustainability, and strategic value creation.
          </p>
        </div>
        <div className="divisions-grid">
          {divisions.map((d) => (
            <div key={d.tag} className={`division-card reveal-up ${d.delay}`}>
              <div className="card-preview">
                {d.link ? (
                  <a href={d.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${d.title}`}>
                    <img src={d.image} alt={d.imageAlt} loading="lazy" />
                    <div className="card-preview-overlay">
                      <span className="card-preview-cta">{d.linkLabel} <i className="fas fa-external-link-alt"></i></span>
                    </div>
                  </a>
                ) : (
                  <>
                    <img src={d.image} alt={d.imageAlt} loading="lazy" />
                    <div className="card-preview-overlay"></div>
                  </>
                )}
              </div>
              <div className="card-body">
                <div className="card-icon-wrap"><i className={d.icon}></i></div>
                <div className="card-tag">{d.tag}</div>
                <h3 className="card-title">{d.title}</h3>
                <p className="card-text">{d.text}</p>
                <ul className="card-services">
                  {d.services.map(s => <li key={s}>{s}</li>)}
                </ul>
                <div className="card-footer">
                  <span className="card-status active">Active Division</span>
                  {d.link && (
                    <a href={d.link} target="_blank" rel="noopener noreferrer" className="card-visit-link">
                      {d.linkLabel} <i className="fas fa-arrow-right"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
