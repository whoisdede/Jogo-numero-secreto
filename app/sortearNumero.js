const menorValor = 1
const maiorValor = 3000

const numeroSecreto = gerarNumero()
function gerarNumero(){
    return parseInt(Math.random()*maiorValor+1)
}

console.log('o numero é:' + numeroSecreto)  

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor