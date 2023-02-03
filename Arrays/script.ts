interface Curso{
  aulas: number,
  gratuito: boolean,
  horas: number,
  idAulas: Array<Number>,
  nivel: string,
  nome: string,
  tags: Array<String>
}


async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();

  mostrarCursos(data);
}

fetchCursos();

function mostrarCursos(cursos: Curso[]) {

  let color;
  cursos.forEach(({aulas,nome,nivel})=>{

    if(nivel == 'iniciante'){
      color = 'blue'
    } else{
      color = 'red';
    }
    document.body.innerHTML += `
    <div>
      <h1>Curso: ${nome}</h1>
      <p style="color: ${color}">Nível do curso: ${nivel}</p>
      <p>Núm de aulas: ${aulas}</p>
    </div>

    `

  })




  


}
