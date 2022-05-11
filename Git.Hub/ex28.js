alert("Ex Mostra Qual Numero é Maior");

let numero1,numero2,numero3;

numero1=parseFloat(prompt("Informe o 1° numero:"));
numero2=parseFloat(prompt("Informe o 2° numero:"));
numero3=parseFloat(prompt("Informe o 3° numero:"));

if (numero1>numero2 && numero1>numero3){
    alert(numero1+" é maior!!!");
}
else if (numero2>numero3 && numero2>numero1){
    alert(numero2+" é maior!!!");
}
else {
    alert(numero3+" é maior!!!");
}