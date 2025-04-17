// Realizar uma contagem de 30 até 1 destacando os número divisíveis por 4
// O contador for é a melhor escolha para esse exercicio


console.log("For");
for (contadorFor = 30; contadorFor >= 1; contadorFor--) {
    if (contadorFor % 4 == 0) {
        console.log(`Numero: [${contadorFor}]`);
    } else {
        console.log(`Numero: ${contadorFor}`);
    }
}
console.log("FIM");

console.log("While");
let contadorWhile = 30;
while (contadorWhile >= 1) {
    if (contadorWhile%4 == 0) {
        console.log(`Numero: [${contadorWhile}]`);
    } else {
        console.log(`Numero: ${contadorWhile}`);
    }
    contadorWhile--;
}
console.log("FIM");

console.log("Do");
let contadorDo = 30;
do {
    if (contadorDo%4 == 0) {
        console.log(`Numero: [${contadorDo}]`);
    } else {
        console.log(`Numero: ${contadorDo}`);
    }
    contadorDo--;
} while (contadorDo >= 1);
console.log("FIM");


