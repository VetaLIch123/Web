const projects = [
  { name: 'SecureAuth', description: 'Secure user authentication and access-control system designed to protect user accounts and sensitive data. Implemented password hashing with SHA-512 and salting, account validation, access-control mechanisms, security logging, and protection against common authentication issues.', tools: 'Python · SHA-512 · CSV · JSON · Git' },
  { name: 'NetworkGuard', description: 'Network security monitoring tool for analyzing connections and identifying potentially suspicious traffic. Focuses on TCP/IP fundamentals, connection analysis, IP/port monitoring, and basic detection of anomalous network activity.', tools: 'Python · TCP/IP · Socket · Linux' },
  { name: 'SecurityLab', description: 'Cybersecurity utilities for password security analysis, access-control verification, and security event logging. Includes password strength assessment, forbidden-password detection, user clearance verification, blocked-account handling, and structured security logs.', tools: 'Python · Git · JSON · CSV · Cryptography' },
];
function Projects() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 border-b border-teal-100 pb-3 text-xl font-bold text-slate-900">Selected Projects</h3>
      <div className="space-y-5">
        {projects.map((project) => (
          <article key={project.name} className="border-b border-slate-100 pb-5 last:border-0 last:pb-0">
            <h4 className="font-bold text-slate-900">{project.name}</h4>
            <p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p>
            <p className="mt-2 text-xs font-medium tracking-wide text-teal-800">{project.tools}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
export default Projects;