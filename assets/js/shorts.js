
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
    const card = element.closest(".product-card");
    const productName = card.dataset.name;
    const productImage = card.querySelector("img").src;
    const productPrice = card.querySelector(".card-price").textContent;
  
    // Obter favoritos armazenados
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
    // Verificar se já está nos favoritos
    const existingFavorite = favorites.find(item => item.name === productName);
  
    if (existingFavorite) {
      // Remover dos favoritos
      favorites = favorites.filter(item => item.name !== productName);
      element.classList.remove("favorited"); // Alterar visual do botão
    } else {
      // Adicionar aos favoritos
      favorites.push({ name: productName, image: productImage, price: productPrice });
      element.classList.add("favorited");
    }
  
    // Atualizar localStorage
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
  
  