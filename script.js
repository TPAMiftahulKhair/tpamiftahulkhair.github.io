window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 0);
});

const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");
// const dropdownIcon = document.getElementById("dropdown-icon");
// const dropdownIconList = document.getElementById("dropdown-icon-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
})

// dropdownIcon.addEventListener("click", () => {
//     dropdownIconList.classList.toggle("open");
// })