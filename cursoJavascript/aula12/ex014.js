var agora = new Date()
var diaSem = agora.getDay()

switch(diaSem) {
    case 0:
        diaSem = "domingo"
        break

    case 1:
        diaSem = "segunda-feira"
        break

    case 2:
        diaSem = "terça-feira"
        break

    case 3:
        diaSem = "quarta-feira"
        break

    case 4:
        diaSem = "quinta-feira"
        break

    case 5:
        diaSem = "sexta-feira"
        break

    case 6:
        diaSem = "sábado"
        break
    default:
        break

}

console.log(`Hoje é ${diaSem}`)