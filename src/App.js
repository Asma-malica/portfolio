import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import About from "./components/About/about" ;
import Education from "./components/Education/education" ;

import Project from "./components/Project/project" ;
import Contact from "./components/Contact/contact";

import Footer from "./components/Footer/footer" ;
import Skills from "./components/Skills/skills" ;



function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About/>
      <Education/>
      <Skills/>
      <Project/>
      <Contact/>
      
      <Footer/>
    </div>
  );
}

export default App;
