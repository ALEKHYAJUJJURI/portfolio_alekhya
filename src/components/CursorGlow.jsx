import React, { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current) {
        ref.current.style.left = e.clientX + 'px';
        ref.current.style.top = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', handler);
    return () => document.removeEventListener('mousemove', handler);
  }, []);

  return (
    <div ref={ref} style={{
      position: 'fixed',
      width: 300, height: 300,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(124,107,255,0.07) 0%, transparent 70%)',
      pointerEvents: 'none',
      zIndex: 999,
      transform: 'translate(-50%, -50%)',
      transition: 'left 0.15s ease, top 0.15s ease',
    }} />
  );
}
