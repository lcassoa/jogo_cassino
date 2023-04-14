let wCashCliente = 100;
let wCashCasa = 1000;
let wDadoLancado = 0;
//var wIdx;
let wQtdPossibilidade = 0;

function jogo(wQtdPossibilidade, wQtdTentativas, wJsonPontuacao) {
    do {
        wFichaAposta = Number(prompt("Qual o valor da aposta"));
    } while (wFichaAposta > wCashCliente)
    wDadoLancado = Math.floor((Math.random() * Number(wQtdPossibilidade)) + 1);
    console.log(wDadoLancado)
    for (let wIdx = 1; wIdx <= wQtdTentativas; wIdx++) {
        do {
            wTentativa = prompt("Tentativa nº " + (wIdx) + " de " + wQtdTentativas + ", seu ganho será de " + (wJsonPontuacao[(wIdx)] + 1) + "x" + "\n" + "Digite um numero de 1 a " + wQtdPossibilidade + ": ")
        }
        while (wTentativa < 1 || wTentativa > wQtdPossibilidade)
        if (wTentativa == wDadoLancado) {
            wTotal = wFichaAposta * wJsonPontuacao[(wIdx)];
            wCashCliente += wTotal;
            wCashCasa -= wTotal;
            alert("Parabens! voce acertou de " + (wIdx) + ", você ganhou: " + wTotal);
            alert("Seu saldo total é de: " + wCashCliente);
            console.log(wCashCasa, wCashCliente);
            break;
        } else {
            alert("Você errou! Tente novamente: ");
            if (wIdx == wQtdTentativas && wTentativa != wDadoLancado) {
                alert("Que pena! acabaram as tentativas");
                wTotal = wFichaAposta
                parseFloat(wTotal);
                wCashCliente -= wTotal;
                wCashCasa += wTotal;
                console.log(wCashCasa, wCashCliente);
            };
        };
    };
};

//var wQuerJogar;
//let wJogoEscolhido;

alert("Bem vindo ao cassino!");

let wQuerJogar = prompt("Voce deseja jogar 'S' ou 'N' ");
if (wQuerJogar == 's' || wQuerJogar == 'S') {
    do {
        let wJogoEscolhido = prompt("Qual jogo deseja jogar?" + "\n" +
            "1º - dado de 1 a 3" + "\n" +
            "2º - dado de 1 a 6" + "\n" +
            "3º - dado de 1 a 10" + "\n" +
            "4º - dado de 1 a 100");
        switch (wJogoEscolhido) {
            case "1":
                alert("Bem vindo ao jogo 'Dado dos 3 lados'");
                jogo(3, 1, { 1: 1 });
                break;
            case "2":
                alert("Bem vindo ao jogo 'Dado dos 6 lados'");
                jogo(6, 2,{1: 1.2, 2: 0.7});
                break;
            case "3":
                alert("Bem vindo ao jogo 'Dado dos 10 lados'");
                jogo(10, 3, {1: 2, 2: 1, 3: 0});
                break;
            case "4":
                alert("Bem vindo ao jogo 'Dado dos 100 lados'");
                jogo(100, 5, {1: 10, 2: 5, 3: 3, 4: 1, 5: 0.5});
                break;
        }
        wQuerJogar = prompt("Voce deseja jogar de novo 'S' ou 'N'? ")
    } while (wQuerJogar == 'S' || wQuerJogar == 's');
};
