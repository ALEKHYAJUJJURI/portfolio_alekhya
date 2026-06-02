import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Divider from './components/Divider';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';
import Particles from './components/Particles';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Particles />
      <Navbar />
      <Hero />
      <Divider />
      <Skills />
      <Divider />
      <Experience />
      <Divider />
      <Projects />
      <Divider />
      <Education />
      <Divider />
      <Contact />
      <Footer />
    </>
  );
}
