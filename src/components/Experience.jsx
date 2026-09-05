import React from 'react';
import './Experience.css';

const galactixBullets = [
  'Developed and maintained responsive web and cross-platform mobile applications using React.js, React Native, Expo, JavaScript, and TypeScript.',
  'Built reusable UI components and modular frontend architecture, improving consistency, scalability, and long-term maintainability.',
  'Delivered end-to-end telehealth workflows — authentication, profiles, appointment scheduling, consultations, and user journeys — integrated via REST APIs with Redux Toolkit and Context API state management.',
  'Integrated Firebase authentication, push notifications, Google Maps, Video SDK, Stripe, and PayPal across web and mobile platforms.',
  'Implemented mobile-native capabilities including navigation, deep linking, permissions, camera, microphone, and biometric authentication.',
  'Managed Android (APK/AAB) and iOS (IPA) build pipelines; led Play Store, TestFlight, and App Store submission workflows independently.',
  'Optimised application performance through lazy loading, efficient rendering, and component reuse — contributing to a 25% reduction in reported load time.',
  'Collaborated with backend, QA, design, and team leads in Agile/Scrum workflows using Git, GitHub, Docker, and GitHub Actions.',
];

const hitamBullets = [
  'Designed and delivered a structured React Native training programme for undergraduate students at HITAM College.',
  'Covered mobile app fundamentals, Expo workflow, component architecture, REST API integration, and app deployment.',
];

export default function Experience() {
  return (
    <section id="experience" className="exp-section">
      <div className="section-label reveal">Work History</div>
      <h2 className="section-title reveal delay-1">Experience</h2>

      {/* Galactix */}
      <div className="exp-card reveal delay-2">
        <div className="exp-header">
          <div className="exp-header-left">
            <div className="exp-role">Frontend Developer — React.js &amp; React Native</div>
            <div className="exp-company">Galactix Solutions Pvt. Ltd. · Hyderabad, India</div>
          </div>
          <div className="exp-meta">
            <span className="exp-period">Nov 2024 – Apr 2026</span>
            <span className="exp-badge">Full-time</span>
          </div>
        </div>
        <ul className="exp-bullets">
          {galactixBullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>

      {/* HITAM */}
      <div className="exp-card reveal delay-3">
        <div className="exp-header">
          <div className="exp-header-left">
            <div className="exp-role">Guest Trainer — React Native</div>
            <div className="exp-company">HITAM College · Hyderabad, India</div>
          </div>
          <div className="exp-meta">
            <span className="exp-period">2025</span>
            <span className="exp-badge exp-badge-green">Training</span>
          </div>
        </div>
        <ul className="exp-bullets">
          {hitamBullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
    </section>
  );
}