function Header() {
  return (
    <header className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-teal-800 px-6 py-10 text-center text-white shadow-xl sm:px-10 sm:py-14">
      <p className="mb-2 text-xs font-bold tracking-[0.24em] text-teal-200">CURRICULUM VITAE</p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Rodych Vitalii</h1>
      <h2 className="mt-3 text-lg font-medium text-teal-100 sm:text-xl">Cybersecurity Specialist</h2>
      <nav aria-label="CV sections" className="mt-7 flex flex-wrap justify-center gap-2">
        {[
          ['Skills', 'skills'], ['Projects', 'projects'], ['Education', 'education'],
          ['Additional Information', 'additional-information'], ['Reviews', 'reviews'], ['Contact', 'contact'],
        ].map(([label, id]) => (
          <a key={id} href={`#${id}`} className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white">{label}</a>
        ))}
      </nav>
    </header>
  );
}
export default Header;
