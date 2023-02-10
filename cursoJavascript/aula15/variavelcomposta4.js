/*
   Estudo sobre vetores juntamente com condicionais

    Por: Heitor Lemos
*/


let variavel = []
variavel.push(5)
variavel.sort()
let num = variavel.indexOf(5)

if (num == -1) {
    //variavel.push(2)
    console.log(`O vetor é ${variavel}`)
} else {
    console.log(`O número já foi adicionado`)
}
