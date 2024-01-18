"use strict";
//é útil em funções que podem retornar vários tipos de valores
//o instance of verifica se a função construtora herda de oura (extends)
class Produto {
    //defino aqui fora quais propriedades essa classe possui
    nome;
    constructor(nome) {
        //definir propriedade
        this.nome = nome;
    }
}
const livro = new Produto("livro");
//veririfico se livro é um objeto da classe Produto
console.log(livro instanceof Produto);
class Livro extends Produto {
    autor;
    constructor(nome, autor) {
        //super - recria o constructor de Produto
        super(nome);
        this.autor = autor;
    }
}
class Jogo extends Produto {
    jogadores;
    constructor(nome, jogadores) {
        super(nome);
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === "O Hobbit") {
        return new Livro("O Hobbit", "J. R. R. Tolkien");
    }
    if (busca === "Dark Souls") {
        return new Jogo("Dark Souls", 1);
    }
    return null;
}
const produto = buscarProduto("O Hobbit");
// if (produto instanceof Livro) {
//   console.log(produto.autor);
// }
if (produto instanceof Produto) {
    console.log(produto.nome);
}
const honda = {
    nome: "Honda"
};
//dá erro pois interface não é uma Classe 
console.log(honda instanceof Carro);
