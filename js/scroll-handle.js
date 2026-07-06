window.addEventListener('DOMContentLoaded',()=>{
  const but = document.querySelector(".back-to-top");
console.log(but);
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  if (scrollTop >= 300) {
    but.classList.add("back-button");
  } else {
    but.classList.remove("back-button");
  }
});
but.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

})