let cpf = prompt("Digite o seu cpf");
let cpfNumber = cpf.split('').map(Number);
let soma1 = 0;
let soma2 = 0;

// Calcula primeiro dígito verificador
for (let i = 0; i < 9; i++) {
  soma1 += cpfNumber[i] * (i + 1);
}
let digito1 = soma1 % 11;
if (digito1 > 9) {
  digito1 = 0;
}

// Calcula segundo dígito verificador
for (let i = 0; i < 10; i++) {
  soma2 += cpfNumber[i] * i;
}
let digito2 = soma2 % 11;
if (digito2 > 9) {
  digito2 = 0;
}

digito1 && digito2 == 0 ? alert("CPF valido ") :