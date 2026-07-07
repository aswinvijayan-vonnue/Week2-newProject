import { fetchJSON } from "./utils.js";
const container=document.querySelector('.row');
const retryButton=document.querySelector('.retry-button');

function loadHome(){
    container.classList.add("fetching");

    fetchJSON("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=3")
    .then((response)=>{
        response.forEach(item => {
            const div=document.createElement("div");
            const h2=document.createElement("h2");
            const h3=document.createElement("h3");
            const ptag=document.createElement("p");
            div.classList.add("column");
            h2.textContent=item.title;
            h3.textContent="Content";
            ptag.textContent=item.body;
            div.appendChild(h2);
            div.appendChild(h3);
            div.appendChild(ptag);
            console.log(div);
            container.appendChild(div);
            
        });
        container.classList.remove("fetching");

    })
    .catch((err)=>{
        container.classList.remove("fetching");
        console.error(err);
        retryButton.classList.add('visible');

    });
    
}
loadHome();
retryButton.addEventListener('click',loadHome);