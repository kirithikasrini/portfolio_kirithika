import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Volunteering from './components/Volunteering';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F2EFEA] text-[#2E3440] font-sans antialiased selection:bg-[#B9572F] selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 px-6 max-w-6xl mx-auto w-full">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Volunteering />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
