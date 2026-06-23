console.log("hi");
let hamButton = document.getElementsByClassName("hamburger-button")[0];
let imageIcon=document.getElementById("hamburger-icon");
const navbar = document.getElementsByClassName("nav-drawer")[0];
console.log(hamButton);
function opening() {
  console.log("here");
  if (navbar.ariaExpanded === "true") {
    navbar.classList.remove("open");
    navbar.ariaExpanded = "false";
    document.body.style.overflow = "visible";
  } else {
    navbar.classList.add("open");
    navbar.ariaExpanded = "true";
    document.body.style.overflow = "hidden";
  }
}
document.addEventListener("click", (event) => {
  const isopen = navbar.classList.contains("open");
  console.log(event.target);
  console.log(event.target);
  if (event.target!==hamButton && event.target!==imageIcon ) {
    console.log(event.target);
    navbar.classList.remove("open");
    navbar.ariaExpanded = "false";
    document.body.style.overflow = "visible";
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key == "Escape") {
    navbar.classList.remove("open");
    navbar.ariaExpanded = "false";
    document.body.style.overflow = "visible";
  }
});

const focusableElements=navbar.getElementsByTagName("a");
const first=focusableElements[0];
const last=focusableElements[focusableElements.length-1];
navbar.addEventListener("keydown", (event) =>{
    console.log(document.activeElement    );
    if(event.key!=="Tab") return;
    console.log("key is Tab");
    if(event.shiftKey){
        if(document.activeElement===first){
            last.focus();
            event.preventDefault();
        }

    }else{
        if(document.activeElement===last){
            first.focus();
            event.preventDefault();
        }
    }
})
console.log(focusableElements);
