"use strict";
// const button =  document.querySelector('button');
// //PointerEvent foi criado pra definir qualquer tipo de evento onde existe um toquen na tela
// function handleClick(event: PointerEvent){
//   console.log(event.pageX)
// }
// button?.addEventListener('pointerdown', handleClick)
// function handleScrol(event: Event){
//   console.log(event)
// }
// window.addEventListener('scroll', handleScrol)
// // Uso do event com instance Of
// //EXEMPLO: usar pra ver se é touch ou clique
// function ativarMenu(event: Event){
//   if(event instanceof MouseEvent){
//     console.log(event.pageX)
//   }
//   if(event instanceof TouchEvent){
//     console.log(event.touches[0].pageX)
//   }
// }
// document.documentElement.addEventListener('mousedown', ativarMenu)
// document.documentElement.addEventListener('touchstart', ativarMenu)
// window.addEventListener("keydown", ativarMenu)
//Como lidar com o this
// const button =  document.querySelector('button');
// function handleClick(this:HTMLButtonElement, event: MouseEvent){
//   //this faz referencia ao objeto que foi utilizado pra ativar essa função
//   console.log(this)
// }
// button?.addEventListener('click', handleClick)
// Usando Current Target
// const button = document.querySelector("button");
// function handleClick(event: MouseEvent) {
//   //this faz referencia ao objeto que foi utilizado pra ativar essa função
//   const elemento = event.currentTarget;
//   if (elemento instanceof HTMLElement) {
//     console.log(elemento.innerText);
//   }
// }
// button?.addEventListener("click", handleClick);
