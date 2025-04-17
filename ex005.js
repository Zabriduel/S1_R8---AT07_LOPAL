let numero = -1;
while(numero < 0){
    numero = parseInt(prompt("Digite um número"));
    while(isNaN(numero)){
        alert("O valor digitado não é  um número tente novamente");
        numero = parseInt(prompt("Digite um número"));
    }
    if (numero < 0){
        alert("Numéro digitado é menor que zero tente novamente");
        numero = parseInt(prompt("Digite um número"));
    }
}
    

console.log("For");
for (contadorFor = 1; contadorFor <= numero; contadorFor ++ ) {
    console.log(`Numero: ${contadorFor}`);
}
console.log("FIM");

console.log("While");
let contadorWhile = 1;
while (contadorWhile <= numero) {
    console.log(`Numero: ${contadorWhile}`);
    contadorWhile ++;
}
console.log("FIM");

console.log("Do");
let contadorDo = 1;
do {
    console.log(`Numero: ${contadorDo}`);
    contadorDo ++;
} while (contadorDo <= numero) ;
console.log("FIM");
