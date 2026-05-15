const partners = [
  {
    delay: 'delay-1',
    logo: 'https://img1.wsimg.com/isteam/ip/adc6a11b-2ba2-4e2a-b8d3-0e4e50140ce1/mydroneforce.com.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25',
    logoAlt: 'MyDroneForce logo',
    num: '01',
    icon: 'fas fa-helicopter',
    title: 'MyDroneForce',
    tag: 'Drone Workforce Development',
    text: 'Strategic partner for FAA Part 107 certification, drone industry training, and workforce development — positioning TLB at the forefront of the rapidly expanding unmanned aerial systems industry.',
    services: ['FAA Part 107 Certification', 'Drone Training Programs', 'Workforce Development', 'UAS Industry'],
    link: 'https://www.mydroneforce.com',
  },
  {
    delay: 'delay-2',
    logo: 'https://img1.wsimg.com/isteam/ip/adc6a11b-2ba2-4e2a-b8d3-0e4e50140ce1/Screen%20Shot%202025-08-19%20at%204.57.44%20AM.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25',
    logoAlt: 'STUDPAC MUSA Global logo',
    num: '02',
    icon: 'fas fa-industry',
    title: 'STUDPAC MUSA Global',
    tag: 'AgriTech & Manufacturing',
    text: 'A global leader in agricultural technology and precision manufacturing solutions. This partnership amplifies TLB\'s agricultural division with cutting-edge technology and international manufacturing capability.',
    services: ['Agricultural Technology', 'Precision Manufacturing', 'Global Operations', 'Technology Integration'],
    link: 'https://tlbenterprise.com/',
  },
  {
    delay: 'delay-3',
    logo: 'https://img1.wsimg.com/isteam/ip/adc6a11b-2ba2-4e2a-b8d3-0e4e50140ce1/WhatsApp%20Image%202025-08-21%20at%209.25.52%20AM.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25',
    logoAlt: 'GoFundItNow logo',
    num: '03',
    icon: 'fas fa-robot',
    title: 'GoFundItNow',
    tag: 'AI-Powered Procurement',
    text: 'An AI-powered RFP automation platform revolutionizing government and enterprise procurement. Partnering with TLB to deliver next-generation funding intelligence and procurement automation solutions.',
    services: ['AI Automation', 'RFP Intelligence', 'Government Procurement', 'Enterprise Solutions'],
    link: 'https://gofunditnow.com',
  },
  {
    delay: 'delay-4',
    logo: 'https://img1.wsimg.com/isteam/ip/adc6a11b-2ba2-4e2a-b8d3-0e4e50140ce1/Screen%20Shot%202025-08-19%20at%205.05.53%20AM.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25',
    logoAlt: 'MTA Engineers logo',
    num: '04',
    icon: 'fas fa-hard-hat',
    title: 'MTA Engineers',
    tag: 'Geotechnical Engineering',
    text: 'Multi-state geotechnical engineering services providing foundational infrastructure intelligence. MTA Engineers delivers the technical depth that underpins TLB\'s complex infrastructure and development projects.',
    services: ['Geotechnical Services', 'Infrastructure Analysis', 'Multi-State Operations', 'Engineering Intelligence'],
    link: 'https://www.mtaengineers.com',
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
        <div className="ecosystem-grid">
          {partners.map((p) => (
            <div key={p.num} className={`eco-card reveal-up ${p.delay}`}>
              <div className="eco-logo-banner">
                <img src={p.logo} alt={p.logoAlt} loading="lazy" />
              </div>
              <div className="eco-card-body">
                <div className="eco-card-header">
                  <div className="eco-num">{p.num}</div>
                  <div className="eco-icon"><i className={p.icon}></i></div>
                </div>
                <h3 className="eco-title">{p.title}</h3>
                <div className="eco-tag">{p.tag}</div>
                <p className="eco-text">{p.text}</p>
                <div className="eco-services">
                  {p.services.map(s => <span key={s}>{s}</span>)}
                </div>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="eco-link">
                  Visit Partner <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
