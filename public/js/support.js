const menu = document.querySelector(".btnList")

function btnShow() {
    menu.classList.toggle("show")
}

window.onclick = ({target}) => {
    if(!target.matches('.btn')) {
        if(menu.classList.contains("show")) {
            menu.classList.remove("show")
        }
    }
}

menu.addEventListener('click', event => event.stopPropagation())