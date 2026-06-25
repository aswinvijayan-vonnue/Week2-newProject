const searchInput = document.getElementById("search");
const searchArea = document.querySelector(".services");
const notFound = document.querySelector("#not-found");
const oldinnerhtml = searchArea.innerHTML;
// console.log(oldinnerhtml);

// console.log(article3.textContent);
searchInput.addEventListener("keyup", (event) => {
  let current = searchInput.value.trim().toLowerCase();
  console.log(current);
  if (current === "") {
    searchArea.innerHTML = oldinnerhtml;
    notFound.classList.add("hide");
    return;
  }
  const re=new RegExp(`${current}`,"gi");
  console.log(re);
  let newtext=oldinnerhtml.replace(re,`<span>$&</span>`);
  console.log("After replacing",newtext);
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


});
