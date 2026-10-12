// Anchor links remain native; JavaScript only adds the current-section marker.
(() => {
  const header = document.querySelector("[data-section-header]");
  const regions = [...document.querySelectorAll("[data-page-section]")];
  const links = [...document.querySelectorAll("[data-section-link]")];
  const position = document.querySelector("[data-nav-position]");
  const label = document.querySelector("[data-section-label]");
  if (!header || !regions.length || !label) return;

  let scheduled = false;
  let current;
  position.hidden = false;

  const update = () => {
    scheduled = false;
    const headerHeight = header.getBoundingClientRect().height;
    document.documentElement.style.setProperty(
      "--header-offset",
      `${Math.ceil(headerHeight) + 20}px`,
    );
    // Follow the content just below the sticky header, including expanded details.
    const readingLine =
      headerHeight +
      Math.min(80, Math.max(0, (window.innerHeight - headerHeight) * 0.2));
    let region = regions[0];
    for (const candidate of regions) {
      if (candidate.getBoundingClientRect().top <= readingLine)
        region = candidate;
      else break;
    }
    const id = region.dataset.pageSection;
    if (id === current) return;
    current = id;
    label.textContent = region.dataset.sectionTitle;
    for (const link of links) {
      if (link.hash === `#${id}`) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    }
  };
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(update);
  };
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  window.addEventListener("pageshow", schedule);
  // Native details can change the current region without a scroll event.
  document.addEventListener("toggle", schedule, true);
  document.fonts?.ready.then(schedule);
  if (window.ResizeObserver) {
    const observer = new ResizeObserver(schedule);
    observer.observe(header);
    observer.observe(document.body);
  }
  update();
})();
