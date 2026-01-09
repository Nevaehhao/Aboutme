const initCaseLightbox = () => {
  const targets = document.querySelectorAll(
    '.case-prototype__frame img, .case-image-block img, .case-overview-image img, .case-image-grid img'
  );
  if (!targets.length) return;

  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = '<img class="lightbox__image" alt="Expanded project visual" />';
  document.body.appendChild(lightbox);

  const image = lightbox.querySelector('.lightbox__image');

  const open = (src, alt) => {
    image.src = src;
    image.alt = alt || 'Expanded project visual';
    lightbox.classList.add('is-open');
  };

  const close = () => {
    lightbox.classList.remove('is-open');
    image.src = '';
  };

  targets.forEach((img) => {
    img.addEventListener('click', () => open(img.src, img.alt));
  });

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) close();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });
};

initCaseLightbox();
