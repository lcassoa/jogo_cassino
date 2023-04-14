
var wCashCliente = 100;
var wCashCasa = 1000;
let wDadoLancado = 0;

function confereValor(wTentativa, x) {
    while (wTentativa < 1 || wTentativa > x) {
        alert("Digite um valor disponivel");
        wTentativa = prompt("Segunda tentativa, digite um numero de 1 a " + x);
        Number(wTentativa);
    }
}

function jogoUmaTres(wFichaAposta, wTotal) {
    wFichaAposta = prompt("Qual o valor da aposta? ")
    if (wFichaAposta > wCashCliente) {
        alert("Saldo insuficiente")
    } else {
        wDadoLancado = Math.floor((Math.random() * 3) + 1)
        console.log(wDadoLancado)
        wTentativa = prompt("Digite o numero da sorte entre 1 e 3: ");
        Number(wTentativa);
        confereValor(wTentativa, 3);
        if (wTentativa == wDadoLancado) {
            wTotal = wFichaAposta * 0.5;
            alert("Parabens voce ganhou: " + wTotal);
            wCashCliente += wTotal;
            alert("Seu saldo foi para " + wCashCliente);
            wCashCasa -= wTotal;
        } else {
            wTotal = wFichaAposta * 0.5;
            alert("Que pena, voce nao conseguiu! Mas acreditamos em voce");
            wCashCliente -= wTotal;
            wCashCasa += wTotal;
        }
        console.log(wCashCliente);
        console.log(wCashCasa);
    }
}

function jogoUmaSeis(wFichaAposta, wTotal, wTentativa, nTentativa) {
    nTentativa = 1;
    wFichaAposta = prompt("Qual o valor da aposta? ")
    if (wFichaAposta > wCashCliente) {
        alert("Saldo insuficiente")
    } else {
        wDadoLancado = Math.floor((Math.random() * 6) + 1);
        console.log(wDadoLancado)
        do {
            wTentativa = prompt("Digite um numero de 1 a 6: ")
            Number(wTentativa);
            if (wTentativa < 1 || wTentativa > 6) {
                alert("Digite um valor disponivel")
            } else {
                nTentativa++;
                if (wTentativa == wDadoLancado) {                    //Caso 1, acerto de primeira
                    wTotal = wFichaAposta * 0.5;
                    wCashCliente += wTotal;
                    wCashCasa -= wTotal;
                    alert("Parabens! voce acertou de primeira, você ganhou: " + wTotal);
                    alert("Seu saldo total é de: " + wCashCliente);
                } else if (wTentativa != wDadoLancado) {
                    nTentativa++;
                    alert("Que pena! tente novamente: ");
                    wTentativa = prompt("Segunda tentativa, digite um numero de 1 a 6: ");
                    Number(wTentativa);
                    confereValor(wTentativa, 6);
                    if (wTentativa == wDadoLancado) {                 // caso 2, acerto de segunda
                        alert("Parabens! Voce nao perdeu nada, seu saldo continua de: " + wCashCliente);
                    } else {                                         // caso 3, acerto de terceira
                        alert("Ultima chance, boa sorte!")
                        wTentativa = prompt("Terceira tentativa, digite um numero de 1 a 6: ");
                        Number(wTentativa);
                        confereValor(wTentativa, 6);
                        nTentativa++;
                        if (wTentativa == wDadoLancado) {
                            wTotal = wFichaAposta * (-0.5);
                            wCashCliente += wTotal;
                            wCashCasa += wTotal;
                            alert("Parabens voce acertou! Entretando foi na terceira tentativa e por conta disso voce perdera apenas 50% do valor da aposta. Seu saldo total é de: "
                                + wCashCliente);
                        } else {                                      // caso 4, não acerta
                            wTotal = wFichaAposta;
                            wCashCliente -= wTotal;
                            wCashCasa += wTotal;
                            alert("Que pena, você perdeu. Tente novamente! Seu saldo é de: " + wCashCliente);
                        }
                    }
                }
            }
        } while (wTentativa != wDadoLancado && nTentativa <= 3)
    }
}

function jogoUmaDez(wFichaAposta, wTotal, wTentativa, nTentativa) {
    nTentativa = 1;
    wFichaAposta = prompt("Qual o valor da aposta? ")
    if (wFichaAposta > wCashCliente) {
        alert("Saldo insuficiente")
    } else {
        wDadoLancado = Math.floor((Math.random() * 3) + 1);
        console.log(wDadoLancado)
        do {
            wTentativa = prompt("Digite um numero de 1 a 10: ");
            Number(wTentativa);
            if (wTentativa < "1" || wTentativa > "10") {
                alert("Digite um valor disponivel")
            } else {
                nTentativa++;
                if (wTentativa == wDadoLancado) {                    //Caso 1, acerto de primeira
                    wTotal = wFichaAposta * 2;
                    wCashCliente += wTotal;
                    wCashCasa -= wTotal;
                    alert("Parabens! voce acertou de primeira, você ganhou: " + wTotal);
                    alert("Seu saldo total é de: " + wCashCliente);
                } else if (wTentativa != wDadoLancado) {
                    nTentativa++;
                    alert("Que pena! tente novamente: ");
                    wTentativa = prompt("Segunda tentativa, digite um numero de 1 a 10: ");
                    Number(wTentativa);
                    confereValorNumericoDez(wTentativa);
                    if (wTentativa == wDadoLancado) {                 // caso 2, acerto de segunda
                        wTotal = wFichaAposta * 0.5;
                        wCashCliente += wTotal;
                        wCashCasa -= wTotal;
                        alert("Parabens! Você acertou de segunda, portanto ganhou: " + wTotal);
                        alert("Seu saldo ficou de: " + wCashCliente);
                    } else {                                         // caso 3, acerto de terceira
                        alert("Ultima chance, boa sorte!")
                        wTentativa = prompt("Terceira tentativa, digite um numero de 1 a 10: ");
                        Number(wTentativa);
                        confereValorNumericoDez(wTentativa);
                        nTentativa++;
                        if (wTentativa == wDadoLancado) {
                            alert("Parabens voce acertou de terceira! Portanto seu slado não foi alterado, mantendo um total de: " + wCashCliente);
                        } else {                                      // caso 4, não acerta
                            wTotal = wFichaAposta;
                            wCashCliente -= wTotal;
                            wCashCasa += wTotal;
                            alert("Que pena, você perdeu. Tente novamente! Seu saldo é de: " + wCashCliente);
                        }
                    }
                }
            }
        } while (wTentativa != wDadoLancado && nTentativa <= 3)
    }
}

function jogoUmAcem(wFichaAposta, wTotal, wTentativa, nTentativa) {
    nTentativa = 1;
    wFichaAposta = prompt("Digte o valor da sua aposta: ");
    if (wFichaAposta > wCashCliente) {
        console("Insira um valor valido: ")
    } else {
        wDadoLancado = Math.floor((Math.random() * 6) + 1);
        console.log(wDadoLancado);
        do {
            wTentativa = prompt("Digite um numero de 1 a 100 para quintiplicar seu valor: ");
            Number(wTentativa)
            if (wTentativa == wDadoLancado) {                              //caso 1, acertou de primeira
                wTotal = wFichaAposta * 10;
                wCashCliente += wTotal;
                wCashCasa -= wTotal;
                alert("Parabens, voce acertou de primeira, ficou rico. Ganhou: $" + wTotal);
                alert("Saldo total: " + wCashCliente);
                alert("Saldo da casa: " + wCashCasa);
            } else if (wTentativa != wDadoLancado) {
                nTentativa++
                alert("Tente novamente, nós acreditamos em voçê!")
                wTentativa = prompt("Digite um numero novamente entre 1 e 100: ")
                Number(nTentativa);
                confereValor(wTentativa, 100);
                if (wTentativa == wDadoLancado) {                               // caso 2, acertou de segunda
                    wTotal = wFichaAposta * 5;
                    wCashCliente += wTotal;
                    wCashCasa -= wTotal;
                    alert("Parabens voce acertou de segunda, ficou riquinho. Ganhou: $" + wTotal);
                    alert("Saldo total: " + wCashCliente);
                    alert("Saldo da casa: " + wCashCasa);
                } else if (wTentativa != wDadoLancado) {
                    nTentativa++;
                    alert("Tente novamente, nós acreditamos em voçê!")
                    wTentativa = prompt("Digite um numero novamente entre 1 e 100: ")
                    Number(nTentativa);
                    confereValor(wTentativa, 100);
                    if (wTentativa == wDadoLancado) {                           //caso 3, acertou de terceira
                        wTotal = wFichaAposta * 2;
                        wCashCliente += wTotal;
                        wCashCasa -= wTotal;
                        alert("Parabens, voce acertou de terceira. Ganhou: $" + wTotal);
                        alert("Saldo total: " + wCashCliente);
                        alert("Saldo da casa: " + wCashCasa);
                    } else if (wTentativa != wDadoLancado) {                   //caso 4, terceira;
                        nTentativa++;
                        alert("Voce ainda tem duas chances de ganhar, use-as com sabedoria ")
                        wTentativa = prompt("Digite o numero novamente entre 1 a 100: ");
                        Number(wTentativa);
                        confereValor(wTentativa, 100);
                        if (wTentativa == wDadoLancado) {                           //caso 3, acertou de terceira
                            wTotal = wFichaAposta * 2;
                            wCashCliente += wTotal;
                            wCashCasa -= wTotal;
                            alert("Parabens, voce acertou de terceira. Ganhou: $" + wTotal);
                            alert("Saldo total: " + wCashCliente);
                            alert("Saldo da casa: " + wCashCasa);
                        }
                        else if (wTentativa != wDadoLancado) {                   //caso 4, terceira;
                            nTentativa++;
                            alert("Voce ainda tem mais uma chance de ganhar, NÃO ERRE! ")
                            wTentativa = prompt("Digite o numero novamente entre 1 a 100: ");
                            Number(wTentativa);
                            confereValor(wTentativa, 100);
                            if (wTentativa == wDadoLancado) {                           //caso 3, acertou de terceira
                                wTotal = wFichaAposta * 2;
                                wCashCliente += wTotal;
                                wCashCasa -= wTotal;
                                alert("Parabens, voce acertou de terceira. Ganhou: $" + wTotal);
                                alert("Saldo total: " + wCashCliente);
                                alert("Saldo da casa: " + wCashCasa);
                            } else {
                                alert("Infelizmente voçê errou")
                                wTotal += wFichaAposta;
                                wCashCliente -= wTotal;
                                wCashCasa += wTotal
                            }
                        }
                    }
                }
            }
        } while (wTentativa != wDadoLancado || nTentativa <= 5)
    }

}

var wQuerJogar;
let wJogo;

alert("Bem vindo ao cassino!");

wQuerJogar = prompt("Voce deseja jogar 'S' ou 'N' ")
if (wQuerJogar == 's' || wQuerJogar == 'S') {
    do {
        wJogo = prompt("Qual jogo deseja jogar?" + "\n" +
            "1º - dado de 1 a 3" + "\n" +
            "2º - dado de 1 a 6" + "\n" +
            "3º - dado de 1 a 10" + "\n" +
            "4º - dado de 1 a 100");
        switch (wJogo) {
            case '1':
                jogoUmaTres();
                break;
            case '2':
                jogoUmaSeis();
                break;
            case '3':
                jogoUmaDez();
                break;
            case '4':
                jogoUmAcem();
                break;
        }
        wQuerJogar = prompt("Voce deseja jogar de novo 'S' ou 'N'? ")
    } while (wQuerJogar == 'S' || wQuerJogar == 's');
}