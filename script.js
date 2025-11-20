const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const data = {
  hero: {
    eyebrow: 'Portfolio preview',
    headline: 'Designing calm, inclusive experiences for complex products.',
    lede:
      "I craft end-to-end experiences with equal care for research depth, interaction craft, and visual storytelling. Here's a lightweight landing page you can personalize with your own case studies.",
  },
  meta: {
    focus: 'Product UX • Design Systems • Research Ops',
    current: 'MSc. Digital Transformation & Innovation, uOttawa',
  },
  toolbox: [
    'Discovery research & mixed-method synthesis',
    'Journey mapping & service blueprints',
    'Prototype storytelling (Figma, Framer)',
    'Design systems & accessibility standards',
  ],
  experience: [
    {
      period: '2024 — Present',
      role: 'UX Designer · Internship',
      summary: 'Add the team, product scope, and metrics you influenced.',
      bullets: [
        'Example: led usability study that improved task success by 24%.',
        'Example: prototyped onboarding flow that cut support tickets in half.',
      ],
    },
    {
      period: '2022 — 2024',
      role: 'Graduate Research Assistant',
      summary: 'Describe your research focus and how it sharpened your UX lens.',
      bullets: [
        'Example: facilitated workshops to align stakeholders on user needs.',
        'Example: built evidence-backed recommendations for product roadmap.',
      ],
    },
    {
      period: 'Earlier',
      role: 'Communication & Media Projects',
      summary: 'Show how your communication background informs design clarity.',
      bullets: [
        'Example: crafted brand story that increased engagement by 18%.',
        'Example: shipped microcopy updates that improved comprehension.',
      ],
    },
  ],
  projects: [
    {
      tag: 'Mobile',
      title: 'Patient wellness companion',
      copy: 'Journey-led redesign that reduced drop-off and grew weekly retention.',
    },
    {
      tag: 'Web',
      title: 'Energy usage dashboard',
      copy: 'Data storytelling for smart homes, balancing clarity with depth.',
    },
    {
      tag: 'Design System',
      title: 'Accessible component library',
      copy: 'Scalable, WCAG-compliant patterns that speed up product delivery.',
    },
  ],
  steps: [
    { label: '01', title: 'Listen deeply', copy: 'Start with context: problem framing, stakeholder mapping, and measurable goals.' },
    { label: '02', title: 'Prototype fast', copy: 'Create lo-fi to hi-fi flows, validating decisions through quick feedback loops.' },
    { label: '03', title: 'Measure & refine', copy: 'Track usability, accessibility, and business metrics to guide future iterations.' },
  ],
};

const app = document.getElementById('app');

const buildPage = () => {
  const projectCards = data.projects
    .map(
      (item) => `
        <article class="card tile tilt" data-animate>
          <div class="badge">${item.tag}</div>
          <h3>${item.title}</h3>
          <p>${item.copy}</p>
          <a class="text-link" href="#">Read case study</a>
        </article>
      `
    )
    .join('');

  const experienceItems = data.experience
    .map(
      (item) => `
        <article class="card outline" data-animate>
          <header>
            <p class="eyebrow">${item.period}</p>
            <h3>${item.role}</h3>
            <p class="meta">${item.summary}</p>
          </header>
          <ul>
            ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}
          </ul>
        </article>
      `
    )
    .join('');

  const stepItems = data.steps
    .map(
      (step) => `
        <div class="card step tilt" data-animate>
          <p class="chip">${step.label}</p>
          <h3>${step.title}</h3>
          <p>${step.copy}</p>
        </div>
      `
    )
    .join('');

  const toolboxItems = data.toolbox.map((item) => `<li>${item}</li>`).join('');

  app.innerHTML = `
    <div class="page-shell">
      <div class="backdrop">
        <canvas id="particleCanvas"></canvas>
        <div class="grid-light"></div>
        <div class="orb orb--one"></div>
        <div class="orb orb--two"></div>
      </div>
      <header class="site-header">
        <div class="brand">
          <span class="dot"></span>
          <div>
            <p class="eyebrow">Ruiyao Hao</p>
            <p class="role">UX Designer & Researcher</p>
          </div>
        </div>
        <nav class="nav" aria-label="Primary">
          <a href="#top" class="nav__link">Top</a>
          <a href="#about" class="nav__link">About</a>
          <a href="#experience" class="nav__link">Experience</a>
          <a href="#projects" class="nav__link">Projects</a>
          <a href="#contact" class="nav__link">Contact</a>
          <button class="pill" type="button" data-theme-toggle>Dark mode</button>
        </nav>
      </header>

      <main id="top">
        <section class="hero card glass" data-animate>
          <div>
            <p class="eyebrow">${data.hero.eyebrow}</p>
            <h1>${data.hero.headline}</h1>
            <p class="lede">${data.hero.lede}</p>
            <p class="typewriter" id="typewriter" aria-live="polite"></p>
            <div class="actions">
              <a class="pill pill--solid magnetic" href="#projects">View work</a>
              <a class="pill magnetic" href="https://ruiyaohao983.wixsite.com/ruiyao" target="_blank" rel="noopener">Visit full portfolio</a>
            </div>
            <div class="meta-grid">
              <div>
                <p class="eyebrow">Focus</p>
                <p class="meta">${data.meta.focus}</p>
              </div>
              <div>
                <p class="eyebrow">Currently</p>
                <p class="meta">${data.meta.current}</p>
              </div>
            </div>
          </div>
          <div class="portrait tilt">
            <div class="glow"></div>
            <img src="photo/myphoto.jpg" alt="Portrait of Ruiyao Hao" />
            <div class="card overlay">
              <p class="eyebrow">Available for</p>
              <p class="meta">Product design · UX research · Internships</p>
            </div>
          </div>
        </section>

        <section class="section" id="about">
          <div class="section__header" data-animate>
            <p class="eyebrow">About</p>
            <h2>Designing with empathy, rigor, and measurable impact.</h2>
          </div>
          <div class="section__content grid" data-animate>
            <p>
              I blend qualitative research with data-led iteration to shape experiences that feel intuitive and trustworthy. Swap in your own narrative here—highlight your superpower, design philosophy, and the outcomes you care about.
            </p>
            <div class="card list">
              <p class="eyebrow">Toolbox</p>
              <ul>${toolboxItems}</ul>
            </div>
          </div>
        </section>

        <section class="section" id="experience">
          <div class="section__header" data-animate>
            <p class="eyebrow">Experience</p>
            <h2>Recent roles and impact moments.</h2>
          </div>
          <div class="section__content columns">${experienceItems}</div>
        </section>

        <section class="section" id="projects">
          <div class="section__header" data-animate>
            <p class="eyebrow">Projects</p>
            <h2>Case-study ready tiles you can replace.</h2>
            <p class="meta">Swap the content with your own UX work.</p>
          </div>
          <div class="section__content grid">${projectCards}</div>
        </section>

        <section class="section alt" id="process">
          <div class="section__header" data-animate>
            <p class="eyebrow">Approach</p>
            <h2>How I collaborate</h2>
          </div>
          <div class="section__content steps">${stepItems}</div>
        </section>

        <section class="section" id="contact">
          <div class="callout card glass" data-animate>
            <div>
              <p class="eyebrow">Contact</p>
              <h2>Let’s build something thoughtful together.</h2>
              <p class="meta">Drop a note about the problem space, audience, and success metrics.</p>
            </div>
            <div class="actions">
              <a class="pill pill--solid magnetic" href="mailto:ruiyao@example.com">Email me</a>
              <a class="pill magnetic" href="#top">Back to top</a>
            </div>
          </div>
        </section>
      </main>

      <div class="scroll-progress" aria-hidden="true"><span></span></div>
    </div>
  `;
};

const setTheme = (mode) => {
  document.documentElement.setAttribute('data-theme', mode);
  localStorage.setItem('theme', mode);
  const toggle = document.querySelector('[data-theme-toggle]');
  if (toggle) toggle.textContent = mode === 'light' ? 'Dark mode' : 'Light mode';
};

const initTheme = () => {
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(storedTheme || (prefersDark ? 'dark' : 'light'));

  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      setTheme(next);
    });
  });
};

const initTypewriter = () => {
  const el = document.getElementById('typewriter');
  if (!el) return;
  const phrases = ['Interaction prototyping', 'Design system leadership', 'Research synthesis'];
  let idx = 0;
  let char = 0;
  let deleting = false;

  const tick = () => {
    const current = phrases[idx];
    char += deleting ? -1 : 1;
    el.textContent = current.slice(0, char);

    if (!deleting && char === current.length) {
      deleting = true;
      setTimeout(tick, 1200);
      return;
    }
    if (deleting && char === 0) {
      deleting = false;
      idx = (idx + 1) % phrases.length;
    }
    const delay = deleting ? 50 : 90;
    setTimeout(tick, delay);
  };

  tick();
};

const initReveal = () => {
  if (prefersReduced) return;
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );

  document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
};

const initParallax = () => {
  if (prefersReduced) return;
  const backdrop = document.querySelector('.backdrop');
  document.addEventListener('pointermove', (event) => {
    const { innerWidth, innerHeight } = window;
    const x = (event.clientX / innerWidth - 0.5) * 2;
    const y = (event.clientY / innerHeight - 0.5) * 2;
    document.documentElement.style.setProperty('--tilt-x', `${y * -6}deg`);
    document.documentElement.style.setProperty('--tilt-y', `${x * 6}deg`);
    if (backdrop) {
      backdrop.style.setProperty('--shift-x', `${x * 40}px`);
      backdrop.style.setProperty('--shift-y', `${y * 40}px`);
    }
  });
};

const initTilt = () => {
  if (prefersReduced) return;
  const tiltItems = document.querySelectorAll('.tilt');
  tiltItems.forEach((item) => {
    item.addEventListener('pointermove', (event) => {
      const rect = item.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / rect.height) * -10;
      const rotateY = ((x - rect.width / 2) / rect.width) * 10;
      item.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
    });
    item.addEventListener('pointerleave', () => {
      item.style.transform = '';
    });
  });
};

const initMagnetic = () => {
  if (prefersReduced) return;
  document.querySelectorAll('.magnetic').forEach((btn) => {
    const strength = 18;
    btn.addEventListener('pointermove', (event) => {
      const rect = btn.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * strength;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * strength;
      btn.style.transform = `translate(${x}px, ${y}px)`;
    });
    btn.addEventListener('pointerleave', () => {
      btn.style.transform = '';
    });
  });
};

const initParticles = () => {
  if (prefersReduced) return;
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const particles = Array.from({ length: 90 }, () => ({
    x: Math.random(),
    y: Math.random(),
    size: Math.random() * 2 + 0.5,
    speedX: (Math.random() - 0.5) * 0.2,
    speedY: (Math.random() - 0.5) * 0.2,
  }));

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener('resize', resize);

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    particles.forEach((p) => {
      p.x += p.speedX;
      p.y += p.speedY;
      if (p.x < 0 || p.x > 1) p.speedX *= -1;
      if (p.y < 0 || p.y > 1) p.speedY *= -1;
      ctx.beginPath();
      ctx.arc(p.x * canvas.width, p.y * canvas.height, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  };

  draw();
};

const initScrollProgress = () => {
  const bar = document.querySelector('.scroll-progress span');
  if (!bar) return;
  const update = () => {
    const max = document.body.scrollHeight - window.innerHeight;
    const progress = max ? (window.scrollY / max) * 100 : 0;
    bar.style.width = `${progress}%`;
  };
  update();
  document.addEventListener('scroll', update);
};

const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
};

const initNavHighlight = () => {
  const links = document.querySelectorAll('.nav__link');
  const sections = Array.from(links)
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const onScroll = () => {
    const offset = window.scrollY + 120;
    sections.forEach((section, idx) => {
      if (section.offsetTop <= offset && section.offsetTop + section.clientHeight > offset) {
        links[idx].classList.add('is-active');
      } else {
        links[idx].classList.remove('is-active');
      }
    });
  };
  onScroll();
  document.addEventListener('scroll', onScroll);
};

const init = () => {
  buildPage();
  initTheme();
  initTypewriter();
  initReveal();
  initParallax();
  initTilt();
  initMagnetic();
  initParticles();
  initScrollProgress();
  initSmoothScroll();
  initNavHighlight();
};

init();
