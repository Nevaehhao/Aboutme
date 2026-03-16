const initCaseSectionNav = () => {
  const nav = document.querySelector('[data-case-nav]');
  if (!nav) return;

  const items = Array.from(nav.querySelectorAll('[data-case-nav-link]'))
    .map((link) => {
      const href = link.getAttribute('href') || '';
      const id = href.startsWith('#') ? href.slice(1) : '';
      const section = id ? document.getElementById(id) : null;

      if (!id || !section) return null;

      return { id, link, section };
    })
    .filter(Boolean);

  if (!items.length) return;

  const setActive = (id) => {
    items.forEach((item) => {
      const isActive = item.id === id;
      item.link.classList.toggle('is-active', isActive);

      if (isActive) {
        item.link.setAttribute('aria-current', 'true');
      } else {
        item.link.removeAttribute('aria-current');
      }
    });
  };

  const getOffset = () => (window.innerWidth > 1100 ? 110 : 92);

  const updateActiveSection = () => {
    const threshold = window.scrollY + getOffset() + 30;
    let activeId = items[0].id;

    items.forEach((item) => {
      if (threshold >= item.section.offsetTop) {
        activeId = item.id;
      }
    });

    const nearBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
    if (nearBottom) {
      activeId = items[items.length - 1].id;
    }

    setActive(activeId);
  };

  items.forEach((item) => {
    item.link.addEventListener('click', (event) => {
      event.preventDefault();

      const top = item.section.getBoundingClientRect().top + window.scrollY - getOffset();
      window.scrollTo({ top, behavior: 'smooth' });
      setActive(item.id);
    });
  });

  updateActiveSection();
  window.addEventListener('scroll', updateActiveSection, { passive: true });
  window.addEventListener('resize', updateActiveSection);
};

initCaseSectionNav();
