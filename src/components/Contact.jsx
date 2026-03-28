import { useState } from 'react';
import { FadeIn, SlideIn, ScaleIn } from './MotionPrimitives';
import { supabase } from '../lib/supabase';

const channels = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'elevatex.agency@gmail.com',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+91 9515320303, +91 8500854229',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location',
    value: 'Hyderbad, India',
  },
];

const websiteTypes = [
  'Business Website',
  'E-Commerce Store',
  'Portfolio / Personal',
  'Landing Page',
  'Blog / Content Site',
  'Web Application',
  'Others',
];

const countryCodes = [
  { code: '+91', country: 'IN', label: '🇮🇳 +91' },
  { code: '+1', country: 'US', label: '🇺🇸 +1' },
  { code: '+44', country: 'GB', label: '🇬🇧 +44' },
  { code: '+971', country: 'AE', label: '🇦🇪 +971' },
  { code: '+966', country: 'SA', label: '🇸🇦 +966' },
  { code: '+61', country: 'AU', label: '🇦🇺 +61' },
  { code: '+49', country: 'DE', label: '🇩🇪 +49' },
  { code: '+33', country: 'FR', label: '🇫🇷 +33' },
  { code: '+81', country: 'JP', label: '🇯🇵 +81' },
  { code: '+86', country: 'CN', label: '🇨🇳 +86' },
  { code: '+65', country: 'SG', label: '🇸🇬 +65' },
  { code: '+60', country: 'MY', label: '🇲🇾 +60' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', countryCode: '+91', phone: '', websiteType: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: form.name,
            email: form.email,
            phone: `${form.countryCode} ${form.phone}`,
            website_type: form.websiteType,
            message: form.message,
          }
        ]);

      if (error) throw error;
      
      alert('Thanks! We\'ll be in touch within 24 hours.');
      setForm({ name: '', email: '', countryCode: '+91', phone: '', websiteType: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="section-bg">
        <div className="sbg-orb sbg-orb-1" />
        <div className="sbg-orb sbg-orb-2" />
      </div>
      <div className="container">
        <div className="contact-layout">
          {/* Left Info */}
          <SlideIn from="left" className="contact-left">
            <div className="section-eyebrow" style={{ justifyContent: 'flex-start' }}>
              <span className="eyebrow-line" />
              <span>Get in Touch</span>
            </div>
            <h2 className="section-title tl">Let&apos;s Build Something<br />Extraordinary</h2>
            <p className="section-desc tl">
              Ready to take the leap? Drop us a line and we&apos;ll get back to you within 12 hours
              with a free strategy overview.
            </p>

            <div className="contact-channels">
              {channels.map((ch) => (
                <div key={ch.label} className="glass-card ch-item">
                  <div className="ch-icon">{ch.icon}</div>
                  <div>
                    <span className="ch-label">{ch.label}</span>
                    <span className="ch-val">{ch.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="wa-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </SlideIn>

          {/* Right Form */}
          <ScaleIn delay={0.2}>
            <div className="glass-card form-card">
              <form onSubmit={handleSubmit}>
                <div className="fg">
                  <label htmlFor="name">Your Name</label>
                  <input id="name" name="name" type="text" placeholder="" required value={form.name} onChange={handleChange} />
                </div>
                <div className="fg">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" placeholder="" required value={form.email} onChange={handleChange} />
                </div>
                <div className="fg">
                  <label htmlFor="phone">Contact Number</label>
                  <div className="phone-input-row">
                    <select 
                      name="countryCode" 
                      value={form.countryCode} 
                      onChange={handleChange}
                      className="country-code-select"
                    >
                      {countryCodes.map((c) => (
                        <option key={c.code} value={c.code}>{c.label}</option>
                      ))}
                    </select>
                    <input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      placeholder="" 
                      required 
                      value={form.phone} 
                      onChange={handleChange} 
                    />
                  </div>
                </div>
                <div className="fg">
                  <label htmlFor="websiteType">Type of Website</label>
                  <select id="websiteType" name="websiteType" value={form.websiteType} onChange={handleChange} required>
                    <option value="" disabled>Select website type</option>
                    {websiteTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="fg">
                  <label htmlFor="message">Tell Us About Your Project</label>
                  <textarea id="message" name="message" rows="4" placeholder="I need a..." value={form.message} onChange={handleChange} />
                </div>
                <button type="submit" className="btn-primary btn-full" disabled={submitting}>
                  <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                  <span className="btn-icon">→</span>
                  <div className="btn-shine" />
                </button>
              </form>
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
}
