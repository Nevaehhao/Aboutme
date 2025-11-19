const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const setTheme = (mode) => {
  document.documentElement.setAttribute('data-theme', mode);
  localStorage.setItem('theme', mode);
  const toggle = document.querySelector('[data-theme-toggle]');
  if (toggle) toggle.textContent = mode === 'light' ? 'Dark mode' : 'Light mode';
};

const storedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(storedTheme || (prefersDark ? 'dark' : 'light'));

document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    setTheme(next);
  });
});

if (!prefersReduced) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.22 }
  );

  document.querySelectorAll('.section-shell, .reveal').forEach((el) => observer.observe(el));

  const orbs = document.querySelectorAll('.orb');
  document.addEventListener('pointermove', (event) => {
    const { innerWidth, innerHeight } = window;
    const x = (event.clientX / innerWidth - 0.5) * 2;
    const y = (event.clientY / innerHeight - 0.5) * 2;
    orbs.forEach((orb, idx) => {
      const depth = (idx + 1) * 8;
      orb.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
    });
  });
}
