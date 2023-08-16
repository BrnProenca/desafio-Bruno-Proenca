class CaixaDaLanchonete {
    constructor() {
        this.cardapio = {
            "cafe": {
                "descricao": "Café",
                "valor": 3.00,
            },
            "chantily": {
                "descricao": "Chantily (extra do café)",
                "valor": 1.50,
            },
            "suco": {
                "descricao": "Suco Natural",
                "valor": 6.20,
            },
            "sanduiche": {
                "descricao": "Sanduíche",
                "valor": 6.50,
            },
            "queijo": {
                "descricao": "Queijo (extra do sanduíche)",
                "valor": 2.00,
            },
            "salgado": {
                "descricao": "Salgado",
                "valor": 7.25,
            },
            "combo1": {
                "descricao": "1 suco e 1 sanduíche",
                "valor": 9.50,
            },
            "combo2": {
                "descricao": "1 café e 1 sanduíche",
                "valor": 7.50,
            },
        };

        this.formasDePagamento = ["dinheiro", "debito", "credito"];
    }

    calcularValorDaCompra(formaDePagamento, itens) {
        // Inicializa o valor total da compra em 0
        let valorTotal = 0;

        // Valida a forma de pagamento
        if (!this.formasDePagamento.includes(formaDePagamento)) {
            return "Forma de pagamento inválida";
        }

        // Valida se há itens no carrinho
        if (itens.length === 0) {
            return "Não há itens no carrinho";
        }

        // Itera itens no carrinho
        for (let item of itens) {
            // Separa o código do item e a quantidade
            let [codigo, quantidade] = item.split(" ");

            // Valida o código do item
            if (!this.cardapio.hasOwnProperty(codigo)) {
                return "Item inválido";
            }

            // Valida a quantidade do item
            quantidade = parseInt(quantidade);
            if (isNaN(quantidade) || quantidade < 1) {
                return "Quantidade inválida";
            }

            // Calcula o valor do item
            let valorItem = this.cardapio[codigo].valor * quantidade;

            // Adiciona o valor do item ao valor total
            valorTotal += valorItem;

            // Se o item for um extra, verificar se o item principal está no carrinho
            if (codigo !== "chantily" && codigo !== "queijo") {
                let itemPrincipal = codigo === "combo1" ? "suco" : "cafe";
                if (!itens.includes(itemPrincipal + " " + quantidade)) {
                    return "Item extra não pode ser pedido sem o principal";
                }
            }
        }

        // Aplica o desconto para pagamento em dinheiro
        if (formaDePagamento === "dinheiro") {
            valorTotal = valorTotal * 0.95;
        }

        // Aplica o acréscimo para pagamento em crédito
        if (formaDePagamento === "credito") {
            valorTotal = valorTotal * 1.03;
        }

        return valorTotal.toFixed(2);
    }
}

export { CaixaDaLanchonete };
