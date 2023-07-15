const rendaMensalEmCentavos = 300000;
var mesesDecorridos = 12;
var totalJaPagoPeloAluno = 1000000;
var faltaPagar = 1800000000;

faltaPagar -= totalJaPagoPeloAluno;

if (rendaMensalEmCentavos > 200000) {
    var descontoDoSalario = rendaMensalEmCentavos * 0.18;
    //while ((faltaPagar > 0) || (mesesDecorridos < 61)) {
    //totalJaPagoPeloAluno += descontoDoSalario;
    //faltaPagar -= descontoDoSalario;
    //mesesDecorridos++;
    //}
    console.log("O valor da parcela desse mês é R$ " + descontoDoSalario / 100);
}