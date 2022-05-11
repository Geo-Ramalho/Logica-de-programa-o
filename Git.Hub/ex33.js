alert("Ex 33 Ler dois valores e imprimir uma das três mensagens");

let valor1,valor2,mensagem;

valor1=parseFloat(prompt("Informe o Valor1: "));
valor2=parseFloat(prompt("Informe o Valor2: "));

if (valor1==valor2){
    alert(valor1+valor2 +"Os Números são Iguais 😏");
}
else if(valor1>valor2){
    alert(valor1+ " é Maior que o segundo valor 😉");
}

else if (valor1<valor2) {
    alert(valor2 +" é maior que o primeiro valor 😇");
}