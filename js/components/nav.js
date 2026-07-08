export function init() {
  const nav = document.querySelector("nav");
  console.log("hi", nav);
  //   nav.classList.add("nav-bar");
  nav.innerHTML = `<a href='./index.html'>Home</a>
<a href='./about.html'>About</a>
<a href='./contact.html'>Contact</a>
<a href='./services.html'>Services</a>
<a href='./team.html'>Team</a>
<a href='./gallery.html'>Gallery </a>
<a href='./blog.html'>Blogs </a>
 `;
}
