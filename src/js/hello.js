/*const header = document.querySelector('header')
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener("click", () => {
    header.classList.toggle("hamburger-open");
}) */

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-open");
    mobileMenu.classList.toggle("open");
} )

document.querySelectorAll(".menuItem").forEach(n => 
    n.addEventListener("click", () => {
        hamburger.classList.remove("hamburger-open");
        mobileMenu.classList.remove("open");
    }))