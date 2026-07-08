import { accordion } from "./components/accordion.js";
import { init as darkModeInit } from "./components/darkMode.js";
import {init as navInit} from "./components/nav.js"
const idx=sessionStorage.getItem("openat");
console.log("index",idx);
if(idx){
    stayopen(idx);
}
function stayopen(index){
    const buttons=Array.from(document.querySelectorAll('.header-button'));
    buttons[index].setAttribute("aria-expanded","true");
    let panel=buttons[index].nextElementSibling;
    panel.classList.add("active");
}
window.addEventListener('DOMContentLoaded',()=>{
    accordion(".header-button");
    darkModeInit();
    navInit();
})
