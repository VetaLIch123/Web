const VARIANT = 19;
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeaangdn';
const SAMPLE_FEEDBACK = [
  { role: 'Security team lead', text: 'Shows a strong foundation in network security and access control, with a careful approach to protecting user accounts and sensitive data.' },
  { role: 'Project mentor', text: 'Built practical cybersecurity tools and explains security findings clearly. A thoughtful contributor who takes documentation and safe practices seriously.' },
  { role: 'Technical supervisor', text: 'Demonstrates curiosity, steady problem-solving, and a solid grasp of TCP/IP, Linux, and security monitoring fundamentals.' },
  { role: 'Development teammate', text: 'Reliable and collaborative, with a clear interest in improving system security and automating repeatable checks.' },
  { role: 'Training coordinator', text: 'Communicates security concepts accessibly and shows good awareness of authentication, password security, and incident response.' },
];

const systemInfo = {
  userAgent: navigator.userAgent,
  platform: navigator.platform,
};
localStorage.setItem('lab4-system-info', JSON.stringify(systemInfo));
const storedSystemInfo = JSON.parse(localStorage.getItem('lab4-system-info') || '{}');
const systemInfoElement = document.querySelector('#system-info');
systemInfoElement.textContent = `Browser: ${storedSystemInfo.userAgent || 'Unavailable'} · Platform: ${storedSystemInfo.platform || 'Unavailable'}`;

const themeToggle = document.querySelector('#theme-toggle');
function setTheme(theme) {
  document.body.dataset.theme = theme;
  themeToggle.textContent = theme === 'dark' ? 'Switch to day mode' : 'Switch to night mode';
}
function themeForCurrentTime() {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 21 ? 'light' : 'dark';
}
setTheme(themeForCurrentTime());
themeToggle.addEventListener('click', () => setTheme(document.body.dataset.theme === 'dark' ? 'light' : 'dark'));

const reviewList = document.querySelector('#review-list');
const reviewsStatus = document.querySelector('#reviews-status');
fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`)
  .then((response) => {
    if (!response.ok) throw new Error(`Request failed (${response.status})`);
    return response.json();
  })
  .then((comments) => {
    reviewsStatus.textContent = comments.length ? '' : 'No comments were returned.';
    comments.forEach((comment) => {
      const article = document.createElement('article');
      article.className = 'review-card';
      const author = document.createElement('h4');
      author.textContent = SAMPLE_FEEDBACK[(comment.id - 1) % SAMPLE_FEEDBACK.length].role;
      const body = document.createElement('p');
      body.textContent = SAMPLE_FEEDBACK[(comment.id - 1) % SAMPLE_FEEDBACK.length].text;
      article.append(author, body);
      reviewList.append(article);
    });
  })
  .catch(() => { reviewsStatus.textContent = 'Could not load comments. Please try again later.'; });

const modal = document.querySelector('#contact-modal');
const form = modal.querySelector('form');
const formStatus = document.querySelector('#form-status');
const modalTitle = document.querySelector('#contact-title');
const modalIntro = modal.querySelector('.contact-modal > p');
form.action = FORMSPREE_ENDPOINT;
const closeModal = () => {
  modal.hidden = true;
};
document.querySelector('#modal-close').addEventListener('click', closeModal);
document.querySelector('#contact-trigger').addEventListener('click', () => {
  modal.hidden = false;
  form.hidden = false;
  modalTitle.hidden = false;
  modalIntro.hidden = false;
  formStatus.textContent = '';
  formStatus.dataset.state = '';
});
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const submitButton = form.querySelector('[type="submit"]');
  const status = formStatus;
  submitButton.disabled = true;
  submitButton.textContent = 'Sending…';
  status.textContent = '';
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });
    if (!response.ok) throw new Error('Form submission failed');
    form.reset();
    form.hidden = true;
    modalTitle.hidden = true;
    modalIntro.hidden = true;
    status.textContent = 'Successfully sent. Thank you for your message!';
    status.dataset.state = 'success';
  } catch {
    status.textContent = 'The message could not be sent. Please check your connection and try again.';
    status.dataset.state = 'error';
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'Send';
  }
});
