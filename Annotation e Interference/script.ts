

let produto: string = "Livro";
let preco: number = 200;

//tipo object
// const carro: {
//   marca: string;
//   portas: number
// } = {
//   marca: 'Audi',
//   portas: 5,
// }

// inferência define sozinho o tipo de dado de acordo com o valor atribuido
const carro =  {
  marca: 'Audi',
  portas: 5,
}

//boolean ou string, não preciso anotar o tipo pois ele reconhece sozinho
const barato: boolean | string = preco < 400 ? true : 'produto muito caro'


// ele não me deixa usar any.
// retorno : tipo que vai retornar
// function somar(a: number,b: number): string{
//   //função recebe dois numeros mas retorna string
//   return `${a + b}`
// }
function somar(a: number,b: number){
  return a + b
}
somar(4,10)

const nintendo = {
  nome: 'Nintendo',
  preco: '2000'
}

function transformarPreco(produto: {nome: string, preco:string}){
  produto.preco = 'R$ ' + produto.preco;
  return produto;

}

const produtoNovo = transformarPreco(nintendo)



//Conserte a função com TypeScript
function normalizarTexto(texto:string) {
  return texto.trim().toLowerCase();
}

console.log(normalizarTexto(' Opa irmão '))