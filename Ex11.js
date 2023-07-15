const rendaMensalEmCentavos = 150000;
var mesesDecorridos = 12;
var totalJaPagoPeloAluno = 1000000;
var faltaPagar = 1800000000;

faltaPagar -= totalJaPagoPeloAluno;

if (rendaMensalEmCentavos > 200000) {
    var descontoDoSalario = rendaMensalEmCentavos * 0.18;
    while ((faltaPagar > 0) || (mesesDecorridos < 61)) {
        if (faltaPagar <= descontoDoSalario) {
            faltaPagar -= descontoDoSalario;
            faltaPagar *= -1;
            console.log("O valor da parcela desse mês é R$ " + faltaPagar / 100);
            console.log("Essa será a sua ")
        }
        totalJaPagoPeloAluno += descontoDoSalario;
        faltaPagar -= descontoDoSalario;
        mesesDecorridos++;
        console.log("O valor da parcela desse mês é R$ " + descontoDoSalario / 100);
    }
}
else {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.");
}