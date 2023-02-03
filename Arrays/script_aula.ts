const numeros = [10,20,30,40,50,3]

const valores = [10,20,30,40,'Bruno', 50, 'Produto']
//array de numeros 
function maiorQue10(data: number[]){
  return data.filter(n => n > 10)
}
//alternativa pra array  Array<number> //generics
function filtrarValores(data: Array<string | number>){
  return data.filter(item => typeof item === 'number')
}






console.log(filtrarValores(valores));

console.log(maiorQue10(numeros));


const dados = [
  ['senhor dos aneis',80],
  ['a guerra dos tronos',120],
]