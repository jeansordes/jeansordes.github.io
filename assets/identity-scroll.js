// Keep the letters in place and expand or fold the rest of the name on scroll.
(() => {
  const signature = document.querySelector("[data-scroll-name]");
  if (!signature) return;
  const ribbon = signature.closest(".identity-ribbon");
  const header = document.querySelector(".site-header");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const fragments = ["ean", " ", "Z", ".", "acharie", " ", "S", "ordes"];
  const jean = [1, 0, 0, 0, 0, 0, 0, 0];
  const abbreviated = [1, 1, 1, 1, 0, 1, 1, 1];
  const full = [1, 1, 1, 0, 1, 1, 1, 1];
  const initials = [0, 0, 1, 0, 0, 0, 1, 0];
  const stages = [jean, abbreviated, full, initials, full, abbreviated, jean];

  const initial = document.createElement("span");
  initial.textContent = "J";
  const parts = fragments.map((text, index) => {
    const part = document.createElement("span");
    part.className = "identity-name-part";
    part.dataset.namePart = String(index);
    const letters = document.createElement("span");
    letters.textContent = text;
    part.append(letters);
    return part;
  });
  // Build once: scrolling only changes widths, never replaces the letters.
  signature.replaceChildren(initial, ...parts);
  let widths = [];
  let measureNeeded = true;
  let scheduled = false;

  const update = () => {
    scheduled = false;
    ribbon?.classList.toggle(
      "is-visible",
      header ? header.getBoundingClientRect().bottom <= 0 : window.scrollY > 60,
    );

    if (measureNeeded) {
      widths = parts.map(
        (part) => part.firstElementChild.getBoundingClientRect().width,
      );
      measureNeeded = false;
    }
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress =
      scrollable > 0
        ? Math.max(0, Math.min(1, window.scrollY / scrollable))
        : 0;
    const position = progress * (stages.length - 1);
    const step = Math.min(Math.floor(position), stages.length - 2);
    const fraction = position - step;
    const blend = fraction * fraction * (3 - 2 * fraction);
    parts.forEach((part, index) => {
      const amount = reducedMotion.matches
        ? abbreviated[index]
        : stages[step][index] +
          (stages[step + 1][index] - stages[step][index]) * blend;
      part.style.width = `${widths[index] * amount}px`;
    });
  };

  const scheduleUpdate = () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(update);
  };
  const remeasure = () => {
    measureNeeded = true;
    scheduleUpdate();
  };
  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", remeasure);
  window.addEventListener("pageshow", remeasure);
  reducedMotion.addEventListener("change", scheduleUpdate);
  document.fonts?.ready.then(remeasure);
  if (window.ResizeObserver) {
    new ResizeObserver(scheduleUpdate).observe(document.body);
  }
  update();
})();
