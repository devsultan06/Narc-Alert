const menu = document.querySelector("#menu-bar");
const navbar = document.querySelector(".links");

menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
});

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");


}