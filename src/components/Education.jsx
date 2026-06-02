import React from 'react';
import './Education.css';

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    school: 'Kakinada Institute of Engineering and Technology, Kakinada, Andhra Pradesh',
    year: '2019 – 2023',
    grade: '7.1',
    label: 'CGPA',
  },
  {
    degree: 'Intermediate (MPC)',
    school: 'AP Modal Junior College, Nuzendla',
    year: '2017 – 2019',
    grade: '9.75',
    label: 'GPA',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    school: 'ZP High School, Nuzendla',
    year: '2016 – 2017',
    grade: '9.0',
    label: 'GPA',
  },
];

export default function Education() {
  return (
    <section id="education" className="edu-section">
      <div className="section-label reveal">Academic Background</div>
      <h2 className="section-title reveal delay-1">Education</h2>
      <div className="edu-list">
        {education.map((e, i) => (
          <div key={e.degree} className={`edu-card reveal delay-${i + 1}`}>
            <div className="edu-info">
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-year">{e.year}</div>
            </div>
            <div className="edu-cgpa">
              <div className="cgpa-number">{e.grade}</div>
              <div className="cgpa-label">{e.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
