// Preferences only affect language-neutral entry URLs. Localised URLs are shareable.
(() => {
  const config = window.siteLocales;
  if (!config) return;
  const supported = Object.keys(config.languages);
  const root = document.documentElement;
  const route = root.dataset.pageRoute || '';
  const key = 'jzs.language';
  const match = (language) => {
    const tag = String(language || '').toLowerCase().replaceAll('_', '-');
    return supported.find(code => code.toLowerCase() === tag) ||
      supported.find(code => code.toLowerCase() === tag.split('-')[0]);
  };
  const browserPreferred = () => {
    for (const language of navigator.languages || [navigator.language]) {
      const selected = match(language);
      if (selected) return selected;
    }
    return config.fallback;
  };
  const preferred = () => {
    let saved;
    try { saved = localStorage.getItem(key); } catch { /* Storage may be disabled. */ }
    return supported.includes(saved) ? saved : browserPreferred();
  };
  const destination = (language) => {
    const url = new URL(location.href);
    url.pathname = `/${language}/${route}`;
    return url.href;
  };
  window.siteI18n = {
    text(source, values = {}) {
      const message = config.languages[root.lang]?.[source] ?? config.languages[config.fallback]?.[source] ?? source;
      return message.replace(/\{(\w+)\}/g, (placeholder, name) => String(values[name] ?? placeholder));
    },
  };
  if (root.dataset.languageEntry === 'true') {
    location.replace(destination(preferred()));
    return;
  }
  const updateBrowserOption = () => {
    const language = browserPreferred();
    document.querySelectorAll('.language-options').forEach(options => {
      options.querySelectorAll('[data-browser-default]').forEach(link => {
        delete link.dataset.browserDefault;
        link.querySelector('.language-default-note')?.remove();
      });
      const link = options.querySelector(`[data-language="${language}"]`);
      const automatic = options.querySelector('[data-language="auto"]');
      if (!link || !automatic) return;
      link.dataset.browserDefault = 'true';
      const note = document.createElement('span');
      note.className = 'language-default-note';
      note.lang = root.lang;
      note.textContent = ` — ${window.siteI18n.text('Langue du navigateur')}`;
      link.append(note);
      // Keep the automatic action available without JS, but merge it here.
      automatic.hidden = true;
    });
  };
  document.addEventListener('DOMContentLoaded', updateBrowserOption);
  window.addEventListener('languagechange', updateBrowserOption);
  document.addEventListener('click', (event) => {
    document.querySelectorAll('.language-dropdown[open]').forEach(menu => {
      if (!menu.contains(event.target)) menu.open = false;
    });
    const link = event.target.closest('a[data-language]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
    const language = link.hasAttribute('data-browser-default') ? 'auto' : link.dataset.language;
    if (language !== 'auto' && !supported.includes(language)) return;
    try {
      if (language === 'auto') localStorage.removeItem(key);
      else localStorage.setItem(key, language);
    } catch { /* Explicit locale URLs still work without storage. */ }
    event.preventDefault();
    location.assign(destination(language === 'auto' ? browserPreferred() : language));
  });
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    document.querySelectorAll('.language-dropdown[open]').forEach(menu => {
      const focusInside = menu.contains(document.activeElement);
      menu.open = false;
      if (focusInside) menu.querySelector('summary').focus();
    });
  });
  document.addEventListener('focusin', (event) => {
    document.querySelectorAll('.language-dropdown[open]').forEach(menu => {
      if (!menu.contains(event.target)) menu.open = false;
    });
  });
})();
