alert("Ex 26 Controle de Estoque");

let qtdEstoque,qtdMaxima,qtdMinima,qtdMedia;

qtdAEstoque=parseFloat(prompt("Informe a quantidade atual em estoque: "));
qtdMaxima=parseFloat(prompt("Informe a quantidade Máxima do estoque: "));
qtdMinima=parseFloat(prompt("Informe a quantidade Mínima do estoque: "));

qtdMedia=((qtdMaxima+ qtdMinima)/2);

if (qtdAEstoque>=qtdMedia) {
    alert("Não efetuar compra 😁");
}
else{
    alert("Efetuar compra 🤗");
}