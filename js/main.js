var elHeader = document.querySelector(".header")
var elBurgerBtn = document.querySelector(".header__btn")


elBurgerBtn.addEventListener("click", () => {
    elHeader.classList.toggle("header--active")
}) 
