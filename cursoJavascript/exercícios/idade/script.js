function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoSel = window.document.getElementById("ano")
    var anosel = anoSel.value
    var masc = window.document.getElementById("masculino")
    var fem = window.document.getElementById("feminino")
    var msg = window.document.getElementById("msg")
    var img = document.createElement("img")
    var sex = window.document.getElementsByName("rad")
    var gen 
    img.setAttribute('id', 'foto')


    var id = Number(ano) - Number(anosel)

    if (anosel >= 1915 && anosel <= 1970) {
        //Idoso
        if (sex[0].checked) {
            img.setAttribute('src', 'imagens/homem-velho.png')
            gen = "masculino"
        }
        else {
            img.setAttribute('src', 'imagens/mulher-velha.png')
            gen = "feminino"
        }
        msg.innerText = `Você é do gênero ${gen} e tem ${id} anos de idade`
        msg.style.textAlign = "center"

    }
    else if(anosel > 1970 && anosel <= 2015) {
        //adulto
        if (sex[0].checked) {
            img.setAttribute('src', 'imagens/homem-adulto.png')
            gen = "masculino"
        }
        else {
            img.setAttribute('src', 'imagens/mulher-adulta.png')
            gen = "feminino"
        }
        msg.innerText = `Você é do gênero ${gen} e tem ${id} anos de idade`
        msg.style.textAlign = "center"

    }
    else if(anosel > 2015 && anosel <= 2023) {
        //criança
        if (sex[0].checked) {
            img.setAttribute('src', 'imagens/homem-bebe.png')
            gen = "masculino"
        }
        else {
            img.setAttribute('src', 'imagens/mulher-bebe.png')
            gen = "feminino"
        }
        msg.innerText = `Você é do gênero ${gen} e tem ${id} anos de idade`
        msg.style.textAlign = "center"

    }
    else if(anosel.length == 0 || anosel > ano ){
        window.alert("Verifique o ano inserido")
    }
    msg.appendChild(img)
}