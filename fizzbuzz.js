
//Codigo do Gustavo
for (let wIdx = 1; wIdx <= 100; wIdx++) {
    if ((wIdx / 3) == parseInt((wIdx / 3)) && (wIdx / 5) == parseInt((wIdx / 5))){
        console.log("FizzBuzz")
    } else if ((wIdx / 5) == parseInt((wIdx / 5))) {
        console.log("Buzz")
    } else if ((wIdx / 3) == parseInt((wIdx / 3))) {
        console.log("Fizz");
    } else{
        console.log(wIdx)
    }
}

//Codigo do lucas
for (let wIdx = 1; wIdx <= 100; wIdx++) {
    if ((wIdx % 3) == 0 && wIdx % 5 == 0){
        console.log("FizzBuzz")
    } else if (wIdx % 5 == 0) {
        console.log("Buzz")
    } else if ((wIdx % 3) == 0){
        console.log("Fizz")
    } else{
        console.log(wIdx)
    }
}

wResultado = 203 % 11