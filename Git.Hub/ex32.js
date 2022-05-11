alert("Ex 32 Resultado da Partida");

let timeA,timeB,golTimeA,golTimeB;

timeA=prompt("Informe o Nome do Time A:");
golTimeA=parseInt(prompt("Informe a quantidade de gols feitos pelo time "+ timeA));

timeB=prompt("Informe o Nome do Time B:");
golTimeB=parseInt(prompt("Informe a quantidade de gols feitos pelo time "+ timeB));

if (golTimeA>golTimeB){
    alert("O vencedor da partida é feitos "+golTimeA+" Gols é o: "+timeA);
}
else if(golTimeA<golTimeB){
    alert("O vencedor da partida é feitos "+golTimeB+" Gols é o: "+timeB); 
}
else if(golTimeA==golTimeB){
    alert("Infelizmente não houver um ganhador, pois o resultado é o empate ");
}