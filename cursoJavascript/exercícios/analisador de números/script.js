let box = []
function adicionar() {
    let num = Number(window.document.getElementById("num").value)
    let caixa = window.document.getElementById("quadro")
    if (num >= 1 && num <= 100) {
        let pos = box.indexOf(num)
        if (pos != -1) {
            window.alert("Número já adicionado")
        } else {
            box.push(num)
            //item recebe a criação de um elemento do tipo opção
            let item = window.document.createElement('option')
            //um texto é adicionado ao item
            item.text = `O número adicionado foi ${num}`
            //caixa recebe o valor de item
            caixa.appendChild(item)
        }


    } else if (num > 100 || num < 1) {
        window.alert("Número inválido")
    }
    res.innerHTML = ``
    return box
}

let res = window.document.getElementById("res")
let adc = adicionar()

function finalizar() {
    if (adc.length == 0) {

        res.innerHTML = `Nenhum valor foi adicionado`
    }
    else {
        res.innerHTML = `Ao todo temos ${adc.length} números adicionados`

        let maior = adc[0]
        let menor = adc[0]
        let soma = 0;
        let media

        for (let posi in adc ) {
            soma += adc[posi]
            if (adc[posi] > maior) {
                maior = adc[posi]
            } else if (adc[posi] < menor) {
                menor = adc[posi]
            }
        }

        media = soma/adc.length

        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os números é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }


}