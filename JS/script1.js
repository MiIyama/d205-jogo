function embaralhar(lista){
    let valor_temporario;
    let indice_aleatorio;
    
    for(let i= lista.lenght -1; i!== 0; i--) {
        indice_aleatorio = Math.floor(Math.random()* i);

        valor_temporario = lista[i];
        lista[i] = lista[indice_aleatorio];
        lista[indice_aleatorio] = valor_temporario;
    }
    return lista;
}

let cartas = document.querySelectorAll('.carta');

let imagensSalvas = ['computador.jpg','coracao.png','detetive.png','dj.png','donut.png','dormir.png','oculos.png','zumbi.png'];

let imagens = imagensSalvas.concat(imagensSalvas);

imagens = embaralhar(imagens);

for(let i in cartas){
    cartas[i].style.backgroundImage = `url("imagens/${imagens[i]}")`;
  }









  **********************************************
  if(cartaVirada.style.backgroundImage === carta.style.backgroundImage){
               
    cartaVirada.onclick = null;
    carta.onclick = null;
}
}
cartaVirada = null;



