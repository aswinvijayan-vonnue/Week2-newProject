const toggleElement=document.getElementById("checkbox");
toggleElement.addEventListener("click",function (event){
    if(this.getAttribute("aria-pressed")==="true"){
        this.setAttribute("aria-pressed","false");
        document.documentElement.setAttribute("data-theme","light");
        localStorage.setItem("data-theme","light");
    }else{
        this.setAttribute("aria-pressed","true");
        document.documentElement.setAttribute("data-theme","dark");
        console.log("switched to dark");
        localStorage.setItem("data-theme","dark");
    }
});
window.addEventListener('DOMContentLoaded',()=>{
    let theme=localStorage.getItem("data-theme");
    if(theme==="dark"){
        document.documentElement.setAttribute("data-theme","dark");
        toggleElement.setAttribute("aria-pressed","true");

    }else{
        document.documentElement.setAttribute("data-theme","light");
        toggleElement.setAttribute("aria-pressed","false");
    }
})
