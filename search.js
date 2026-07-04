const searchInput = document.getElementById("search");
const searchArea = document.querySelector(".services");
const notFound = document.querySelector("#not-found");
const oldinnerhtml = searchArea.innerHTML;
let timer;
// console.log(oldinnerhtml);

// console.log(article3.textContent);
// const state={
//   content:window.location.href
// };
const state={
  content:"http://127.0.0.1:5500/services.html"
};
searchInput.addEventListener("keyup", (event) => {
  clearTimeout(timer);
  timer=setTimeout(()=>{
    let current = searchInput.value.trim().toLowerCase();
  console.log(current);
  if (current === "") {
    searchArea.innerHTML = oldinnerhtml;
    notFound.classList.add("hide");
    return;
  }
  history.pushState(state,"Service Page",`?q=${current}`);
  searchOutput(current);
  

  },300);

});
function searchOutput(current){
  const re=new RegExp(`${current}`,"gi");
  console.log(re);
  let newtext=oldinnerhtml.replace(re,`<span>$&</span>`);
  // console.log("After replacing",newtext);
  searchArea.innerHTML=newtext;
  const servicecards = document.querySelectorAll(".services article");
  let count=0;
  servicecards.forEach((article)=>{
    if(article.textContent.toLowerCase().includes(current)){
        article.classList.remove("hide");
        count++;
    }else{
        console.log("Not found");
        article.classList.add("hide");
        console.log(article);
    }
  });
  if(count==0){
    notFound.classList.remove("hide");
  }else{
    notFound.classList.add("hide");
  }
}

window.addEventListener('popstate',(event)=>{
  if(event.state){
    console.log("Navigating to",event.state);
    const url=new URL(window.location);
    const urlParams = url.searchParams.get('q');
    console.log(urlParams);
    console.log(searchInput);
    searchInput.value=urlParams;
    searchOutput(urlParams);
  }else{
    searchArea.innerHTML = oldinnerhtml;
    searchInput.value="";
  }
});
// history.back();

