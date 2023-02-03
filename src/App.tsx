import './App.css';
import Hero from './Components/Hero';
import Contacts from './Components/Contacts';
import ProjectsPane from './Components/ProjectsPane';
import Skills from './Components/Skills';
import TopNavigationPane from './Components/TopNavigationPane/TopNavigationPane';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <TopNavigationPane />
      <Hero />
      <About />
      <Skills />
      <ProjectsPane />
      <Contacts />
    </div>
  );
}

export default App;
