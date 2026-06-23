const toggleElement=document.getElementById("checkbox");
toggleElement.addEventListener("click",function (event){
    if(this.ariaPressed==="true"){
        this.ariaPressed=false;
        document.documentElement.setAttribute("data-theme","light");
        localStorage.setItem("data-theme","light");
    }else{
        this.ariaPressed="true";
        document.documentElement.setAttribute("data-theme","dark");
        console.log("switched to dark");
        localStorage.setItem("data-theme","dark");
    }
});
window.onload=(event)=>{
    let theme=localStorage.getItem("data-theme");
    if(theme==="dark"){
        document.documentElement.setAttribute("data-theme","dark");
        toggleElement.setAttribute("ariaPressed","true");

    }else{
        document.documentElement.setAttribute("data-theme","light");
        toggleElement.setAttribute("ariaPressed","false");
    }
}
