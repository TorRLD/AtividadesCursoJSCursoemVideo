function gerar() {
    var num = Number(window.document.getElementById("num").value)
    var tabu = window.document.getElementById("tabuada")
    var item = window.document.createElement('option')
    tabu.innerHTML = ''
    for (var calc = 1; calc <= 10; calc ++) {

        //item recebe a criação de um elemento do tipo opção
        var item = window.document.createElement('option')
        //O texto dentro do item recebe o cálculo 
        item.text = `${num} x ${calc} = ${num*calc}`
        //Nomeia todas as linhas de resultado da tabela
        item.value = `tab${calc}`
        // O select recebe o elemento item
        tabu.appendChild(item)
    }
}