const lampada = document.getElementById("lampada")

function ligar() {
    lampada.setAttribute('src', "imgs/lampadaAcesa.gif")
}

function apagar() {
    lampada.setAttribute('src', "imgs/lampadaApagada.gif")
}

function sumir() {
    lampada.style.display = ("none")
}

function aparecer() {
    lampada.style.display = ("block")
}

function piscar() {
    lampada.setAttribute('src', "imgs/lampadaAcesa.gif")
    setTimeout(() => {
        lampada.setAttribute('src', "imgs/lampadaApagada.gif")
    }, [500])
}

let intervaloId;

function piscarAutomatico() {
    if (!intervaloId) {
        intervaloId = setInterval(piscar, 1000);
    }
}

function pararPiscar() {
    clearInterval(intervaloId);
    intervaloId = null;
}

function animacao() {
    console.log("funcionando")
    lampada.style.transform = "scale(1.5)"
}