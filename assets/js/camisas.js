
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

// Função para favoritar produtos
function toggleFavorite(element) {
  element.classList.toggle('favorited');
  const productName = element.closest('.product-card').getAttribute('data-name');
  if (element.classList.contains('favorited')) {
    addToComparison(productName);
  } else {
    removeFromComparison(productName);
  }
}

const comparisonList = [];

function addToComparison(productName) {
  if (!comparisonList.includes(productName)) {
    comparisonList.push(productName);
  }
}

function removeFromComparison(productName) {
  const index = comparisonList.indexOf(productName);
  if (index > -1) {
    comparisonList.splice(index, 1);
  }
}

function showComparison() {
  const compareProducts = document.getElementById('compareProducts');
  compareProducts.innerHTML = '';
  comparisonList.forEach(product => {
    compareProducts.innerHTML += `<div class="compare-product">${product}</div>`;
  });
  document.getElementById('compareSection').style.display = comparisonList.length > 0 ? 'block' : 'none';
}

