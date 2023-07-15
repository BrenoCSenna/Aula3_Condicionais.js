const valorDoProduto = 1_000;
const quantidadeDoParcelamento = 10;
const valorPago = 300;

var valorDaParcela = valorDoProduto / quantidadeDoParcelamento;
var numeroDeParcelasRestantes = (valorDoProduto - valorPago) / valorDaParcela;

console.log(`Restam ${numeroDeParcelasRestantes} parcelas de R$${valorDaParcela}`);