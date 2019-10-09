"use strict";
(function () {
    const burgerMenu = document.querySelector("#burger-menu");
    const burgerMenuBtn = burgerMenu.querySelector("#burger-menu__btn") ? burgerMenu.querySelector("#burger-menu__btn"): "";
    const burgerMenuList = burgerMenu.querySelector("#burger-menu__list");

    const galleryMain = document.querySelector("#gallery__main-img");
    const galleryList = document.querySelector("#gallery__list");

    burgerMenuBtn.addEventListener("click", () => {
        burgerMenuList.classList.toggle("active");
    });
    

    galleryList.addEventListener("click", (event)=> {
        let target = event.target;
        if (target.tagName === "IMG") {
            galleryMain.src = target.src;
            console.log(galleryMain.src);
        }
    });
})();