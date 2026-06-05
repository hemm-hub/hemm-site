function comprar(produto){

const campoProduto = document.getElementById("produto");

if(campoProduto){
campoProduto.value = produto;
}

const pedido = document.querySelector(".pedido");

if(pedido){

pedido.scrollIntoView({
behavior:"smooth",
block:"start"
});

}

}

document.addEventListener("DOMContentLoaded", function(){

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {

link.addEventListener("click", function(e){

const destino = document.querySelector(
this.getAttribute("href")
);

if(destino){

e.preventDefault();

destino.scrollIntoView({
behavior:"smooth",
block:"start"
});

}

});

});

});
