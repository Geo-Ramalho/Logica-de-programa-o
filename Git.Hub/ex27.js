alert("Ex 27 Ler um valor e escrever se é positivo, negativo ou zero.");

let numero1;

numero1=parseFloat(prompt("Informe o 1° numero "));


if (numero1>=1){
    alert(numero1 +" é Positivo 👍🏻");
}

else if (numero1<0) {
    alert(numero1+" é Negativo 👎🏻");
}

else {
    alert(numero1+" é Zero");
}