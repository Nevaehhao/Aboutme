const initProjectsSearch = () => {
  const page = document.querySelector('.projects-page');
  if (!page) return;

  const searchInput = document.querySelector('.projects-search input');
  const filterButtons = document.querySelectorAll('.filter-pill');
  const cards = Array.from(document.querySelectorAll('.project-card'));
  if (!cards.length) return;

  const normalize = (value) => value.toLowerCase().trim();
  const defaultFilter = page.dataset.defaultFilter?.trim() || 'All Projects';
  let activeFilter = defaultFilter;

  const getFilterValue = (button) => button.dataset.filter?.trim() || button.textContent.trim();

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
      const matchesFilter =
        active === 'all projects' || active === 'all internships' || haystack.includes(active);
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
      activeFilter = getFilterValue(btn);
      const isShowAll =
        normalize(activeFilter) === 'all projects' || normalize(activeFilter) === 'all internships';
      if (isShowAll && searchInput) {
        searchInput.value = '';
      }
      applyFilters();
    });
  });

  const activeButton = Array.from(filterButtons).find(
    (btn) => normalize(getFilterValue(btn)) === normalize(defaultFilter)
  );

  if (activeButton) {
    filterButtons.forEach((btn) => btn.classList.remove('is-active'));
    activeButton.classList.add('is-active');
  }

  applyFilters();
};

initProjectsSearch();
