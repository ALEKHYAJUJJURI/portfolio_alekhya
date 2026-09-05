import React from 'react';
import './Projects.css';

const projects = [
  {
    icon: '🛒',
    name: 'ShopEase',
    type: 'Personal Project',
    typeColor: 'green',
    desc: 'Full-stack mobile e-commerce app with REST API integration, MongoDB data management, and reusable UI components. Exploring Docker and GitHub Actions CI/CD workflows.',
    stack: ['React Native', 'Expo', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'Docker', 'GitHub Actions'],
  },
  {
    icon: '🏥',
    name: 'OK TeleHealth App',
    type: 'Production · App Store',
    typeColor: 'blue',
    desc: 'Cross-platform telehealth mobile app for Android and iOS. Built responsive UI components, integrated REST APIs for auth, appointments, consultations, and profiles. Implemented push notifications, deep linking, camera, microphone, biometric auth, Google Maps, Video SDK, Stripe, and PayPal. Managed APK/AAB and IPA builds with TestFlight and App Store release workflows.',
    stack: ['React Native', 'Expo', 'TypeScript', 'Redux Toolkit', 'Firebase', 'REST APIs', 'Google Maps', 'Video SDK', 'Stripe', 'PayPal'],
  },
  {
    icon: '💊',
    name: 'TeleHealth Web Platform',
    type: 'Production',
    typeColor: 'blue',
    desc: 'Responsive web platform for authentication, appointments, consultations, user profiles, and healthcare workflows. Built reusable UI components and integrated Google Maps, Video SDK, Stripe, and PayPal. Collaborated with backend and QA in an Agile/Scrum environment.',
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'Firebase', 'REST APIs', 'Tailwind CSS', 'Ant Design', 'Google Maps', 'Video SDK', 'Stripe', 'PayPal'],
  },
  {
    icon: '🛡️',
    name: 'Claim Radar',
    type: 'Production',
    typeColor: 'orange',
    desc: 'Mobile app for discovering and tracking insurance and financial claims. Built reusable components, integrated REST APIs, implemented state management and responsive interfaces. Supported feature testing and regression validation.',
    stack: ['React Native', 'TypeScript', 'REST APIs', 'Expo'],
  },
  {
    icon: '📰',
    name: 'News App',
    type: 'Personal Project',
    typeColor: 'green',
    desc: 'Real-time news app with category filtering, search, offline caching, and bookmarking. Managed lightweight state using Context API.',
    stack: ['React Native', 'Context API', 'Public APIs', 'Offline Cache'],
  },
];

const TYPE_COLORS = {
  blue:   { bg: 'rgba(88,166,255,0.1)',   color: '#58a6ff',  border: 'rgba(88,166,255,0.25)'  },
  green:  { bg: 'rgba(63,185,80,0.1)',    color: '#3fb950',  border: 'rgba(63,185,80,0.25)'   },
  orange: { bg: 'rgba(227,179,65,0.1)',   color: '#e3b341',  border: 'rgba(227,179,65,0.25)'  },
};

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-label reveal">My Work</div>
      <h2 className="section-title reveal delay-1">Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => {
          const tc = TYPE_COLORS[p.typeColor];
          return (
            <div key={p.name} className={`project-card reveal delay-${(i % 4) + 1}`}>
              <div className="project-card-top">
                <div className="project-icon">{p.icon}</div>
                <span
                  className="project-type-badge"
                  style={{ background: tc.bg, color: tc.color, border: `1px solid ${tc.border}` }}
                >
                  {p.type}
                </span>
              </div>
              <div className="project-name">{p.name}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-stack">
                {p.stack.map(t => <span key={t} className="stack-tag">{t}</span>)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}