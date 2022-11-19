"use strict";
let produto = "Livro";
let preco = 200;
//tipo object
// const carro: {
//   marca: string;
//   portas: number
// } = {
//   marca: 'Audi',
//   portas: 5,
// }
// inferência define sozinho o tipo de dado de acordo com o valor atribuido
const carro = {
    marca: 'Audi',
    portas: 5,
};
//boolean ou string, não preciso anotar o tipo pois ele reconhece sozinho
const barato = preco < 400 ? true : 'produto muito caro';
// ele não me deixa usar any.
// retorno : tipo que vai retornar
// function somar(a: number,b: number): string{
//   //função recebe dois numeros mas retorna string
//   return `${a + b}`
// }
function somar(a, b) {
    return a + b;
}
somar(4, 10);
const nintendo = {
    nome: 'Nintendo',
    preco: '2000'
};
function transformarPreco(produto) {
    produto.preco = 'R$ ' + produto.preco;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
//Conserte a função com TypeScript
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto(' Opa irmão '));
