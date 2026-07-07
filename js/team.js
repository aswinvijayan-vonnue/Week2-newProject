import { fetchJSON } from "./utils.js";
const mainSection = document.querySelector(".main-section");
const retryButton=document.querySelector('.retry-button');
function loadTeamPage() {
  mainSection.classList.add("fetching");
  fetchJSON("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      const developerSection = document.querySelector(".developer");
      const testerSection = document.querySelector(".qa");
      response.forEach((member, index) => {
        const figure = document.createElement("figure");
        const figcaption = document.createElement("figcaption");
        const h3 = document.createElement("h3");
        h3.textContent = member.name;
        const role = document.createElement("p");
        role.textContent = index < 5 ? "Developer" : "QA";
        const desc = document.createElement("p");
        desc.textContent = member.company.catchPhrase;
        figcaption.appendChild(h3);
        figcaption.appendChild(role);
        figcaption.appendChild(desc);
        figure.appendChild(figcaption);
        console.log(figure);
        index < 5
          ? developerSection.appendChild(figure)
          : testerSection.appendChild(figure);
        // developerSection.appendChild(figure);
      });
      mainSection.classList.remove("fetching");
    })
    .catch((err) => {console.error(err);
        mainSection.classList.remove("fetching");
        retryButton.classList.add('visible');
    });
}
loadTeamPage();
retryButton.addEventListener('click',loadTeamPage);