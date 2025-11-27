const btPlayPause = document.getElementById("play-pause");
const audio = document.getElementById("audio-cap");
const btProximo = document.getElementById("proximo");
const btAnterior = document.getElementById("anterior");
const txtCap = document.getElementById("capitulo");
const qntCap = 10;

let capAtual = 1;


function playepause() {
if  (audio.paused){
    audio.play()
    btPlayPause.classList.add("tocando")
} else {
    audio.pause()
    btPlayPause.classList.remove("tocando")
}
}

function proximo() {
    
    if(capAtual < qntCap){
        capAtual++
    } else{
        capAtual = 1
    }
    audio.src="audios/" + capAtual + ".mp3"
    txtCap.innerHTML = 'Capítulo ' + capAtual;
}

function anterior(){
     
    if(capAtual === 1) {
        capAtual = 10
    } else{
        capAtual--
    }
    audio.src="audios/" + capAtual + ".mp3"
     txtCap.innerHTML = 'Capítulo ' + capAtual;
}

btPlayPause.addEventListener("click", playepause)
btProximo.addEventListener("click", proximo)
btAnterior.addEventListener("click", anterior)

/*função com () é executada, sem () está esperando para ser executada, como no caso do click */