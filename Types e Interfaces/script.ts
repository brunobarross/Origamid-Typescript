


interface Empresa{
  nome: string;
  fundacao: number;
  pais: string
}


interface interfaceData {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;

}


async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json();
  showProduct(data);
}

fetchProduct();

function showProduct(data:interfaceData) {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <h2>${data.empresaFabricante.nome}</h2>
    </div>
  `;
}
