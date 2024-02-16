import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Education from './components/Education/education';
import Project from './components/Project/project';
import Contact from './components/Contact/contact';
import Skills from './components/Skills/Skills';
import Navbar from './components/NavBar/navbar';
import Footer from './components/Footer/footer'

function App() {
  return (
    <div className="App">
        <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
    </Router>
      </div>
  );
}

export default App;