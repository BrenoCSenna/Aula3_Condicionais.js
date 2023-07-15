const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3_000_000; //emCentavos

var totalDeRendimentosR$ = totalDeRendimentos / 100;

if (aposentada == true || portadoraDeDoenca == true) {
    console.log("ISENTA");
}
else {
    if (totalDeRendimentosR$ <= 28_559.70) {
        console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
    }
    else {
        console.log("PEGA LEAO");
    }

}