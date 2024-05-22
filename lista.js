const elementos = ["Elemento 1", "Elemento 2", "Elemento 3"];
const contenedor = document.getElementById("abc");

elementos.forEach(elemento => {
    const itemLista = document.createElement("li");
    itemLista.textContent = elemento;
    contenedor.append(itemLista);
});