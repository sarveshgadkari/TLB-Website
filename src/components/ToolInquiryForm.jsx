'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

const INQUIRY_OPTIONS = [
  { value: 'demo', label: 'Request a demo' },
  { value: 'pricing', label: 'Pricing & licensing' },
  { value: 'implementation', label: 'Implementation & onboarding' },
  { value: 'partnership', label: 'Partnership / reseller' },
  { value: 'general', label: 'General enquiry' },
];

export default function ToolInquiryForm({ tool, formId }) {
  const pathname = usePathname();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    inquiryType: '',
    message: '',
  });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          toolId: tool.id,
          toolName: tool.name,
          source: 'research_allocation_hub',
          pagePath: `${pathname}#${tool.id}`,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to submit the inquiry right now.');
      }

      setStatus({
        type: 'success',
        message: `Thank you. Your ${tool.name} enquiry is in our CRM — we will follow up within 24–48 hours.`,
      });
      setForm({ firstName: '', lastName: '', email: '', company: '', inquiryType: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const prefix = formId || tool.id;

  return (
    <form className="contact-form hub-form" onSubmit={handleSubmit}>
      <div className="hub-form-header">
        <span className="hub-form-kicker">Enquire about {tool.name}</span>
        <p>This request is stored as a CRM lead tagged to {tool.name} only.</p>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor={`${prefix}-firstName`}>First Name *</label>
          <input
            type="text"
            id={`${prefix}-firstName`}
            name="firstName"
            placeholder="John"
            required
            value={form.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor={`${prefix}-lastName`}>Last Name *</label>
          <input
            type="text"
            id={`${prefix}-lastName`}
            name="lastName"
            placeholder="Smith"
            required
            value={form.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor={`${prefix}-email`}>Business Email *</label>
        <input
          type="email"
          id={`${prefix}-email`}
          name="email"
          placeholder="john@company.com"
          required
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor={`${prefix}-company`}>Company / Organization</label>
        <input
          type="text"
          id={`${prefix}-company`}
          name="company"
          placeholder="Your Company Name"
          value={form.company}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor={`${prefix}-inquiryType`}>Enquiry Type</label>
        <select
          id={`${prefix}-inquiryType`}
          name="inquiryType"
          value={form.inquiryType}
          onChange={handleChange}
        >
          <option value="">Select enquiry type</option>
          {INQUIRY_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor={`${prefix}-message`}>Message *</label>
        <textarea
          id={`${prefix}-message`}
          name="message"
          rows="4"
          placeholder={`What do you need from ${tool.name}? Timeline, team size, or current stack helps us allocate the right path.`}
          required
          value={form.message}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-gold btn-full" disabled={isSubmitting}>
        {isSubmitting
          ? <><i className="fas fa-spinner fa-spin"></i> Sending...</>
          : <>Submit {tool.name} Enquiry <i className="fas fa-paper-plane"></i></>}
      </button>
      {status.message ? (
        <p className={`form-status ${status.type}`} role="status">{status.message}</p>
      ) : null}
    </form>
  );
}
