alert("Ex 29 Ler 3 valores e escrever o maior deles");

let numero1, numero2, numero3, soma;

numero1 = parseFloat(prompt("Informe o 1° numero:"));
numero2 = parseFloat(prompt("Informe o 2° numero:"));
numero3 = parseFloat(prompt("Informe o 3° numero:"));

if ((numero1 > numero3) && (numero2 > numero3)) {
    soma = numero1 + numero2
    alert("O resultado da soma é " + soma);
} else if ((numero1 > numero2) && (numero3 > numero2)) {
    soma = numero1 + numero3
    alert("O resultado da soma é " + soma);
} else if ((numero2 > numero1) && (numero3 > numero1)) {
    soma = numero2 + numero3
    alert("O resultado da soma é " + soma);
}