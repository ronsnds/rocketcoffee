const menuHamburguer = document.getElementById("menu-hamburguer");

const menuBuguerOpen = document.getElementById("menu-buguer-open");
const menuBuguerClose = document.getElementById("menu-buguer-close");

let count = 0;

function closeMenu() {
    menuBuguerOpen.classList.remove("invisible");
    menuBuguerClose.classList.add("invisible");

    document.getElementById('menu-list').style.display = 'none'
    document.querySelector('main').style.display = 'block'

    count = 0;
}

function openMenu() {
    menuBuguerOpen.classList.add("invisible");
    menuBuguerClose.classList.remove("invisible");

    document.getElementById('menu-list').style.display = 'flex'
    document.querySelector('main').style.display = 'none'

    count++;
}

menuHamburguer.addEventListener("click", () => {
    if (count == 0) {
        openMenu();
    } else {
        closeMenu();
    }
});
