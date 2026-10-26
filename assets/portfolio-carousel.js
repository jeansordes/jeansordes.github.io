// A manual carousel: native scrolling and project anchors work without this file.
(() => {
  const track = document.querySelector("[data-project-track]");
  if (!track) return;
  const slides = [...track.querySelectorAll("[data-project-slide]")];
  const selectors = [...document.querySelectorAll("[data-project-select]")];
  const previous = document.querySelector("[data-project-previous]");
  const next = document.querySelector("[data-project-next]");
  const counter = document.querySelector("[data-project-counter]");
  const controls = document.querySelector("[data-carousel-controls]");
  if (!slides.length || !previous || !next || !counter || !controls) return;

  let current = -1;
  let scrollTimer;
  const offset = (index) => slides[index].offsetLeft - slides[0].offsetLeft;
  const fitHeight = () => {
    if (current < 0) return;
    // Keep expanded native details fully visible, without reserving another slide's height.
    track.style.height = `${Math.ceil(slides[current].getBoundingClientRect().height) + 34}px`;
  };
  const select = (index) => {
    if (index === current) {
      fitHeight();
      return;
    }
    current = index;
    slides.forEach((slide, i) => {
      // Avoid keyboard focus landing in a project outside the visible viewport.
      slide.inert = i !== current;
    });
    selectors.forEach((link, i) => {
      if (i === current) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
    previous.disabled = current === 0;
    next.disabled = current === slides.length - 1;
    counter.textContent = window.siteI18n.text("Projet {current} sur {total} : {name}", { current: current + 1, total: slides.length, name: slides[current].querySelector("h3").textContent });
    fitHeight();
  };
  const goTo = (index) => {
    clearTimeout(scrollTimer);
    select(Math.max(0, Math.min(slides.length - 1, index)));
    track.scrollTo({ left: offset(current), behavior: "instant" });
  };
  const followScroll = () => {
    let nearest = 0;
    slides.forEach((_, i) => {
      if (
        Math.abs(track.scrollLeft - offset(i)) <
        Math.abs(track.scrollLeft - offset(nearest))
      )
        nearest = i;
    });
    select(nearest);
  };
  previous.addEventListener("click", () => goTo(current - 1));
  next.addEventListener("click", () => goTo(current + 1));
  selectors.forEach((link, i) =>
    link.addEventListener("click", (event) => {
      event.preventDefault();
      goTo(i);
    }),
  );
  track.addEventListener("keydown", (event) => {
    if (event.target !== track) return;
    const destinations = {
      ArrowLeft: current - 1,
      ArrowRight: current + 1,
      Home: 0,
      End: slides.length - 1,
    };
    if (!(event.key in destinations)) return;
    event.preventDefault();
    goTo(destinations[event.key]);
  });
  track.addEventListener(
    "scroll",
    () => {
      clearTimeout(scrollTimer);
      // Announce the settled project after a native swipe, rather than every scroll frame.
      scrollTimer = setTimeout(followScroll, 140);
    },
    { passive: true },
  );
  const realign = () => goTo(Math.max(current, 0));
  window.addEventListener("resize", realign);
  window.addEventListener("pageshow", () => {
    followScroll();
    fitHeight();
  });
  track.addEventListener("toggle", fitHeight, true);
  document.fonts?.ready.then(realign);
  if (window.ResizeObserver) {
    const observer = new ResizeObserver(fitHeight);
    slides.forEach((slide) => observer.observe(slide));
  }
  controls.hidden = false;
  select(0);
})();
