const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

const recognition = new SpeechRecognition()
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    chute = e.results[0][0].transcript
    exibeChute(chute)
    verificaChute(chute)
}
function exibeChute(chute){
    elementoChute.innerHTML = `<div>Você disse</div>
    <span class="box">${chute}</span>   
    `
}
function getChute(){
    return this.chute
}

recognition.addEventListener('end', () =>recognition.start())