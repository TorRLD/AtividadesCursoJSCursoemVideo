function carregar() {

    var msg = window.document.getElementById("hora")
    var img = window.document.getElementById("imagem") 
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min} horas.`
    var corpo = window.document.getElementById("body")
    if (hora >= 18){
        corpo.style.background = "#10100f"
        img.src = "imagens/night.png"
    }
    else if(hora <= 12){
        corpo.style.background = "#fde394"
        img.src = "imagens/morning.png"
    }
    else if(hora > 12 && hora < 18) {
        corpo.style.background = "#2f6893"
        img.src = "imagens/afternoon.png"
    }

}