let titulo = document.querySelector('h1')
let body = document.querySelector('body');
let footer = document.createElement('footer');
let header = document.createElement('header');

titulo.addEventListener('mouseover', colorChange);

function colorChange(event) {
  titulo.style.color = 'tomato';
}

titulo.addEventListener('mouseout', (evento) => {
  titulo.style.color = 'black';
})

let nome = document.querySelector('#name')
let paragraph = document.querySelector('#descricao')
let figura = document.querySelector('#imagem');
let btn = document.querySelector('#enviar')
let li = document.createElement('li');


let newName = document.querySelector('h2')
let newParagraph = document.querySelector('p')
let newImage = document.querySelector('img')


btn.addEventListener('click', (event) => {
  console.log("clicou no trem")

  event.preventDefault();

  newName.innerHTML = `${nome.value}`;
  newParagraph.innerHTML = `${paragraph.value}`;
  newImage.src = `${figura.value}`;

  let nomes = nome.value;
  let descricao = paragraph.value;
  let imagem = figura.value;
  let section = document.querySelector("#lista");
  let li = document.createElement("li");
  let p = document.createElement("p");
  let img = document.createElement('img');
  let h2 = document.createElement("h2");
  let src = document.createAttribute('src');
  let titulo2 = document.querySelector('#titulo-2');

  // cria um objeto com as entradas de dados dos inputs
  var card = {
    nomeA: nomes,
    descricaoA: descricao,
    imagemA: imagem
  }

  // recebe os valores
  p.innerHTML = card.descricaoA;
  src.innerHTML = card.imagemA;
  h2.innerHTML = card.nomeA;

  titulo2.innerHTML = "Lista de Animes";

  // adiciona os elementos no html dentro da div chamada de classe card
  img.setAttribute('src', card.imagemA);
  var div = document.createElement("div");
  div.appendChild(img);
  div.appendChild(h2)
  div.appendChild(p);


  // cria uma classe para o css dos cards
  div.classList.add('card');

  // a section lista recebe os cards inseridos
  section.appendChild(div);

  // adiciona os itens na lista
  // section.appendChild(li);
})

let registra = document.createElement('p');

registra.innerHTML = "Disciplina de Frontend II - 2021 - Todos os Direitos Reservados"
registra.classList.add('texto');
footer.appendChild(registra);

footer.classList.add('foo');
body.appendChild(footer);