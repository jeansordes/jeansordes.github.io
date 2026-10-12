// Examples run locally; the real intervention and its checks are agreed per project.
(() => {
  const controls = document.querySelector("[data-recovery-controls]");
  const buttons = [...document.querySelectorAll("[data-recovery-choice]")];
  const examples = [...document.querySelectorAll("[data-recovery-example]")];
  if (controls && buttons.length && examples.length) {
    const select = (value) => {
      buttons.forEach((button) =>
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.recoveryChoice === value),
        ),
      );
      examples.forEach((example) => {
        example.hidden = example.dataset.recoveryExample !== value;
      });
    };
    buttons.forEach((button) =>
      button.addEventListener("click", () =>
        select(button.dataset.recoveryChoice),
      ),
    );
    select(buttons[0].dataset.recoveryChoice);
    controls.hidden = false;
  }

  const input = document.querySelector("[data-expander-input]");
  const status = document.querySelector("[data-expander-status]");
  if (!input || !status) return;
  input.addEventListener("input", (event) => {
    if (event.isComposing || input.selectionStart !== input.selectionEnd)
      return;
    const caret = input.selectionStart;
    const before = input.value.slice(0, caret);
    if (!/(^|\s)btw $/.test(before)) return;
    input.value =
      before.slice(0, -4) + "By the way " + input.value.slice(caret);
    input.setSelectionRange(caret + 7, caret + 7);
    status.textContent = "Raccourci remplacé : By the way.";
  });
})();
