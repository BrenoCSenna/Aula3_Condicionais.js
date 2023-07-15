
var verifica = false;
const tipoDePagamento = "credito";
const valorDoProduto = 13000;

switch (tipoDePagamento) {
    case "dinheiro":
        valorComDesconto = valorDoProduto * 0.9;
        console.log("Valor a ser pago: R$" + valorComDesconto / 100);
        verifica = true;
        break;

    case "debito":
        valorComDesconto = valorDoProduto * 0.9;
        console.log("Valor a ser pago: R$" + valorComDesconto / 100);
        verifica = true;
        break;

    case "cheque":
        valorComDesconto = valorDoProduto * 0.97;
        console.log("Valor a ser pago: R$" + valorComDesconto / 100);
        verifica = true;
        break;

    case "credito":
        valorComDesconto = valorDoProduto * 0.95;
        console.log("Valor a ser pago: R$" + valorComDesconto / 100);
        verifica = true;
        break;
}
if (!verifica) {
    console.log("Opção Incorreta");
    return;
}