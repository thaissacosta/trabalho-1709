let inventario = [
    { nome: 'Teclado', preco: 100, emEstoque: true },
    { nome: 'Mouse', preco: 50, emEstoque: false },
    { nome: 'Monitor', preco: 600, emEstoque: true },
    { nome: 'Impressora', preco: 300, emEstoque: true },
    { nome: 'Webcam', preco: 150, emEstoque: false },
    { nome: 'Microfone', preco: 200, emEstoque: true },
    { nome: 'Headset', preco: 250, emEstoque: true },
    { nome: 'Cadeira Gamer', preco: 1200, emEstoque: true },
    { nome: 'Mesa', preco: 500, emEstoque: false },
    { nome: 'Luminária', preco: 80, emEstoque: true },
    { nome: 'Fone de Ouvido', preco: 70, emEstoque: true },
    { nome: 'Carregador', preco: 90, emEstoque: true },
    { nome: 'Pen Drive', preco: 40, emEstoque: false },
    { nome: 'Caixa de Som', preco: 180, emEstoque: true },
    { nome: 'Roteador', preco: 130, emEstoque: true }
  ];
  
inventario.push({ nome: 'Laptop', preco: 2500, emEstoque: true });
inventario.pop();
inventario[0].preco = 120;
inventario[2].emEstoque = false;
for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].emEstoque) {
      console.log(inventario[i].nome + ' está em estoque.');
    }
  }
  let produtosEmEstoque = inventario.filter(produto => produto.emEstoque);
console.log(produtosEmEstoque);