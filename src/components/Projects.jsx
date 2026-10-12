import React from 'react';
import './Projects.css';

const projects = [
  {
    icon: '✦',
    name: 'HealthSync / OK TeleHealth',
    type: 'Mobile · iOS & Android',
    typeColor: 'blue',
    desc: 'Cross-platform healthcare app with secure authentication, appointments, consultations, and profile workflows. Integrated biometrics, Google and Apple sign-in, Video SDK, OCR, and payment flows. Builds and release testing include TestFlight.',
    stack: [
      'React Native',
      'Expo',
      'TypeScript',
      'Context API',
      'SecureStore',
      'Video SDK',
      'Stripe',
      'PayPal',
    ],
    highlights: [
      'Authentication & biometrics',
      'Appointment and consultation flows',
      'iOS and Android build workflows',
    ],
  },
  {
    icon: '⌘',
    name: 'TeleHealth Web Platform',
    type: 'Web · Professional',
    typeColor: 'blue',
    desc: 'Responsive doctor and patient platform for authentication, appointments, consultations, and profiles. Built reusable interfaces, managed state, and connected healthcare workflows to REST APIs and third-party SDKs.',
    stack: [
      'React',
      'JavaScript',
      'Redux',
      'Tailwind CSS',
      'Ant Design',
      'REST APIs',
      'Google Maps',
      'Video SDK',
    ],
    highlights: [
      'Role-based user journeys',
      'Reusable UI components',
      'Performance improvements',
    ],
  },
  {
    icon: '◈',
    name: 'Claim Radar',
    type: 'Mobile · Professional',
    typeColor: 'orange',
    desc: 'React Native app for insurance and financial claim workflows. Contributed reusable components, REST API integration, Context API state management, OTP flows, payment integration, and regression validation.',
    stack: [
      'React Native',
      'TypeScript',
      'Expo',
      'Context API',
      'REST APIs',
    ],
    highlights: [
      'OTP and payment flows',
      'API-driven screens',
      'Feature and regression testing',
    ],
  },
  {
    icon: '🛒',
    name: 'ShopEase',
    type: 'Personal · In Progress',
    typeColor: 'green',
    desc: 'A full-stack e-commerce mobile app built with Expo and a Node.js backend. Current work includes registration, MongoDB user storage, authentication setup, and separate user/admin experiences.',
    stack: [
      'React Native',
      'Expo',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Docker',
      'GitHub Actions',
    ],
    highlights: [
      'Registration and user storage',
      'User/admin screens',
      'CI workflow exploration',
    ],
    github: 'https://github.com/ALEKHYAJUJJURI/e-commerce_app_with_backend',
  },
  {
    icon: '📰',
    name: 'News App',
    type: 'Personal Project',
    typeColor: 'green',
    desc: 'A mobile news-reading experience with category filtering, search, bookmarking, and offline-friendly caching, using Context API for lightweight state management.',
    stack: [
      'React Native',
      'Context API',
      'REST APIs',
      'AsyncStorage',
    ],
    highlights: [
      'Search and category filters',
      'Bookmarking',
      'Offline-friendly experience',
    ],
    github: 'https://github.com/ALEKHYAJUJJURI/News_App',
  },
  {
    icon: '🐾',
    name: 'MyPetApp',
    type: 'Personal Project',
    typeColor: 'green',
    desc: 'A personal mobile app project demonstrating cross-platform interface development with React Native. Explore the repository for implementation details.',
    stack: ['React Native', 'JavaScript'],
    github: 'https://github.com/ALEKHYAJUJJURI/MyPetApp',
  },
  {
    icon: '✦',
    name: 'SkillBridge',
    type: 'Web · Career Learning Platform',
    typeColor: 'purple',
    desc: 'A career roadmap platform built with Next.js to help users explore career paths, discover relevant skills, and track learning progress. Features dynamic roadmap pages, reusable React components, and a responsive interface.',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'App Router',
      'localStorage',
    ],
    highlights: [
      'Career roadmaps and dynamic routes',
      'Learning progress tracking',
      'Responsive UI and reusable components',
    ],
    github: 'https://github.com/ALEKHYAJUJJURI/SkillBridge',
  },
];

const TYPE_COLORS = {
  blue: {
    bg: 'rgba(88,166,255,.1)',
    color: '#79b8ff',
    border: 'rgba(88,166,255,.28)',
  },
  green: {
    bg: 'rgba(63,185,80,.1)',
    color: '#56d364',
    border: 'rgba(63,185,80,.28)',
  },
  orange: {
    bg: 'rgba(227,179,65,.1)',
    color: '#e3b341',
    border: 'rgba(227,179,65,.28)',
  },
  purple: {
    bg: 'rgba(188,140,255,.1)',
    color: '#bc8cff',
    border: 'rgba(188,140,255,.28)',
  },
};

export default function Projects() {
  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-title">
      <div className="section-label reveal">Selected Work</div>
      <h2 id="projects-title" className="section-title reveal delay-1">Projects that solve real problems</h2>
      <p className="projects-intro reveal delay-2">
        A mix of professional web and mobile product work, plus projects I’m building to keep learning.
      </p>
      <div className="projects-grid">
        {projects.map((project, i) => {
          const tone = TYPE_COLORS[project.typeColor];
          return (
            <article key={project.name} className={`project-card reveal delay-${(i % 4) + 1}`}>
              <div className="project-card-top">
                <div className="project-icon" aria-hidden="true">{project.icon}</div>
                <span className="project-type-badge" style={{ background: tone.bg, color: tone.color, border: `1px solid ${tone.border}` }}>
                  {project.type}
                </span>
              </div>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.desc}</p>
              {project.highlights && (
                <ul className="project-highlights">
                  {project.highlights.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
              <div className="project-stack" aria-label={`${project.name} technologies`}>
                {project.stack.map((tech) => <span key={tech} className="stack-tag">{tech}</span>)}
              </div>
              <div className="project-actions">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} source code on GitHub`}>
                    View source <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className="project-private-note">Professional project · details available on request</span>
                )}
              </div>
            </article>
          );
        })}
      </div>
      <div className="projects-more">
        <a className="btn btn-ghost" href="https://github.com/ALEKHYAJUJJURI" target="_blank" rel="noopener noreferrer">
          Explore more on GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
