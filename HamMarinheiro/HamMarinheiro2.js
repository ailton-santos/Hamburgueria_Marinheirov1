function cardapio() {
    // Obter os valores dos campos do formulário e verificar a validade das entradas
    var qtdSalgado01 = parseInt(document.getElementById("qtd01").value) || 0;
    var qtdSalgado02 = parseInt(document.getElementById("qtd02").value) || 0;
    var qtdSalgado03 = parseInt(document.getElementById("qtd03").value) || 0;
    var qtdSalgado04 = parseInt(document.getElementById("qtd04").value) || 0;
    var qtdSalgado05 = parseInt(document.getElementById("qtd05").value) || 0;
    var qtdSalgado06 = parseInt(document.getElementById("qtd06").value) || 0;

    // Verificar se alguma quantidade é negativa e alertar o usuário
    if (
        qtdSalgado01 < 0 ||
        qtdSalgado02 < 0 ||
        qtdSalgado03 < 0 ||
        qtdSalgado04 < 0 ||
        qtdSalgado05 < 0 ||
        qtdSalgado06 < 0
    ) {
        alert("As quantidades não podem ser negativas. Por favor, insira valores válidos.");
        return;
    }

    // Preços dos salgados
    var preco01 = 1.20;
    var preco02 = 1.30;
    var preco03 = 1.50;
    var preco04 = 1.20;
    var preco05 = 1.30;
    var preco06 = 1.00;

    // Calculando o total de cada item
    var total01 = preco01 * qtdSalgado01;
    var total02 = preco02 * qtdSalgado02;
    var total03 = preco03 * qtdSalgado03;
    var total04 = preco04 * qtdSalgado04;
    var total05 = preco05 * qtdSalgado05;
    var total06 = preco06 * qtdSalgado06;

    // Calculando o total da compra
    var valorCompra = total01 + total02 + total03 + total04 + total05 + total06;

    // Aplicar desconto para compras acima de R$ 10,00
    if (valorCompra > 10) {
        var desconto = 0.10; // 10% de desconto
        valorCompra = valorCompra - (valorCompra * desconto);
        alert(`Você recebeu um desconto de 10%! O novo total é R$ ${valorCompra.toFixed(2)}`);
    }

    // Exibir mensagens específicas baseadas em condições
    if (qtdSalgado06 >= 3) {
        alert("Você comprou 3 ou mais refrigerantes. Que tal um hambúrguer para acompanhar?");
    } else if (valorCompra > 15) {
        alert("Você fez uma compra grande! Aproveite um cupom de desconto em sua próxima visita.");
    } else if (qtdSalgado01 >= 5 || qtdSalgado04 >= 5) {
        alert("Compras grandes de cachorro-quente ou hambúrguer! Obrigado pela preferência.");
    } else if (valorCompra === 0) {
        alert("Você não selecionou nenhum item. Por favor, escolha algum produto.");
        return; // Não continua se a compra for zero
    } else {
        alert("Obrigado pela sua compra! Volte sempre.");
    }

    // Exibir o total da compra
    document.getElementById("pre").value = valorCompra.toFixed(2);
}
