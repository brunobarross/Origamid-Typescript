"use strict";
//Selecione o link utilizando o método getElementById
const link = document.getElementById("origamid");
console.dir(link);
if (link instanceof HTMLAnchorElement) {
    link.href = link.href.replace("http", "https");
    console.log(link);
}
