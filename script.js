var produtos = [
    { nome: 'Super Mario Boné', preco: 69.99, imagem: 'imagens/produto1.jpg' },
    { nome: 'Picareta Minecraft', preco: 89.99, imagem: 'imagens/produto2.jpg' },
    { nome: 'Hollow Knight Ferrão', preco: 99.99, imagem: 'imagens/produto3.jpg' },
    { nome: 'Botas do Sonic', preco: 99.99, imagem: 'imagens/produto4.jpg' },

    { nome: 'Camiseta Super Mario', preco: 29.99, imagem: 'imagens/produto5.jpg' },
    { nome: 'Super Luigi Boné', preco: 69.99, imagem: 'imagens/produto6.jpg' },
    { nome: 'Pokebola', preco: 59.99, imagem: 'imagens/produto7.jpg' },
    { nome: 'The Legend of Zelda: Master Sword', preco: 99.99, imagem: 'imagens/produto8.jpg' }
  ];

  criarProdutos() 
  function criarProdutos() {
    var container = document.getElementById('container');

    produtos.forEach(produto => {
      var div = document.createElement('div');
      
      var img = document.createElement('img');
      img.src = produto.imagem;
      div.appendChild(img);
      
      var pNome = document.createElement('p');
      pNome.textContent = produto.nome;
      div.appendChild(pNome);
      
      var pPreco = document.createElement('p');
      pPreco.textContent = `R$ ${produto.preco.toFixed(2)}`;
      div.appendChild(pPreco);
      
      var botao = document.createElement('button');
      botao.textContent = 'Comprar';
      div.appendChild(botao);
      
      container.appendChild(div);
    });
  }
  