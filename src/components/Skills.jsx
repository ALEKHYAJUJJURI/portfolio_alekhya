import React from 'react';
import './Skills.css';

const skillGroups = [
  {
    title: 'Languages',
    tags: ['JavaScript ES6+', 'TypeScript', 'HTML5', 'CSS3', 'Python'],
  },
  {
    title: 'Frameworks & Libraries',
    tags: ['React', 'React Native', 'Expo', 'React Native CLI', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'Ant Design'],
  },
  {
    title: 'Backend & APIs',
    tags: ['REST APIs', 'Axios', 'Fetch', 'Firebase', 'Node.js', 'Express.js', 'OAuth', 'JSON'],
  },
  {
    title: 'Mobile Development',
    tags: ['Android', 'iOS', 'Expo Builds', 'Biometric Auth', 'App Store Connect', 'TestFlight', 'Google Play Console'],
  },
  {
    title: 'Databases & Cloud',
    tags: ['MongoDB', 'SQL', 'Netlify', 'Vercel', 'GitHub Pages'],
  },
  {
    title: 'Tools & Workflow',
    tags: ['Git', 'GitHub', 'Postman', 'VS Code', 'Android Studio', 'Xcode', 'Chrome DevTools'],
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
            <div key={group.title} className={`skill-group reveal delay-${(i % 3) + 1}`}>
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
