const skills = ['Network Security', 'Cybersecurity Fundamentals', 'Linux', 'Windows Security', 'Python', 'C#', 'Git', 'Bash', 'TCP/IP', 'HTTP/HTTPS', 'Authentication & Authorization', 'Access Control', 'Cryptography Fundamentals', 'Password Security', 'Vulnerability Assessment', 'Penetration Testing', 'Security Policies & Procedures', 'Incident Response', 'Security Awareness Training'];
function Skills() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 border-b border-teal-100 pb-3 text-xl font-bold text-slate-900">Skills</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => <li key={skill} className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-sm text-teal-900">{skill}</li>)}
      </ul>
    </section>
  );
}
export default Skills;