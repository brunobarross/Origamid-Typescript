// any indica que o dado pode ter qualquer tipo de dado, e deve ser evitado

//any não retorna todos os metodos disponiveis pra um tipo de dado especifico quando definido

//parametro de função sem tipo é any


//usar any é a mesma coisa que não usar javascript

//o uso do any é util em funções onde fazemos requisições assincronas, pois não sabemos qual tipo de dado vai retornar de um json

function normalizar(texto: any){
  return texto.trim().toLowerCase();


}


console.log(normalizar(' Design '))
// console.log(normalizar(500))//erro pois o esperado é que seja uma string

async function fetchJSON(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  manipularData(data)
}

fetchJSON('https://api.origamid.dev/json/cursos.json');

function manipularData(data: []){
  console.log(data)
}
