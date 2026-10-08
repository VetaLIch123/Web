const details = [
  'Available for full-time positions in cybersecurity', 'Willing to relocate',
  'Fluent in English and Ukrainian', 'Familiar with cybersecurity principles and information security practices',
  'Understanding of authentication, authorization, access-control models, and password security',
  'Basic knowledge of network protocols and security monitoring',
  'Experience with Git and collaborative software development',
  'Interested in system security, network security, and security automation',
];
function Footer() {
  return (
    <>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="mb-4 border-b border-teal-100 pb-3 text-xl font-bold text-slate-900">Additional Information</h3>
        <ul className="list-inside list-disc space-y-2 text-sm leading-6 text-slate-600">{details.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>
      <footer className="flex flex-col items-center justify-between gap-3 rounded-2xl bg-slate-900 px-6 py-4 text-sm text-slate-200 sm:flex-row">
        <p><b className="text-white">Phone:</b> <a className="hover:text-teal-300 focus-visible:outline-2 focus-visible:outline-teal-300" href="tel:+380980748465">+380980748465</a></p>
        <a className="font-semibold text-teal-300 transition hover:scale-105 hover:text-teal-200" href="https://github.com/VetaLIch123" target="_blank" rel="noreferrer">GitHub profile ↗</a>
      </footer>
    </>
  );
}
export default Footer;