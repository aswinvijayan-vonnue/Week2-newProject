export function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this.args);
    }, delay);
  };
}

export async function fetchJSON(url, options = {}) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP eror! status: ${response.status}`);
    }
    return await response.json();
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}

export function showToast(message, type, delay) {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.classList.add("toast-container");
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.textContent = `${type}:${message}`;
  setTimeout(() => {
    toast.classList.add("show");
  }, 100);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 100);
  }, delay);
}
