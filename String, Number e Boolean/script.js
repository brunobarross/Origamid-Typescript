"use strict";
const frase = 'Front end';
const preco = 500;
const condicional = preco > 100;
//typeoff: type guard
//typeof retorna uma string com o nome do tipo
if (typeof frase === 'string') {
    frase.toLowerCase();
}
else {
    console.log('frase não é uma string');
}
