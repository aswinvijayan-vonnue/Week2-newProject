const nav = document.createElement("nav");
nav.classList.add("nav-bar");
nav.innerHTML = `
<ul>
<li><a href='#home'>Home</li>
<li> <a href='#about'>About</li>
<li> <a href='#contact'>Contact</li>
</ul>`;
document.body.appendChild(nav);