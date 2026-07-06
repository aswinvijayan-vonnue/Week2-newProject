const nav = document.createElement("nav");
nav.classList.add("nav-bar");
nav.innerHTML = `
<a href='#home'>Home</a>
<a href='#about'>About</a>
<a href='#contact'>Contact</a>
`;
document.body.appendChild(nav);