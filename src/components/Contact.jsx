import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', company: '', inquiryType: '', message: '',
  });

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ firstName: '', lastName: '', email: '', company: '', inquiryType: '', message: '' });
    }, 3500);
  };

  return (
    <section id="contact" className="contact section section-dark">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="section-label reveal-left">Get in Touch</div>
            <h2 className="section-title reveal-left delay-1">
              Strategic Inquiry &amp;<br /><em>Partnership</em>
            </h2>
            <div className="gold-line reveal-left delay-1"></div>
            <p className="contact-desc reveal-left delay-2">
              TLBISBIG welcomes discussions with potential partners, investors,
              and enterprise clients. Our team is prepared to explore how our diversified capabilities
              can align with your strategic objectives.
            </p>
            <div className="contact-details reveal-left delay-3">
              <div className="contact-item">
                <div className="contact-icon"><i className="fas fa-globe"></i></div>
                <div>
                  <strong>Global Headquarters</strong>
                  <span>United States of America</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                <div>
                  <strong>Strategic Inquiries</strong>
                  <span>Submit via inquiry form</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i className="fas fa-clock"></i></div>
                <div>
                  <strong>Response Time</strong>
                  <span>Within 24–48 business hours</span>
                </div>
              </div>
            </div>
            <div className="social-links reveal-left delay-4">
                <a href="https://www.linkedin.com/company/tlb-enterprises-group-holdings/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
                <a href="https://www.facebook.com/TLBPromoProducts" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
                <a href="https://www.youtube.com/@TLBISBIGConsultingGroup" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="contact-form-wrap reveal-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input type="text" id="firstName" name="firstName" placeholder="John" required value={form.firstName} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input type="text" id="lastName" name="lastName" placeholder="Smith" required value={form.lastName} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Business Email *</label>
                <input type="email" id="email" name="email" placeholder="john@company.com" required value={form.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company / Organization</label>
                <input type="text" id="company" name="company" placeholder="Your Company Name" value={form.company} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="inquiryType">Inquiry Type</label>
                <select id="inquiryType" name="inquiryType" value={form.inquiryType} onChange={handleChange}>
                  <option value="">Select inquiry type</option>
                  <option value="partnership">Strategic Partnership</option>
                  <option value="investment">Investment Discussion</option>
                  <option value="advisory">Advisory Services</option>
                  <option value="engineering">Engineering Division</option>
                  <option value="agriculture">Agriculture Division</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows="5" placeholder="Describe your strategic objectives and how TLBISBIG can add value..." required value={form.message} onChange={handleChange}></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-gold btn-full"
                disabled={submitted}
                style={submitted ? { background: '#4ade80', color: '#030712', cursor: 'default' } : {}}
              >
                {submitted
                  ? <><i className="fas fa-check-circle"></i> Inquiry Submitted</>
                  : <>Submit Strategic Inquiry <i className="fas fa-paper-plane"></i></>
                }
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
