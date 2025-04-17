// Realizar uma contagem de 50  a 0 de 5 em 5
// O contador for é a melhor escolha para esse exercicio

console.log("For");
for (contadorFor = 50; contadorFor >= 0; contadorFor -= 5) {
    console.log(`Numero: ${contadorFor}`);
}
console.log("FIM");

console.log("While");
let contadorWhile = 50;
while (contadorWhile >= 0) {
    console.log(`Numero: ${contadorWhile}`);
    contadorWhile -= 5;
}
console.log("FIM");

console.log("Do");
let contadorDo = 50;
do {
    console.log(`Numero: ${contadorDo}`);
    contadorDo -= 5;
} while (contadorDo >= 0) ;
console.log("FIM");
