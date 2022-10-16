const menu = document.querySelector(".menu")
const nav = document.querySelector("nav")
const closed = document.querySelector(".close")


menu.addEventListener("click", openMenu)
closed.addEventListener("click", closeMenu)

function openMenu() {
    nav.classList.add("active")
}

function closeMenu() {
    nav.classList.remove("active")
}