export function accordion(selector) {
  const buttons = Array.from(document.querySelectorAll(selector));
  if (!buttons || buttons.length == 0) return;
  buttons.forEach((item, index) => {
    item.addEventListener("click", (event) => {
      let panel = event.target.nextElementSibling;
      panel.classList.toggle("active");
      const isopen = panel.classList.contains("active");
      isopen
        ? sessionStorage.setItem("openat", index)
        : sessionStorage.removeItem("openat");
      event.target.setAttribute("aria-expanded", isopen);
      for (let i = 0; i < buttons.length; i++) {
        if (i != index) {
          buttons[i].setAttribute("aria-expanded", "false");
          let body = buttons[i].nextElementSibling;
          body.classList.remove("active");
        }
      }
    });
    item.addEventListener("keydown", (event) => {
      let nextind;
      if (event.key == "ArrowDown") {
        event.preventDefault();
        nextind = (index + 1) % buttons.length;
        buttons[nextind].focus();
      } else if (event.key == "ArrowUp") {
        event.preventDefault();
        if (index == 0) nextind = buttons.length - 1;
        else nextind = index - 1;
        buttons[nextind].focus();
      }else if(event.key=="Home"){
        event.preventDefault();
        buttons[0].focus();
      }else if(event.key=="End"){
        event.preventDefault();
        buttons[buttons.length-1].focus();
      }
    });
  });
}
