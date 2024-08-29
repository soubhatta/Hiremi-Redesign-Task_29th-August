const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")
const header = document.querySelector("header")

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active")
    menu.classList.toggle("active")
    header.classList.toggle("active")
})
