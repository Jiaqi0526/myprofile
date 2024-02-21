import './App.css';
import Cover from './components/Cover';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <Cover />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
