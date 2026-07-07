import { fetchJSON } from "./utils.js";
const services = document.querySelector(".services");
const retryButton=document.querySelector('.retry-button');
function servicesLoading() {
    services.classList.add("fetching");
  fetchJSON("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      let posts = response.slice(0, 20);
      let p1 = posts[0];
      console.log(p1.title);
      console.log(posts);
      for (let post of posts) {
        const mainArticle = document.createElement("article");
        const h2 = document.createElement("h2");
        const ptag = document.createElement("p");
        h2.textContent = post.title;
        ptag.textContent = post.body;
        mainArticle.appendChild(h2);
        mainArticle.appendChild(ptag);
        services.appendChild(mainArticle);
      }
      services.classList.remove("fetching");
    })
    .catch((err) => {
        console.error(err);
        services.classList.remove("fetching");
        retryButton.classList.add('visible');

    });
}
retryButton.addEventListener('click',servicesLoading);
servicesLoading();