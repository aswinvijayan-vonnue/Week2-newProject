export function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
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

export function showToast(message, type) {
  try{
    let container = document.querySelector(".toast-container");
  console.log(container);
  const toast = document.createElement("div");
  toast.textContent = `${type}:${message}`;
  console.log(toast);
  // container.appendChild(toast);
  console.log(container);
  let className=type=="success"? "show-success" : "show-error";
  container.appendChild(toast);
  toast.classList.add(className);
  console.log(container);
  setTimeout(()=>{
    toast.remove();
  },1000);
}
  catch(err){
    console.error(err);
  }
}
