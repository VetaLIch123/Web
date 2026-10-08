import Header from './components/Header.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="mx-auto min-h-screen max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
      <Header />
      <main className="mt-8 grid gap-6 lg:grid-cols-[1.55fr_0.85fr]">
        <div className="grid content-start gap-6">
          <Skills />
          <Projects />
        </div>
        <div className="grid content-start gap-6">
          <Education />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;