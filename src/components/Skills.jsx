import React from 'react';
import './Skills.css';

const skillGroups = [
  {
    title: 'Languages',
    tags: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend',
    tags: [
      'React.js', 'React Native', 'Expo', 'React Native CLI',
      'Tailwind CSS', 'Ant Design', 'Material UI', 'Bootstrap',
      'Redux Toolkit', 'Context API', 'Responsive Design', 'Reusable Components',
    ],
  },
  {
    title: 'Backend & APIs',
    tags: ['REST APIs', 'Axios', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'Services',
    tags: [
      'Firebase', 'Authentication', 'Push Notifications',
      'Google Maps', 'Video SDK', 'Stripe', 'PayPal',
    ],
  },
  {
    title: 'Mobile & Release',
    tags: [
      'Android', 'iOS', 'Navigation', 'Deep Linking', 'Permissions',
      'Camera', 'Microphone', 'Biometric Auth', 'EAS Build', 'APK/AAB',
      'Google Play Console', 'App Store Connect', 'TestFlight',
    ],
  },
  {
    title: 'Tools & Practices',
    tags: [
      'Git', 'GitHub', 'GitHub Actions', 'Docker', 'CI/CD',
      'Postman', 'Android Studio', 'Xcode', 'VS Code', 'Agile', 'Scrum',
    ],
  },
  {
    title: 'AI Tools',
    tags: ['ChatGPT', 'Claude', 'Perplexity'],
  },
];

export default function Skills() {
  return (
    <div id="skills" className="skills-section">
      <div className="skills-wrapper">
        <div className="section-label reveal">Technical Skills</div>
        <h2 className="section-title reveal delay-1">What I Work With</h2>
        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className={`skill-group reveal delay-${(i % 4) + 1}`}
            >
              <div className="skill-group-title">{group.title}</div>
              <div className="skill-tags">
                {group.tags.map(tag => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}