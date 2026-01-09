const initProjectsSearch = () => {
  const page = document.querySelector('.projects-page');
  if (!page) return;

  const searchInput = document.querySelector('.projects-search input');
  const filterButtons = document.querySelectorAll('.filter-pill');
  const cards = Array.from(document.querySelectorAll('.project-card'));
  if (!cards.length) return;

  let activeFilter = 'All Projects';

  const normalize = (value) => value.toLowerCase().trim();

  const getCardText = (card) => {
    const title = card.querySelector('h3')?.textContent || '';
    const description = card.querySelector('p')?.textContent || '';
    const tags = Array.from(card.querySelectorAll('.project-tags span, .project-pill'))
      .map((el) => el.textContent)
      .join(' ');
    return normalize(`${title} ${description} ${tags}`);
  };

  const applyFilters = () => {
    const query = normalize(searchInput?.value || '');
    const active = normalize(activeFilter);

    cards.forEach((card) => {
      const haystack = getCardText(card);
      const matchesQuery = !query || haystack.includes(query);
      const matchesFilter = active === 'all projects' || haystack.includes(active);
      card.style.display = matchesQuery && matchesFilter ? '' : 'none';
    });
  };

  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((item) => item.classList.remove('is-active'));
      btn.classList.add('is-active');
      activeFilter = btn.textContent.trim();
      applyFilters();
    });
  });

  applyFilters();
};

initProjectsSearch();
