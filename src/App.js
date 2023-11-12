import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import About from "./components/About/about" ;
import Education from "./components/Education/education" ;

import Project from "./components/Project/project" ;


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About/>
      <Education/>
      <Project/>
    </div>
  );
}

export default App;
