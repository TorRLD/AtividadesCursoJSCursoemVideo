

function contar() {
    var start = Number(window.document.getElementById("ini").value)
    var end = Number(window.document.getElementById("fim").value)
    var step = Number(window.document.getElementById("step").value)
    var show = window.document.getElementById("contagem")

    show.innerHTML = `<p>Contando: </p>`
    if (step == 0) {
        step = 1
    }
    if (start > end) {

        for (var ini = start; ini >= end; ini -= step) {

            show.innerHTML += ` ${ini} \u{1F449} `

        } show.innerHTML += `\u{1F3C1} `

    } else if (start < end) {

        for (var ini = start; ini <= end; ini += step) {
            show.innerHTML += ` ${ini} \u{1F449}`

        } show.innerHTML += `\u{1F3C1} `
        
    } else if (start == 0 && end == 0) {

        show.innerHTML += `<p> Não é possível fazer a contagem </p>`

    }

}
