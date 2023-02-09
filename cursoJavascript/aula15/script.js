let num = []

num.push(1)
num.push(2)
num.push(3)
num.sort()

/*
for (let i in num) {
    console.log(num[i])
} */

for (let i in num) {
    let pos = num.indexOf(num[i])
    console.log(`O valor ${num[i]} está na posição ${pos}`)
}