// Realizar uma contagem 0 a 30 de 3 em 3
// O contador for é a melhor escolha para esse exercicio

console.log("For");
for (contador = 0; contador <= 30; contador += 3) {
    console.log(`Numero: ${contador}`);
}
console.log("FIM");

console.log("While");
let contadorWhile = 0;
while (contadorWhile <= 30) {
    console.log(`Numero: ${contadorWhile}`);
    contadorWhile += 3;
}
console.log("FIM");

console.log("Do");
let contadorDo = 0;
do {
    console.log(`Numero: ${contadorDo}`);
    contadorDo += 3;
} while (contadorDo <= 30) ;
console.log("FIM");
