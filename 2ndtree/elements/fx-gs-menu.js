/* 
export const elemCreator = (elem, content, attach, id) => {
	const elemCreation = document.createElement(elem);
	elemCreation.innerHTML = content;
	elemCreation.id = id;
	document.querySelector(attach).append(elemCreation);
	return elemCreation
} */
/* 
const nav = document.createElement('ul');
	nav.innerHTML = 
`
	
		<li><a href="index.html">Texto1</a></li>
		<li><a href="">Texto2</a></li>
		<li><a href="">Texto3</a></li>
		<li><a href="">Texto 4</a></li>
	
`;
	
	document.querySelector("#nav-menu").append(nav);

 */

/* 
const elementos = ["Elemento 1", "Elemento 2", "Elemento 3"];
const contenedor = document.getElementById("abc");

elementos.forEach(elemento => {
    const itemLista = document.createElement("li");
    itemLista.textContent = elemento;
    contenedor.append(itemLista);
});
 */

const links = [
  {
    Inicio: "index.html",
    Institucional: "inst.html",
    Recuerdos: "memories.html",
    Capacitación: "cap.html",
    Contacto: "contact.html",
  },
];

links.forEach((link) => {
  for (const texto in link) {
    const li = document.createElement("li");
    li.innerHTML = `<a href=${link[texto]}>${texto}</a>`;
    document.querySelector("#nav-menu").append(li);
  }
});
