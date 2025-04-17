let valorInicial = parseInt(prompt("Digite o valor inicial: "));
let valorFinal = parseInt(prompt("Digite o valor Final: "));
let valorContagem = parseInt(prompt("Digite o valor de contagem: "));

//Verificando se é maior ou menor
if (valorInicial < valorFinal) {
    console.log("For");
    for (contadorFor = valorInicial; contadorFor <= valorFinal; contadorFor += valorContagem) {
        console.log(`Numero: ${contadorFor}`);
    }
    console.log("FIM");

    console.log("While");
    let contadorWhile = valorInicial;
    while (contadorWhile <= valorFinal) {

        console.log(`Numero: ${contadorWhile}`);
        contadorWhile += valorContagem;
    }
    console.log("FIM");

    console.log("Do");
    let contadorDo = valorInicial;
    do {

        console.log(`Numero: ${contadorDo}`);

        contadorDo += valorContagem;
    } while (contadorDo <= valorFinal);
    console.log("FIM");

} else {
    console.log("For");
    for (contadorFor = valorInicial; contadorFor >= valorFinal; contadorFor -= valorContagem) {
        console.log(`Numero: ${contadorFor}`);
    }
    console.log("FIM");

    console.log("While");
    let contadorWhile = valorInicial;
    while (contadorWhile >= valorFinal) {

        console.log(`Numero: ${contadorWhile}`);
        contadorWhile -= valorContagem;
    }
    console.log("FIM");

    console.log("Do");
    let contadorDo = valorInicial;
    do {

        console.log(`Numero: ${contadorDo}`);
        contadorDo -= valorContagem;
    } while (contadorDo >= valorFinal);
    console.log("FIM");

}