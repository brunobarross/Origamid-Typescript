"use strict";
// Estado dos elementos
// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button
// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em butto
const btnMenu = document.getElementById("btn-mobile");
function handleClick(event) {
    const button = event.currentTarget;
    const navElement = document.getElementById("nav");
    if (button instanceof HTMLElement && navElement) {
        const active = navElement.classList.contains("active");
        if (active) {
            navElement.classList.remove("active");
            button?.setAttribute("aria-expanded", "false");
            button?.setAttribute("aria-label", "Abrir Menu");
        }
        else {
            navElement.classList.add("active");
            button?.setAttribute("aria-expanded", "true");
            button?.setAttribute("aria-label", "Fechar Menu");
        }
    }
}
btnMenu?.addEventListener("pointerdown", handleClick);
