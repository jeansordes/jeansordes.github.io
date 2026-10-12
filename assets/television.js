// The page stays local until a visitor chooses to load a YouTube player.
(() => {
  for (const button of document.querySelectorAll("[data-video-play]")) {
    const stage = button.closest("[data-video-stage]");
    const id = button.dataset.videoId;
    const start = Number(button.dataset.videoStart);
    if (
      !stage ||
      !/^[\w-]{11}$/.test(id ?? "") ||
      !Number.isInteger(start) ||
      start < 0
    )
      continue;

    button.hidden = false;
    button.addEventListener(
      "click",
      () => {
        const frame = document.createElement("iframe");
        const url = new URL(`https://www.youtube-nocookie.com/embed/${id}`);
        url.searchParams.set("start", String(start));
        url.searchParams.set("autoplay", "1");
        url.searchParams.set("rel", "0");
        frame.src = url.href;
        frame.title = button.dataset.videoTitle;
        frame.allow =
          "autoplay; encrypted-media; picture-in-picture; web-share";
        frame.allowFullscreen = true;
        frame.referrerPolicy = "strict-origin-when-cross-origin";
        stage.replaceChildren(frame);
        frame.focus({ preventScroll: true });
      },
      { once: true },
    );
  }
})();
