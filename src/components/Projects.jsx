import React from 'react';
import './Projects.css';

const projects = [
  {
    icon: '🛒',
    name: 'ShopEase E-commerce Platform',
    desc: 'Currently developing a full-stack e-commerce application with a modern shopping experience. Features include product browsing, search and filtering, wishlist, shopping cart, secure authentication, order management, and responsive UI. Built with scalable architecture and REST API integration.',
    stack: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Redux Toolkit',
      'JWT',
      'REST APIs',
      'Tailwind CSS'
    ],
  },
  {
    icon: '🏥',
    name: 'OK Telehealth App',
    desc: 'Production-grade mobile application for Android and iOS. Features Firebase Google Login, push notifications, biometric authentication, and camera/microphone device management. Published on Apple App Store via TestFlight.',
    stack: ['React Native', 'Expo', 'Firebase', 'Axios', 'iOS', 'Android'],
  },
  {
    icon: '💊',
    name: 'Telehealth Platform',
    desc: 'Full-featured web telehealth platform with real-time consultations, appointment scheduling, and EHR-related features. Integrated Google Maps, Video SDK, Stripe, and PayPal for seamless user experience.',
    stack: ['React', 'Tailwind', 'Ant Design', 'Stripe', 'Google Maps', 'Video SDK'],
  },
  {
    icon: '🛡️',
    name: 'Claim Radar App',
    desc: 'Mobile app helping users discover and track insurance and financial claims. Built with OTP-based onboarding, personalized preferences, and a smooth secure navigation experience.',
    stack: ['React Native', 'Expo', 'OTP Auth', 'REST APIs'],
  },
  {
    icon: '📰',
    name: 'News App',
    desc: 'Real-time news application using public APIs. Features category filtering, search, offline caching, and bookmarking — all managed with Context API for lightweight state management.',
    stack: ['React Native', 'Context API', 'Public APIs', 'Offline Cache'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-label reveal">My Work</div>
      <h2 className="section-title reveal delay-1">Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={p.name} className={`project-card reveal delay-${(i % 4) + 1}`}>
            <div className="project-icon">{p.icon}</div>
            <div className="project-name">{p.name}</div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-stack">
              {p.stack.map(t => <span key={t} className="stack-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
