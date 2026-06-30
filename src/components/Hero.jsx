import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";

const TITLES = [
  "Frontend Developer",
  "React Native Developer",
  "Mobile App Developer",
  "React.js Developer",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const state = useRef({ tIdx: 0, cIdx: 0, deleting: false });

  useEffect(() => {
    let timeout;
    function type() {
      const { tIdx, cIdx, deleting } = state.current;
      const current = TITLES[tIdx];
      if (!deleting) {
        const next = cIdx + 1;
        setDisplayText(current.slice(0, next));
        state.current.cIdx = next;
        if (next === current.length) {
          state.current.deleting = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        const next = cIdx - 1;
        setDisplayText(current.slice(0, next));
        state.current.cIdx = next;
        if (next === 0) {
          state.current.deleting = false;
          state.current.tIdx = (tIdx + 1) % TITLES.length;
        }
      }
      timeout = setTimeout(type, state.current.deleting ? 50 : 80);
    }
    timeout = setTimeout(type, 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="hero" id="about">
      <div className="hero-bg-orb orb1" />
      <div className="hero-bg-orb orb2" />
      <div className="hero-content">
        <div className="hero-tag">Available for new opportunities</div>
        <h2 className="hero-name ">
          Alekhya
      
          <span > Jujjuri</span>
        </h2>
        <p className="hero-title">
          <span>{displayText}</span>
          <span className="typing-cursor" />
        </p>
        <p className="hero-desc">
          Building cross-platform mobile and web applications with React Native
          and React. Focused on performance, clean architecture, and delivering
          production-grade products that users love.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#projects">
            View Projects
          </a>
          <a className="btn btn-ghost" href="#contact">
            Get in Touch
          </a>
          {/* <a
            className="btn btn-download"
            href="Alekhya_J_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
          Preview Resume
          </a> */}
        </div>
        <div className="hero-socials">
          <a
            className="social-link"
            href="https://linkedin.com/in/alekhya-jujjuri-4298ba235"
            target="_blank"
            rel="noreferrer"
          >
            ↗ LinkedIn
          </a>
          <a
            className="social-link"
            href="https://github.com/ALEKHYAJUJJURI"
            target="_blank"
            rel="noreferrer"
          >
            ↗ GitHub
          </a>
          <a className="social-link" href="mailto:jujjurialekhya123@gmail.com">
            ↗ Email
          </a>
        </div>
      </div>
    </div>
  );
}
