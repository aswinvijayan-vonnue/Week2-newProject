export function darkMode(event) {
  const isPressed = this.getAttribute("aria-pressed");
  if (isPressed) {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("data-theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("data-theme", "dark");
  }
  this.setAttribute("aria-pressed", !isPressed);
}