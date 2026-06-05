function comprar(produto){

document.getElementById("produto").value = produto;

window.scrollTo({
top: document.querySelector(".pedido").offsetTop,
behavior: "smooth"
});

}
