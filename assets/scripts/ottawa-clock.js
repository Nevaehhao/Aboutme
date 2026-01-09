const initOttawaClock = () => {
  const timeEl = document.querySelector('[data-ottawa-time]');
  const dateEl = document.querySelector('[data-ottawa-date]');
  if (!timeEl && !dateEl) return;

  const timeFormatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Toronto',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  });
  const dateFormatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Toronto',
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  const update = () => {
    const now = new Date();
    if (timeEl) timeEl.textContent = timeFormatter.format(now);
    if (dateEl) dateEl.textContent = dateFormatter.format(now);
  };

  update();
  setInterval(update, 1000);
};

initOttawaClock();
