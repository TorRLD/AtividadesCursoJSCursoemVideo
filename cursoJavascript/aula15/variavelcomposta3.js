let valores = [5, 4, 3, 2, 1]

//Forma padrão de visualização
console.log(valores)

//Forma escolhida pelo usuário 2
for (let pos in valores) {
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}