const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if (possuiPatologia == true || altura < 150 || idade < 12 || idade > 65) {
    console.log("ACESSO NEGADO");
    return;
}
else if (ehEstudante == true || idade < 18) {
    console.log("10 reais");
}
else {
    console.log("20 reais");
}
