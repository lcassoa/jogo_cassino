let cpf = prompt("Digite seu cpf:");
let wCPFverdadeiro = cpf.replaceAll('.', '').replace("-", "").trim();
let wCPFfalso = false;
wCPFverdadeiro.length == 11 ? (wCPFfalso = cpf[0].repeat(11) != cpf) : alert("CPF invalido")
console.log(wCPFfalso)
if (wCPFfalso) {
    let arrayCPF = wCPFverdadeiro.split('');
    let cpfNumber = [];
    let soma = 0;

    for (let wIdx = 0; wIdx <= 10; wIdx++) {
        cpfNumber.push(parseInt(arrayCPF[wIdx]));
    }

    for (let wIdx = 0, i = 1; wIdx <= 8, i <= 9; wIdx++, i++) {
        parseInt(arrayCPF[wIdx]);
        soma += arrayCPF[wIdx] * i;
    }
    
    let result = soma % 11;
    debugger;
    if (result != parseInt(arrayCPF[9])) {
        alert("CPF invalido")
    } else {
        soma = 0;
        for (let wIdx = 0, i = 0; wIdx <= 9, i <= 9; wIdx++, i++) {
            soma += (parseInt(arrayCPF[wIdx])) * i;
        }
        result = soma % 11;
        result == parseInt(arrayCPF[10]) ? alert("CPF valido") : alert("CPF Invalido")
    }
} else {
    alert("CPF Invalido!")
}
