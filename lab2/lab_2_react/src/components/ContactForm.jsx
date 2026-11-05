import { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeaangdn';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  function closeModal() {
    setIsOpen(false);
    setStatus('');
    setIsSuccess(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setIsSending(true);
    setStatus('');
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(formElement),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error('Form submission failed');
      setIsSuccess(true);
      setStatus('Successfully sent. Thank you for your message!');
      formElement.reset();
    } catch {
      setIsSuccess(false);
      setStatus('The message could not be sent. Please check your connection and try again.');
    } finally {
      setIsSending(false);
    }
  }

  return (
    <>
      <div className="mt-6 flex justify-center">
        <button type="button" onClick={() => setIsOpen(true)} className="rounded-lg bg-teal-700 px-6 py-3 font-bold text-white shadow hover:bg-teal-800">
          Send a message
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-slate-950/70 p-4" onMouseDown={(event) => { if (event.target === event.currentTarget) closeModal(); }}>
          <section role="dialog" aria-modal="true" aria-labelledby="contact-title" className="relative w-full max-w-lg rounded-2xl bg-white p-7 text-black shadow-2xl dark:bg-slate-800 dark:text-white">
            <button type="button" onClick={closeModal} className="absolute right-4 top-3 rounded px-2 py-1 text-2xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700" aria-label="Close contact form">×</button>
            <h2 id="contact-title" className="text-2xl font-bold">Contact me</h2>
            {!isSuccess && <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">Leave your contact details and message.</p>}
            {!isSuccess && (
              <form action={FORMSPREE_ENDPOINT} method="POST" onSubmit={handleSubmit} className="mt-5 grid gap-4">
                <label className="grid gap-1 text-sm font-semibold">Name<input name="name" autoComplete="name" required className="rounded-lg border border-slate-300 bg-transparent px-3 py-2 font-normal dark:border-slate-600" /></label>
                <label className="grid gap-1 text-sm font-semibold">Email<input name="email" type="email" autoComplete="email" required className="rounded-lg border border-slate-300 bg-transparent px-3 py-2 font-normal dark:border-slate-600" /></label>
                <label className="grid gap-1 text-sm font-semibold">Phone number<input name="phone" type="tel" autoComplete="tel" className="rounded-lg border border-slate-300 bg-transparent px-3 py-2 font-normal dark:border-slate-600" /></label>
                <label className="grid gap-1 text-sm font-semibold">Message<textarea name="message" rows="4" required className="rounded-lg border border-slate-300 bg-transparent px-3 py-2 font-normal dark:border-slate-600" /></label>
                <button type="submit" disabled={isSending} className="rounded-lg bg-teal-700 px-4 py-2.5 font-bold text-white hover:bg-teal-800 disabled:cursor-wait disabled:opacity-60">{isSending ? 'Sending…' : 'Send'}</button>
              </form>
            )}
            {status && <p role="status" className={`mt-5 font-semibold ${isSuccess ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-700 dark:text-rose-300'}`}>{status}</p>}
            {isSuccess && <button type="button" onClick={closeModal} className="mt-5 rounded-lg bg-teal-700 px-4 py-2 font-bold text-white hover:bg-teal-800">Close</button>}
          </section>
        </div>
      )}
    </>
  );
}

export default ContactForm;
