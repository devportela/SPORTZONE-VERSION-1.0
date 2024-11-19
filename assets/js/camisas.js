
// Função para pesquisar produtos
function searchProducts() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    const productName = card.getAttribute('data-name').toLowerCase();
    if (productName.includes(searchInput)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
// Função para alternar o estado de favorito
function toggleFavorite(element) {
  // Alterna a classe 'favorited' no ícone de coração
  element.classList.toggle('favorited');
  
  // Verifica se o item foi favoritado
  if (element.classList.contains('favorited')) {
    // Se favoritado, mudar a cor para vermelho e logar no console
    element.style.color = '#ff0000';  // Cor do ícone quando favoritado
    console.log('Produto favoritado!');
    
    // Aqui você pode adicionar mais funcionalidades, como salvar no localStorage ou no banco de dados
  } else {
    // Se não for mais favoritado, mudar para a cor inicial e logar no console
    element.style.color = '#ff4757';  // Cor do ícone quando não favoritado
    console.log('Produto removido dos favoritos!');
  }
}
