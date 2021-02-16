"use strict";
const burgerMenu = document.querySelector("#burger-menu");
const burgerMenuBtn = burgerMenu.querySelector("#burger-menu__btn") ? burgerMenu.querySelector("#burger-menu__btn"): "";
const burgerMenuList = burgerMenu.querySelector("#burger-menu__list");

burgerMenuBtn.addEventListener("click", () => {
    burgerMenuList.classList.toggle("active");
});

