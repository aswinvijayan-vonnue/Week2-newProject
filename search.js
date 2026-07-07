import { fetchJSON } from "./js/utils.js";
const searchInput = document.getElementById("search");
let searchArea=document.querySelector(".services");
let oldinnerhtml="";
const notFound = document.querySelector("#not-found");
let timer;
async function initializing(){
  try{
    searchArea=await loadContent();
    console.log("hlooiii",searchArea);
    console.log("Total articles loaded:", searchArea.children.length);
    oldinnerhtml=searchArea.innerHTML;

  }catch(err){
    console.error(err);
  }
}
initializing();
function loadContent(){
  return fetchJSON("https://jsonplaceholder.typicode.com/posts")
  .then((response)=>{
    let services=document.querySelector(".services");
      let posts=response.slice(0,20);
      let p1=posts[0];
      console.log(p1.title);
       console.log(posts);
      for(let post of posts){
          const mainArticle=document.createElement('article');
          const h2=document.createElement('h2');
          const ptag=document.createElement('p');
          h2.textContent=post.title;
          ptag.textContent=post.body;
          mainArticle.appendChild(h2);
          mainArticle.appendChild(ptag);
          services.appendChild(mainArticle);
      }
      return services;
  })
  .catch((err)=>console.error(err));
}
const state = {
  content: "http://127.0.0.1:5500/services.html",
};
searchInput.addEventListener("keyup", (event) => {
  console.log("heloooo",searchArea);
  clearTimeout(timer);
  console.log("this is the search area", searchArea);
  timer = setTimeout(() => {
    let current = searchInput.value.trim().toLowerCase();
    console.log(current);
    if (current === "") {
      searchArea.innerHTML = oldinnerhtml;
      notFound.classList.add("hide");
      return;
    }
    history.pushState(state, "Service Page", `?q=${current}`);
    searchOutput(current);
  }, 300);
});
function searchOutput(current) {
  console.log("in searchOutput");
  const re = new RegExp(`${current}`, "gi");
  console.log(re);
  let newtext = oldinnerhtml.replace(re, `<span>$&</span>`);
  // console.log("After replacing",newtext);
  searchArea.innerHTML = newtext;
  const servicecards = document.querySelectorAll(".services article");
  let count = 0;
  servicecards.forEach((article) => {
    if (article.textContent.toLowerCase().includes(current)) {
      article.classList.remove("hide");
      count++;
    } else {
      console.log("Not found");
      article.classList.add("hide");
      console.log(article);
    }
  });
  if (count == 0) {
    notFound.classList.remove("hide");
  } else {
    notFound.classList.add("hide");
  }
}

window.addEventListener("popstate", (event) => {
  if (event.state) {
    console.log("Navigating to", event.state);
    handlePageLoad();
  } else {
    searchArea.innerHTML = oldinnerhtml;
    searchInput.value = "";
  }
});
function handlePageLoad() {
  console.log("in page load");
  const url = new URL(window.location);
  const urlParams = url.searchParams.get("q");
  console.log(urlParams);
  console.log(searchInput);
  if(!urlParams) return;
  searchInput.value = urlParams;
  searchOutput(urlParams);
}
handlePageLoad();
// history.back();
