// Calculadora 

// Declaração de variavel 

var wOperador, wNum1, wNum2, wNumero1, wNumero2, wResultado;
do {
    wOperador = prompt ("Qual operação você deseja realizar? '+', '-', 'x', '/'");
} while (wOperador != "+" && wOperador != "-" && wOperador != "x" && wOperador != "/");

wNum1 = prompt ("Insira o primeiro numero:");
wNum2 = prompt ("Insira o segundo numero:");
wNumero1 = parseInt (wNum1);
wNumero2 = parseInt (wNum2);

switch (wOperador) {
    case "+":
        wResultado = wNumero1 + wNumero2;
        alert(wNumero1 + " + " + wNumero2 + " = " + wResultado);
        break;
    case "-":
        wResultado = wNumero1 - wNumero2;
        alert(wNumero1 + " - " + wNumero2 + " = " + wResultado);
        break;
    case "x":
        wResultado = wNumero1 * wNumero2;
        alert(wNumero1 + " x " + wNumero2 + " = " + wResultado);
        break;
    case "/":
        wResultado = wNumero1 / wNumero2;
        alert(wNumero1 + " / " + wNumero2 + " = " + wResultado);
        break;
}