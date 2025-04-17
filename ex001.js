// Realizar um contagem de 6 até 12
// O contador for é a melhor escolha para esse exercicio

console.log("For");

for (contador = 6; contador <= 12; contador++) {
    console.log(`Numero: ${contador}`);
}
console.log("FIM");

console.log("While");
let contadorWhile = 6;
while (contadorWhile <= 12) {
    console.log(`Numero: ${contadorWhile}`);
    contadorWhile ++;
}
console.log("FIM");

console.log("Do");
let contadorDo = 6;
do {
    console.log(`Numero: ${contadorDo}`);
    contadorDo ++ ;
} while (contadorDo <= 12) ;
console.log("FIM");
