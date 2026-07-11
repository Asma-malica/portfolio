import React from 'react';
import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Project from './components/Project/project';
import Education from './components/Education/education';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import './App.css';

function App() {
  return (
    <div className="App bg-noise relative">
      <Navbar />
      <main className="pt-20"> {/* Add padding top to account for fixed navbar */}
        <Intro />
        <About />
        <Experience />
        <Skills />
        <Project />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
