const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const navItems = document.querySelectorAll('.nav-item');


open.addEventListener("click", () => {
    container.classList.add("show-nav")
})

close.addEventListener("click", () => {
    container.classList.remove("show-nav")
})

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        container.classList.remove('show-nav')
    })
})