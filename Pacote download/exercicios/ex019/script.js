function calc() {
    var res = document.getElementById('res')
    var txtn1 = document.getElementById('txtn1')
    var txtn2 = document.getElementById('txtn2')
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    var sn = Number(window.prompt('Digite: [1] para somar\n [2] para subtrair\n [3] multiplicar\n [4] dividir'))
    while(sn != 1 && sn != 2 && sn != 3 && sn != 4) {
        sn = Number(window.prompt('Digite: [1] para somar\n [2] para subtrair\n [3] multiplicar\n [4] dividir'))
    }
    switch(sn) {
        case 1:
            res.innerHTML += `<p>${n1} + ${n2} = ${n1+n2}</p>`
            break
        case 2:
            res.innerHTML += `<p>${n1} - ${n2} = ${n1-n2}</p>`
            break
        case 3:
            res.innerHTML += `<p>${n1} x ${n2} = ${n1*n2}</p>`
            break
        case 4:
            res.innerHTML += `<p>${n1} / ${n2} = ${(n1/n2).toLocaleString('pt-BR')} </p>`
            break
    }
}