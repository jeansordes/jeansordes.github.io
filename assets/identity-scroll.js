// A small scroll Easter egg confined to the portrait sticker, away from CTAs.
(() => {
  const signature = document.querySelector("[data-scroll-name]");
  if (!signature) return;
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
    // Finish the whole loop while the portrait sticker crosses the viewport.
    // Six short phases: a stable name for 65%, then an expansion for 35%.
    const center =
      signature.getBoundingClientRect().top +
      signature.getBoundingClientRect().height / 2;
    const start = window.innerHeight * 0.85;
    const distance = Math.min(620, Math.max(240, start - 80));
    const progress = Math.max(0, Math.min(1, (start - center) / distance));
    const position = progress * (stages.length - 1);
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
  window.addEventListener("pageshow", remeasure);
  reducedMotion.addEventListener("change", scheduleUpdate);
  document.fonts?.ready.then(remeasure);
  if (window.ResizeObserver)
    new ResizeObserver(scheduleUpdate).observe(document.body);
  update();
})();
