const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const setTheme = (mode) => {
  document.documentElement.setAttribute('data-theme', mode);
  localStorage.setItem('theme', mode);
  const toggle = document.querySelector('[data-theme-toggle]');
  if (toggle) toggle.textContent = mode === 'light' ? 'Dark mode' : 'Light mode';
};

const initTheme = () => {
  const stored = localStorage.getItem('theme');
  setTheme(stored || (prefersDark ? 'dark' : 'light'));

  const btn = document.querySelector('[data-theme-toggle]');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'light' ? 'dark' : 'light');
  });
};

const initYear = () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
};

initTheme();
initYear();
