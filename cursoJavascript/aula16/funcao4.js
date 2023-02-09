function fatorial(n) {
    let res = 1
    for(let fat = n; fat > 0; fat--) {
        res *= fat
    }

    return res
}

console.log(fatorial(4))