alert("Ex 34 Teste de Mesa");

let x,y,z,resposta;

x=parseInt(prompt("Informe o valor de x: "));
y=parseInt(prompt("Informe o valor de y: "));

z= (x*y)+ 5;

if(z<=0){
    resposta="A";
    alert("A resposta é: "+ resposta);
}
else if(z<=100){
    resposta="B";
    alert("A resposta é: "+ resposta);
}
else {
    resposta="C";
    alert("A resposta é: "+ resposta);
}