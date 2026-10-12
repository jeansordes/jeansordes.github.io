// Links keep working without JavaScript; the floating player loads on demand.
(() => {
  const dialog = document.querySelector('[data-video-dialog]');
  const player = document.querySelector('[data-video-player]');
  const title = document.querySelector('#video-dialog-title');
  const external = document.querySelector('[data-video-external]');
  if (!dialog?.showModal || !player || !title || !external) return;
  let previousOverflow;
  let trigger;

  for (const link of document.querySelectorAll('[data-video-play]')) {
    const id = link.dataset.videoId;
    const start = Number(link.dataset.videoStart);
    if (!/^[\w-]{11}$/.test(id ?? '') || !Number.isInteger(start) || start < 0) continue;
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      trigger = link;
      title.textContent = link.dataset.videoTitle;
      external.href = link.href;
      const frame = document.createElement('iframe');
      const url = new URL(`https://www.youtube-nocookie.com/embed/${id}`);
      url.searchParams.set('start', String(start));
      url.searchParams.set('autoplay', '1');
      url.searchParams.set('rel', '0');
      frame.src = url.href;
      frame.title = link.dataset.videoTitle;
      frame.allow = 'autoplay; encrypted-media; picture-in-picture; web-share';
      frame.allowFullscreen = true;
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      player.replaceChildren(frame);
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      dialog.showModal();
    });
  }
  document.querySelector('[data-video-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    player.replaceChildren(); // Stop playback on every close, including Escape.
    document.body.style.overflow = previousOverflow;
    trigger?.focus({ preventScroll: true });
  });
})();
