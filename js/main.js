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
    performance.mark('start');
    accordion(".header-button");
    darkModeInit();
    navInit();
    performance.mark("end");
    performance.measure('duration','start','end');
    const entries=performance.getEntriesByName("duration");
    const duration=entries[0];
    console.log("Init functions duration is: ",duration.duration.toFixed(3));
    // console.log("Init function call",duration);
})

const connection=navigator.connection;
console.log(connection);
const isSlow=['slow-2g','2g','3g'].includes(connection.effectiveType);
const autoPlays=document.querySelectorAll('video[autoplay]');
if(isSlow){
    console.log("Network connectivity is slow");
    document.addEventListener('animationstart',(e)=>{
        const animations=e.target.getAnimations();
        animations.forEach(animation => {
            animation.cancel();
            
        });
    })
    autoPlays.forEach((video)=>video.removeAttribute('autoplay'));

}
