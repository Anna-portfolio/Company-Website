let navMenu = document.getElementById("nav-menu");
let burger = document.getElementById("burger");

function burgerMenu() {
        navMenu.classList.toggle("nav-menu-small-active");
        navMenu.classList.add("nav-menu-small");
        burger.classList.toggle("toX");
}
navMenu.classList.remove("nav-menu-small");
burger.classList.remove("toX");
