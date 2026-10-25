// Progressive enhancement: every project and link is already in the HTML.
(() => {
  const controls = document.querySelector('.catalog-controls');
  const input = document.querySelector('#project-search');
  const cards = [...document.querySelectorAll('[data-project]')];
  if (!controls || !input || !cards.length) return;
  const buttons = [...document.querySelectorAll('[data-category-filter]')];
  const result = document.querySelector('#result-count');
  const empty = document.querySelector('.empty-results');
  const reset = controls.querySelector('[data-reset]');
  const normalize = (text) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('fr').trim();
  const searchable = cards.map(card => normalize(card.textContent));
  let category = '';
  function update() {
    const terms = normalize(input.value).split(/\s+/).filter(Boolean);
    let count = 0;
    cards.forEach((card, index) => {
      const match = (!category || card.dataset.category === category) && terms.every(term => searchable[index].includes(term));
      card.hidden = !match;
      if (match) count++;
    });
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.categoryFilter === category)));
    result.textContent = `${count} projet${count === 1 ? '' : 's'} à explorer`;
    empty.hidden = count > 0;
    reset.hidden = !category && !input.value;
  }
  input.addEventListener('input', update);
  buttons.forEach(button => button.addEventListener('click', () => {
    category = button.dataset.categoryFilter;
    update();
  }));
  document.querySelectorAll('[data-reset]').forEach(button => button.addEventListener('click', () => {
    category = '';
    input.value = '';
    update();
    input.focus();
  }));
  controls.hidden = false;
  update();
})();
