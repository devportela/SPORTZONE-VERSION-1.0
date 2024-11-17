
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
