import React, { useEffect, useRef } from 'react';

const COLORS = ['rgba(124,107,255,0.5)', 'rgba(255,107,157,0.4)', 'rgba(0,229,200,0.4)'];

export default function Particles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    for (let i = 0; i < 18; i++) {
      const p = document.createElement('div');
      const size = Math.random() * 4 + 2;
      p.style.cssText = `
        position: absolute;
        border-radius: 50%;
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        background: ${COLORS[Math.floor(Math.random() * COLORS.length)]};
        animation: floatUp linear infinite;
        animation-duration: ${Math.random() * 15 + 12}s;
        animation-delay: ${Math.random() * 10}s;
        opacity: 0;
      `;
      container.appendChild(p);
    }
    return () => { while (container.firstChild) container.removeChild(container.firstChild); };
  }, []);

  return (
    <div ref={containerRef} style={{
      position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden',
    }} />
  );
}
