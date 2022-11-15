"use strict";
//type pra definir tipo primitivo, ex: Number e String
let total = 50;
function preencherTela(dados) {
    document.body.innerHTML += `
    <div>
    <h2>Nome: ${dados.nome}</h2>
    <p>Preço: R$ ${dados.preco}</p>
    <p>Possui teclado: ${dados.teclado ? 'sim' : 'não'}</p>
    
    </div>
  
  `;
}
preencherTela({
    nome: 'Computador',
    preco: 2000,
    teclado: false,
});
preencherTela({
    nome: 'Tablet',
    preco: 1500,
    teclado: true,
});
