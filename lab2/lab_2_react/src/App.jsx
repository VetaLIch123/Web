import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import Reviews from './components/Reviews.jsx';
import ContactForm from './components/ContactForm.jsx';

function App() {
  const [theme, setTheme] = useState(() => {
    const hour = new Date().getHours();
    return hour >= 7 && hour < 21 ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    return () => document.documentElement.classList.remove('dark');
  }, [theme]);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
      <div className="mb-5 flex justify-end"><button type="button" onClick={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} className="rounded-lg bg-teal-700 px-4 py-2 text-sm font-bold text-white hover:bg-teal-800">Switch to {theme === 'dark' ? 'day' : 'night'} mode</button></div>
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
      <div className="mt-6"><Reviews /></div>
      <ContactForm />
      </div>
    </div>
  );
}

export default App;
