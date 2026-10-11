// A decorative signature; the accessible name and page content stay stable.
(() => {
  const signature = document.querySelector("[data-scroll-name]");
  if (!signature) return;
  const ribbon = signature.closest(".identity-ribbon");
  const header = document.querySelector(".site-header");

  const names = [
    "Jean",
    "Jean Z. Sordes",
    "Jean Zacharie Sordes",
    "JZS",
    "Jean Zacharie Sordes",
    "Jean Z. Sordes",
    "Jean",
  ];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let scheduled = false;
  let animation;

  const update = () => {
    scheduled = false;
    // Take over only after the regular header leaves the viewport.
    // This keeps the first view compact and its booking button visible.
    ribbon?.classList.toggle(
      "is-visible",
      header ? header.getBoundingClientRect().bottom <= 0 : window.scrollY > 60,
    );
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress =
      scrollable > 0
        ? Math.max(0, Math.min(1, window.scrollY / scrollable))
        : 0;
    const name = reducedMotion.matches
      ? "Jean Z. Sordes"
      : names[Math.round(progress * (names.length - 1))];

    if (reducedMotion.matches) animation?.cancel();
    if (signature.textContent === name) return;
    animation?.cancel();
    signature.textContent = name;
    // No continuous animation: a brief entrance only when the name changes.
    if (!reducedMotion.matches && signature.animate) {
      animation = signature.animate(
        [
          { opacity: 0.35, transform: "translateY(5px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        { duration: 220, easing: "ease-out" },
      );
    }
  };

  const scheduleUpdate = () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(update);
  };

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  window.addEventListener("pageshow", scheduleUpdate);
  reducedMotion.addEventListener("change", scheduleUpdate);
  // Opening the gallery or FAQ changes the document's scrollable distance.
  if (window.ResizeObserver) {
    new ResizeObserver(scheduleUpdate).observe(document.body);
  }
  update();
})();
