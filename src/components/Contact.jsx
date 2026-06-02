import React from 'react';
import './Contact.css';

const contacts = [
  { icon: '✉️', label: 'jujjurialekhya123@gmail.com', href: 'mailto:jujjurialekhya123@gmail.com' },
  { icon: '📱', label: '+91 70756 85295', href: 'tel:+917075685295' },
  { icon: '💼', label: 'linkedin.com/in/alekhya-jujjuri', href: 'https://linkedin.com/in/alekhya-jujjuri-4298ba235', target: '_blank' },
  { icon: '🐙', label: 'github.com/ALEKHYAJUJJURI', href: 'https://github.com/ALEKHYAJUJJURI', target: '_blank' },
];

export default function Contact() {
  return (
    <div id="contact" className="contact-section">
      <div className="contact-wrapper">
        <div className="section-label" style={{ justifyContent: 'center' }}>Let's Connect</div>
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-sub">I'm open to new opportunities, freelance projects, or just a good conversation about tech.</p>
        <div className="contact-links">
          {contacts.map(c => (
            <a key={c.href} className="contact-item" href={c.href} target={c.target} rel={c.target ? 'noreferrer' : undefined}>
              <div className="contact-icon">{c.icon}</div>
              <span>{c.label}</span>
            </a>
          ))}
          <a
            className="contact-item contact-download"
           href="alekhya_jujjuri_updated.pdf"
            download="Alekhya_Jujjuri_Resume.pdf"
          >
            <div className="contact-icon">📄</div>
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
}
