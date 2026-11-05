import { useEffect, useState } from 'react';

const VARIANT = 19;
const SAMPLE_FEEDBACK = [
  { role: 'Security team lead', text: 'Shows a strong foundation in network security and access control, with a careful approach to protecting user accounts and sensitive data.' },
  { role: 'Project mentor', text: 'Built practical cybersecurity tools and explains security findings clearly. A thoughtful contributor who takes documentation and safe practices seriously.' },
  { role: 'Technical supervisor', text: 'Demonstrates curiosity, steady problem-solving, and a solid grasp of TCP/IP, Linux, and security monitoring fundamentals.' },
  { role: 'Development teammate', text: 'Reliable and collaborative, with a clear interest in improving system security and automating repeatable checks.' },
  { role: 'Training coordinator', text: 'Communicates security concepts accessibly and shows good awareness of authentication, password security, and incident response.' },
];

function Reviews() {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Request failed (${response.status})`);
        return response.json();
      })
      .then(setComments)
      .catch((requestError) => {
        if (requestError.name !== 'AbortError') setError('Could not load comments. Please try again later.');
      });
    return () => controller.abort();
  }, []);

  return (
    <section id="reviews" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <h3 className="mb-1 border-b border-teal-100 pb-3 text-xl font-bold text-slate-900 dark:border-slate-700 dark:text-white">Illustrative professional feedback</h3>
      <p className="mb-4 text-xs text-slate-500 dark:text-slate-400">Sample wording for this CV; these are not verified employer testimonials.</p>
      {error && <p role="status" className="text-sm text-rose-700 dark:text-rose-300">{error}</p>}
      {!error && comments.length === 0 && <p role="status" className="text-sm text-slate-500 dark:text-slate-300">Loading comments…</p>}
      <div className="grid gap-4 sm:grid-cols-2">
        {comments.map((comment) => (
          <article key={comment.id} className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white">{SAMPLE_FEEDBACK[(comment.id - 1) % SAMPLE_FEEDBACK.length].role}</h4>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{SAMPLE_FEEDBACK[(comment.id - 1) % SAMPLE_FEEDBACK.length].text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
