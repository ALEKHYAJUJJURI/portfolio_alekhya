import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handler = () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setWidth(pct);
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, height: 3,
      background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
      width: `${width}%`, zIndex: 9999, transition: 'width 0.1s linear',
    }} />
  );
}
