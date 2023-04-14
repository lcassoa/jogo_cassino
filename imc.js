var wAlt = prompt("Digite a altura: ");
var wPes = prompt("Digite o peso: ");


function calcIMC(pAlt, pPes) {
    let wResult = 0;
    let wPesoIdeal = 0;

function calcPesoIdeal(imc = 24.9){
     wPesoIdeal = (pAlt*pAlt) * imc;
     console.log( "o peso ideal é "+ wPesoIdeal.toFixed(2) + "kg");
}
    if (pAlt && pPes) {
        pPes = parseFloat(pPes.replace(",","."));
        pAlt = parseFloat(pAlt.replace(",","."));
        wResult = pPes / (pAlt * pAlt);
     /*    if(wResult >= 25){
            wPesoIdeal = (pAlt*pAlt) * 24.9;  
            console.log("O peso ideal é " + wPesoIdeal.toFixed(2) + "kg")
        } */
    } else {
        console.log("Valor indefinido")
        return false;
    }
    const wMensagem = "IMC " + wResult.toFixed(2);
    
    switch (true) {
        case (wResult < 18.5):
            calcPesoIdeal(18.5)
            return wMensagem + " está abaixo do peso";
        case (wResult >= 18.5 && wResult <= 24.99):
            return wMensagem + " Peso normal";
        case (wResult >= 25 && wResult <= 29.99):
        calcPesoIdeal()
            return wMensagem + " Excesso de peso";
        case (wResult >= 30 && wResult <= 34.99):
            calcPesoIdeal()
            return wMensagem + " Obesidade nivel 1";
        case (wResult >= 35 && wResult <= 39.99):
            calcPesoIdeal()
            return wMensagem + " Obesidade nivel 2";
        case (wResult > 39.99):
            calcPesoIdeal()
            return wMensagem + " Obesidade morbida";
    }
}

calcIMC(wAlt, wPes);










