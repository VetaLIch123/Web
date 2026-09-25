import Header from './components/Header.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Skills />
        <Education />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;