const produtos = [
  { nome: "Maçã", preco: 3, quantidade: 5 },
  { nome: "Pão", preco: 2, quantidade: 2 },
  { nome: "Leite", preco: 4, quantidade: 1 },
  { nome: "Ovos", preco: 0.5, quantidade: 12 }
];

produtos.forEach(function(produto){
    console.log("Voce comprou " + produto.quantidade +" Unidades de " + produto.nome +" totalizando um total de " + produto.preco);
});
