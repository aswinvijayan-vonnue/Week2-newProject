export function accordion(selector) {
  const buttons = document.querySelectorAll(selector);
  if (!buttons || buttons.length == 0) return;
  buttons.forEach((item, index) => {
    item.addEventListener("click", (event) => {
      let panel = this.nextElementSibling;
      panel.classList.toggle("active");
      const isopen = panel.classList.contains("active");
      this.parentElement.setAttribute("aria-expanded", isopen);
      for (let i = 0; i < buttons.length; i++) {
        if (i != index) {
          buttons[i].parentElement.setAttribute("aria-expanded", "false");
          let body = buttons[i].nextElementSibling;
          body.classList.remove("active");
        }
      }
    });
  });
}
