const divisions = [
  {
    delay: 'delay-1',
    image: 'https://img1.wsimg.com/isteam/ip/adc6a11b-2ba2-4e2a-b8d3-0e4e50140ce1/Screen%20Shot%202025-08-19%20at%205.00.15%20PM.png/:/cr=t:8.43%25,l:0%25,w:100%25,h:83.15%25/rs=w:600,h:300,cg:true',
    imageAlt: 'TLB Engineering Division logo',
    link: null,
    linkLabel: null,
    tag: 'Division I',
    title: 'Engineering & Architecture',
    text: 'Engineering consulting, architecture, and project delivery for infrastructure and clean energy.',
    services: ['Consulting & Design', 'Project Delivery', 'QA/QC'],
  },
  {
    delay: 'delay-2',
    image: 'https://img1.wsimg.com/isteam/ip/adc6a11b-2ba2-4e2a-b8d3-0e4e50140ce1/blob-e472455.png/:/cr=t:14%25,l:14%25,w:72%25,h:72%25/rs=w:800,h:800,cg:true',
    imageAlt: 'TLBISBIG Enterprises Agriculture logo',
    imageFit: 'zoom',
    link: 'https://tlbenterprise.com/',
    linkLabel: 'Visit Site',
    tag: 'Division II',
    title: 'TLBISBIG Enterprises Agriculture',
    text: 'Sustainable agriculture and food-security programs at institutional scale.',
    services: ['AgriTech', 'Food Security', 'Community Programs'],
  },
  {
    delay: 'delay-3',
    image: 'https://img1.wsimg.com/isteam/ip/adc6a11b-2ba2-4e2a-b8d3-0e4e50140ce1/Screen%20Shot%202025-08-19%20at%201.15.23%20PM.png/:/cr=t:0.82%25,l:0%25,w:100%25,h:98.36%25/rs=w:600,h:300,cg:true',
    imageAlt: 'TLBISBIG E-Commerce Platform',
    link: 'https://tlbisbigworld.espwebsites.com',
    linkLabel: 'Visit Store',
    tag: 'Division III',
    title: 'TLBISBIG E-Commerce Platform',
    text: 'Enterprise commerce infrastructure for global product sales and secure checkout.',
    services: ['Digital Storefront', 'Payments', 'Logistics'],
  },
  {
    delay: 'delay-4',
    image: 'https://img1.wsimg.com/isteam/ip/adc6a11b-2ba2-4e2a-b8d3-0e4e50140ce1/Screen%20Shot%202025-08-19%20at%207.28.44%20PM.png/:/cr=t:0%25,l:7.15%25,w:85.69%25,h:100%25/rs=w:600,h:300,cg:true',
    imageAlt: 'TLBISBIG Enterprise USA',
    link: 'https://tlbenterprisesusa.com/',
    linkLabel: 'Visit Site',
    tag: 'Division IV',
    title: 'TLBISBIG Enterprise USA',
    text: 'C-suite advisory, market entry, and capital strategy for enterprise growth.',
    services: ['C-Suite Advisory', 'Transformation', 'Market Entry'],
  },
  {
    delay: 'delay-5',
    image: '/wsso-logo.webp',
    imageAlt: 'WSSO Work Management System logo',
    link: 'https://wsso.tlbisbig.world/',
    linkLabel: 'Visit Platform',
    tag: 'Division V',
    title: 'SME Digital Business Solutions',
    text: 'WSSO and digital systems that help SMEs run operations, people, and performance.',
    services: ['WSSO Platform', 'HR Solutions', 'Funding Support'],
  },
  {
    delay: 'delay-1',
    image: '/workforce-2-logo.png',
    imageAlt: 'Workforce 2.0 logo',
    imageFit: 'dark',
    link: 'https://workforce.trackmystartup.com/',
    linkLabel: 'Visit Site',
    tag: 'Division VI',
    title: 'Workforce 2.0',
    text: 'An AI workforce that finishes the job — you talk or type, it assigns AI workers, and it asks before anything leaves your machine.',
    services: ['Sales & Outreach', 'Local Files Stay Private', 'Fixed Per-Job Pricing'],
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
            <article key={d.tag} className={`division-card reveal-up ${d.delay}`}>
              <div className={`card-preview${d.imageFit === 'dark' ? ' is-dark' : ''}${d.imageFit === 'zoom' ? ' is-zoom' : ''}`}>
                {d.link ? (
                  <a href={d.link} target="_blank" rel="noopener noreferrer" aria-label={`${d.linkLabel}: ${d.title}`}>
                    <img src={d.image} alt={d.imageAlt} loading="lazy" />
                  </a>
                ) : (
                  <img src={d.image} alt={d.imageAlt} loading="lazy" />
                )}
              </div>
              <div className="card-body">
                <div className="card-tag">{d.tag}</div>
                <h3 className="card-title">{d.title}</h3>
                <p className="card-text">{d.text}</p>
                <ul className="card-services">
                  {d.services.map((s) => <li key={s}>{s}</li>)}
                </ul>
                <div className="card-footer">
                  <span className="card-status active">Active Division</span>
                  {d.link ? (
                    <a href={d.link} target="_blank" rel="noopener noreferrer" className="card-visit-link">
                      {d.linkLabel} <i className="fas fa-arrow-right"></i>
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
