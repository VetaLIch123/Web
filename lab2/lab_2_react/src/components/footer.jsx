import { useEffect, useState } from 'react';

const details = [
  'Available for full-time positions in cybersecurity', 'Willing to relocate',
  'Fluent in English and Ukrainian', 'Familiar with cybersecurity principles and information security practices',
  'Understanding of authentication, authorization, access-control models, and password security',
  'Basic knowledge of network protocols and security monitoring',
  'Experience with Git and collaborative software development',
  'Interested in system security, network security, and security automation',
];
function Footer() {
  const [systemInfo, setSystemInfo] = useState(null);

  useEffect(() => {
    const info = { userAgent: navigator.userAgent, platform: navigator.platform };
    localStorage.setItem('lab4-system-info', JSON.stringify(info));
    setSystemInfo(JSON.parse(localStorage.getItem('lab4-system-info') || '{}'));
  }, []);

  return (
    <>
      <section id="additional-information" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="mb-4 border-b border-teal-100 pb-3 text-xl font-bold text-slate-900">Additional Information</h3>
        <ul className="list-inside list-disc space-y-2 text-sm leading-6 text-slate-600">{details.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>
      <footer id="contact" className="flex flex-col items-center justify-between gap-3 rounded-2xl bg-slate-900 px-6 py-4 text-sm text-slate-200 sm:flex-row">
        <p><b className="text-white">Phone:</b> <a className="hover:text-teal-300 focus-visible:outline-2 focus-visible:outline-teal-300" href="tel:+380980748465">+380980748465</a></p>
        <a className="font-semibold text-teal-300 transition hover:scale-105 hover:text-teal-200" href="https://github.com/VetaLIch123" target="_blank" rel="noreferrer">GitHub profile ↗</a>
        <p className="max-w-full break-words text-xs text-slate-300" aria-label="Browser and platform information">{systemInfo ? `Browser: ${systemInfo.userAgent} · Platform: ${systemInfo.platform}` : 'Loading system information…'}</p>
      </footer>
    </>
  );
}
export default Footer;

