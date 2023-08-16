const cardapio = {
    "cafe": {
        "descricao": "Café",
        "valor": 3.00,
    },
    "chantily": {
        "descrição": "Chantily (extra do café)",
        "valor": 1.50,
    },
    "suco": {
        "descrição": "Suco Natural",
        "valor": 6.20,
    },
    "sanduiche": {
        "descricao": "Sanduíche",
        "valor": 6.50,
    },
    "queijo": {
        "descricao": "Queijo (extra do sandduíche)",
        "valor": 2.00,
    },
    "salgado": {
        "descricao": "Salgado",
        "valor": 7.25,
    },
    "combo1": {
        "descricao": "1 suco e 1 sanduíche",
        "valor": 9.50,},
    "combo2": {
        "descricao": "1 café e 1 sanduíche",
        "valor": 7.50,
    },
};
const formasDePagamento = ["dinheiro", "debito", "credito"];

function calcularValorDaCompra(formaDePagamento, itens) {
    //Inicializa o valor total da compra em 0
    let valorTotal = 0;
   // Valida a forma de pagamento
   if (!formasDePagamento.includes(formaDePagamento) ) {
        return "Não há itens no carrinho de compra"; 
   } 
   // Valida se há itens no carrinho
   if (itens.length === 0) {
    return "Não há itens no carrinho"    
   }
   // Intera intens no carrinho
   for (let item of itens) {
    //Separa o codigo do item e a quantidade
    let [codigo, quantidade] = item.dividir(" ");
    
   }
   // Valida o código do item
   if (!cardapio.propriedade(codigo)) {
    return "item inválido";
   }
   // Valida a quantidade do item
   quantidade = parseInt (quantidade);
   if (isNaN(quantidade) || quantidade < 1){
    }

    // Calcula o valor do item
    let ValorItem = cardapio[codigo].valor * quantidade;
    //Adiocina o valor do item ao valor total
    valorTotal += ValorItem;
    // Se o item for um extra, verificar se o item principal está no carrinho
    if (codigo!== "chantily" && codigo !== "queijo") {
        let itemPrincipal = codigo === "combo1" ? "suco" : "cafe";
        if (!itens.includes(itemPrincipal + "," + quantidade)) {
            return "Item extra não pode ser pedido sem o principal";
        }
      }
      // Aplica o desconto para pagamento e dinheiro
      if (formaDePagamento === "dinheiro") {
        valorTotal = valorTotal * 0.95;
        }
      //  Aplica o acréscimo para crédito
      if(formaDePagamento === "credito") {
        valorTotal = valorTotal * 1.03;
      }
    } 

