function ativaLetra(elemento){
    const arrayTexto = elemento.innerHTML.split('')
    elemento.innerHTML = '';
    arrayTexto.array.forEach(( letra ,i ) => {
        setTimeout(()=>{
            elemento.innerHTML += letra;
        }, 75 * i);
    });
}

ativaLetra(titulo);
const titulo = document.querySelector('#sub_inf');
console.log(titulo);