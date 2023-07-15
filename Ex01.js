//var nome1 = window.prompt("Digite o nome do Jogador 1: ");
//var escolha1 = window.prompt("Escolha entre pedra, papel ou tesoura: ");
//console.log(nome1 + " escolheu: " + escolha1);
//var nome2 = window.prompt("Digite o nome do Jogador 2: ");
//var escolha2 = window.prompt("Escolha entre pedra, papel ou tesoura: ");
//console.log(nome2 + " escolheu: " + escolha2);
const nome1 = "Breno";
const nome2 = "JV";
var escolha1 = "pedra";
var escolha2 = "tesoura";

function testaValidade(escolha) {
    let valido = false
    switch (escolha) {
        case "pedra":
            valido = true;
            break;

        case "papel":
            valido = true;
            break;

        case "tesoura":
            valido = true;
            break;

        default:
            valido = false
            break;
    }
    return valido;
}
console.log(testaValidade(escolha1));
console.log(testaValidade(escolha2));

if (!testaValidade(escolha1) || !testaValidade(escolha2)) {
    console.log("Resposta inválida");
    return;
}

if ((escolha1 == "pedra") && (escolha2 == "tesoura")) {
    console.log(`${nome1} venceu com ${escolha1}`);
}
else if ((escolha1 == "tesoura") && (escolha2 == "papel")) {
    console.log(`${nome1} venceu com ${escolha1}`);
}
else if ((escolha1 == "papel") && (escolha2 == "pedra")) {
    console.log(`${nome1} venceu com ${escolha1}`);
}
else if (escolha1 == escolha2) {
    console.log(`${nome1} e ${nome2} empataram com ${escolha1}`);
}
else {
    console.log(`${nome2} venceu com ${escolha2}`);
}