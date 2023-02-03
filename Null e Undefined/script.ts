//Null - Null é um tipo primitivo que representa ausencia de valor, é comum ser retornado em metodos do dom, como o queryselector


const button = document.querySelector('button');

const config = localStorage.getItem('config')

//sempre que eu falar com elemento que possa retornar null, temos que verificar se existe ou não

// if(button !== null){
//   button.click();
// }

if(button){
  button.click();
}

button?.click(); //verifica se é null ou undefined e se for, não executa o metódo.

// console.log(typeof null); // bug: retorna que null é um objeto


// console.log(Boolean(button));



//Undefined = diferente do null, significa que existe a variavel ou propriedade, porém não tem valor definido. Comum quando definimos uma variavel vazia:
let total;

// console.log(total);

// if(total){
//   console.log('total foi definido')
// } else{
//   console.log('total não foi definido')
// }


//ou numa função que não retorna nada


function teste(){}

// console.log(teste());

// console.log(typeof undefined);

// undefined vai ser comum em objeto que possui propriedade opcional, que pode ou não existir no objeto;


interface Product{
  nome?: string;
}


const jogo: Product = {
  nome: 'God Of War - Raganarok'
}


const livro: Product = {
}

if(jogo.nome){
  jogo.nome?.toLocaleUpperCase(); // se for undefined não continua com lowercase
}

livro.nome.toLocaleLowerCase();

//strictnull checks: é uma opção do typescript para acusar erro em variaveis ou propriedades que forem undefimed e tiverem tentando acessar algum metodo que não existe. Essa configuração já vem inclusa ao ativar o strict:true nas configurações do ts




