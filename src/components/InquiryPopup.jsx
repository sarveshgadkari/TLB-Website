'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const SEEN_KEY = 'tlbisbig_lead_popup_seen';
const SUBMITTED_KEY = 'tlbisbig_lead_submitted';
const ENTRY_DELAY_MS = 6000;

export default function InquiryPopup() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState('entry');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', company: '', inquiryType: '', message: '',
  });
  const openedRef = useRef(false);

  const markSeenAndOpen = (trigger) => {
    if (openedRef.current) return;
    if (sessionStorage.getItem(SEEN_KEY) || sessionStorage.getItem(SUBMITTED_KEY)) return;
    openedRef.current = true;
    sessionStorage.setItem(SEEN_KEY, '1');
    setSource(trigger);
    setIsOpen(true);
  };

  useEffect(() => {
    if (sessionStorage.getItem(SUBMITTED_KEY)) return;

    const timer = setTimeout(() => markSeenAndOpen('entry_delay'), ENTRY_DELAY_MS);

    const footerEl = document.getElementById('site-footer');
    let observer;
    if (footerEl && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) markSeenAndOpen('footer_scroll');
          });
        },
        { threshold: 0.15 },
      );
      observer.observe(footerEl);
    }

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, []);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleClose = () => setIsOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source, pagePath: pathname }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to submit the inquiry right now.');
      }

      sessionStorage.setItem(SUBMITTED_KEY, '1');
      setStatus({ type: 'success', message: 'Thank you! Our team will reach out within 24–48 hours.' });
      setForm({ firstName: '', lastName: '', email: '', company: '', inquiryType: '', message: '' });
      setTimeout(() => setIsOpen(false), 1800);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" role="dialog" aria-modal="true" aria-label="Strategic inquiry form" onClick={handleClose}>
      <div className="popup-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="popup-close" aria-label="Close" onClick={handleClose}>
          <i className="fas fa-times"></i>
        </button>

        <div className="section-label">Get in Touch</div>
        <h3 className="popup-title">
          Let&apos;s Explore a <em>Strategic Partnership</em>
        </h3>
        <p className="popup-desc">
          Share a few details and our team will follow up within 24–48 business hours.
        </p>

        <form className="contact-form popup-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="popup-firstName">First Name *</label>
              <input type="text" id="popup-firstName" name="firstName" placeholder="John" required value={form.firstName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="popup-lastName">Last Name *</label>
              <input type="text" id="popup-lastName" name="lastName" placeholder="Smith" required value={form.lastName} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="popup-email">Business Email *</label>
            <input type="email" id="popup-email" name="email" placeholder="john@company.com" required value={form.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="popup-company">Company / Organization</label>
            <input type="text" id="popup-company" name="company" placeholder="Your Company Name" value={form.company} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="popup-inquiryType">Inquiry Type</label>
            <select id="popup-inquiryType" name="inquiryType" value={form.inquiryType} onChange={handleChange}>
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
            <label htmlFor="popup-message">Message *</label>
            <textarea id="popup-message" name="message" rows="3" placeholder="Tell us briefly what you're looking for..." required value={form.message} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="btn btn-gold btn-full" disabled={isSubmitting}>
            {isSubmitting
              ? <><i className="fas fa-spinner fa-spin"></i> Sending...</>
              : <>Submit Inquiry <i className="fas fa-paper-plane"></i></>}
          </button>
          {status.message ? (
            <p className={`form-status ${status.type}`} role="status">{status.message}</p>
          ) : null}
        </form>
      </div>
    </div>
  );
}
