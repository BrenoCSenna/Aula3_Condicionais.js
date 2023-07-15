var diaNumericoDaSemana = [1, 2, 3, 4, 5, 6, 7];
var NomeDoDiaDaSemana = ["Segunda feira", "Terça feira", "Quarta feira", "Quinta feira", "Sexta feira", "Sábado", "Domingo"];
const diaDaSemana = 3;
var verifica = false;

for (var i = 1; i < NomeDoDiaDaSemana.length; i++) {
    if (diaDaSemana === diaNumericoDaSemana[i]) {
        console.log(NomeDoDiaDaSemana[i]);
        verifica = true;
        break;
    }
}
if (!verifica) {
    console.log("O dia da semana informado não é válido.");
}