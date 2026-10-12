// A small scroll Easter egg confined to the portrait sticker, away from CTAs.
(() => {
  const signature = document.querySelector("[data-scroll-name]");
  if (!signature) return;
  const header = document.querySelector("[data-section-header]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const fragments = ["ean", " ", "Z", ".", "acharie", " ", "S", "ordes", ".fr"];
  const domain = [0, 0, 1, 0, 0, 0, 1, 0, 1];
  const full = [1, 1, 1, 0, 1, 1, 1, 1, 0];
  const abbreviated = [1, 1, 1, 1, 0, 1, 1, 1, 0];
  const jean = [1, 0, 0, 0, 0, 0, 0, 0, 0];
  const stages = [domain, full, abbreviated, jean, abbreviated, full, domain];
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
  signature.replaceChildren(initial, ...parts);
  let widths = [];
  let measureNeeded = true;
  let scheduled = false;

  const update = () => {
    scheduled = false;
    if (measureNeeded) {
      // Layout widths, not transformed bounding boxes: the sticker is rotated.
      widths = parts.map((part) =>
        parseFloat(getComputedStyle(part.firstElementChild).width),
      );
      const initialWidth = parseFloat(getComputedStyle(initial).width);
      // Reserve the widest name so the sticker and surrounding text stay still.
      signature.style.width = `${initialWidth + widths.reduce((sum, width, i) => sum + width * full[i], 0) + 1}px`;
      measureNeeded = false;
    }
    // Use the sticker's fully visible journey, including mobile browser chrome.
    // No fixed scroll distance: the entire loop fits the available screen.
    const bounds = signature.closest(".about-sticker").getBoundingClientRect();
    const viewport = window.visualViewport;
    const viewportTop = viewport?.offsetTop ?? 0;
    const viewportHeight = viewport?.height ?? window.innerHeight;
    const visibleTop = Math.max(
      viewportTop,
      header?.getBoundingClientRect().bottom ?? viewportTop,
    );
    const margin = Math.min(24, viewportHeight * 0.04);
    const center = bounds.top + bounds.height / 2;
    const start = viewportTop + viewportHeight - margin - bounds.height / 2;
    // Complete the loop before the sticker reaches the persistent navigation.
    const end = visibleTop + margin + bounds.height / 2;
    const distance = Math.max(1, start - end);
    const progress = Math.max(0, Math.min(1, (start - center) / distance));
    // Add a final pause so JZS.fr is readable before the sticker leaves.
    const position = progress * (stages.length - 1 + 0.65);
    const step = Math.min(Math.floor(position), stages.length - 2);
    const phase = Math.max(0, Math.min(1, (position - step - 0.65) / 0.35));
    const blend = phase * phase * (3 - 2 * phase);
    parts.forEach((part, index) => {
      const amount = reducedMotion.matches
        ? domain[index]
        : stages[step][index] +
          (stages[step + 1][index] - stages[step][index]) * blend;
      part.style.width = `${widths[index] * amount}px`;
      // Never expose clipped or squeezed letters during a transition.
      part.firstElementChild.style.visibility =
        amount >= 0.999 ? "visible" : "hidden";
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
  window.visualViewport?.addEventListener("resize", scheduleUpdate);
  window.visualViewport?.addEventListener("scroll", scheduleUpdate);
  window.addEventListener("pageshow", remeasure);
  reducedMotion.addEventListener("change", scheduleUpdate);
  document.fonts?.ready.then(remeasure);
  if (window.ResizeObserver)
    new ResizeObserver(scheduleUpdate).observe(document.body);
  update();
})();
