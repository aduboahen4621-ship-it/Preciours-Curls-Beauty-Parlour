// MOBILE MENU
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
menu.addEventListener("click", function () {
    nav.classList.toggle("open");
});
// CLOSE MENU AFTER CLICKING A LINK
nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("open");
    });
});
// AUTOMATIC COPYRIGHT YEAR
document.getElementById("year").textContent =
    new Date().getFullYear();
