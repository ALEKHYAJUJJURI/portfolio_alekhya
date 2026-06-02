import React from 'react';
import './Experience.css';

const webBullets = [
  'Developed responsive web applications using React.js, Tailwind CSS, and Ant Design.',
  'Built telehealth platform features including appointment scheduling and consultation workflows.',
  'Integrated third-party services like Google Maps, Video SDK, Stripe, and PayPal.',
  'Improved maintainability using modular architecture and reusable UI components.',
  'Mentored and guided frontend interns on React.js development and UI best practices.',
];

const mobileBullets = [
  'Independently developed production-grade cross-platform mobile applications for Android and iOS using React Native.',
  'Integrated REST APIs, Firebase services, authentication systems, and push notifications into mobile workflows.',
  'Generated and deployed Android (APK/AAB) and iOS builds, managing Play Store releases, TestFlight distribution, and App Store submission workflows.',
  'Implemented native device integrations such as biometric authentication, camera, microphone, and permission handling.',
  'Developed responsive, user-centric mobile UI/UX across devices with scalable state management using Context API.',
  'Optimized application performance using lazy loading, efficient rendering, and reusable components, reducing load time by 25%.',
];

export default function Experience() {
  return (
    <section id="experience" className="exp-section">
      <div className="section-label reveal">Work History</div>
      <h2 className="section-title reveal delay-1">Experience</h2>

      <div className="exp-card reveal delay-2">
        <div className="exp-header">
          <div>
            <div className="exp-role">Frontend &amp; React Native Developer</div>
            <div className="exp-company">Galactix Solutions Pvt. Ltd.</div>
          </div>
          <div className="exp-period">Nov 2024 – April 2026</div>
        </div>

        <div className="exp-sub-label">Web (React.js)</div>
        <ul className="exp-bullets">
          {webBullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>

        <div className="exp-sub-label" style={{ marginTop: '1.5rem' }}>Mobile (React Native)</div>
        <ul className="exp-bullets">
          {mobileBullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>

      <div className="exp-card reveal delay-3" style={{ marginTop: '1.5rem' }}>
        <div className="exp-header">
          <div>
            <div className="exp-role">React Native Training</div>
            <div className="exp-company">HITAM College — Guest Trainer</div>
          </div>
          <div className="exp-period">2025</div>
        </div>
        <ul className="exp-bullets">
          <li>Conducted training on mobile application development for Hitam college students.</li>
        </ul>
      </div>
    </section>
  );
}
