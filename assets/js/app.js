(() => {
  const path = location.pathname.replace(/\/+$/,'');
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = (a.getAttribute('href') || '').replace(/\/+$/,'');
    if (!href) return;
    if (path === href || path.endsWith(href)) {
      a.style.background = 'rgba(255,255,255,.04)';
    }
  });
})();
