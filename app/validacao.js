
function verificaChute(chute){
    const num  = +chute
    if(chuteInvalido(num)|| numeroForaDoPermitido(num)){
        elementoChute.innerHTML += ("<div>Valor inválido</div>")
    }
    if(num == numeroSecreto){
        document.body.innerHTML = `
            <h2>Você Acertou!</h2>
            <h3>O número era ${numeroSecreto}</h3>
            <button id="jogar-novamente"
            class="btn-jogar">Jogar novamente</button>
        `
    }
    else if(num < numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i> ! </div>`
    }
    else if(num>numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i> ! </div>`
    }
}

function numeroForaDoPermitido(num){
    return num> maiorValor || num<menorValor
}

function chuteInvalido(num) {
    return Number.isNaN(num)
}

document.body.addEventListener('click', e =>{
    if(e.target.id =='jogar-novamente'){
        window.location.reload()
    }
})