// Realizar uma contagem de com base nos valores digitados Inicial, Final, Incremento
// O contador while é a melhor escolha para esse exercicio

let valorInicial;
let valorFinal;
let valorContagem;


valorInicial = parseInt(prompt("Digite o valor inicial: "));
while (isNaN(valorInicial)) {
    alert("O valor digitado não é um número")
    valorInicial = parseInt(prompt("Digite o valor inicial: "));
}

valorFinal = parseInt(prompt("Digite o valor Final: "));
while (isNaN(valorFinal)) {
    alert("O valor digitado não é um número")
    valorFinal = parseInt(prompt("Digite o valor Final: "));
}
valorContagem = parseInt(prompt("Digite o valor de contagem: "));
while (isNaN(valorContagem)) {
    alert("O valor digitado não é um número")
    valorContagem = parseInt(prompt("Digite o valor de contagem: "));

}




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