const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  });

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});