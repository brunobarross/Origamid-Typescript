//Selecione o link utilizando o método getElementById

const link = document.getElementById("origamid");

console.dir(link);

// altera a url de http pra https

if (link instanceof HTMLAnchorElement) {
  link.href = link.href.replace("http", "https");
  console.log(link);
}
