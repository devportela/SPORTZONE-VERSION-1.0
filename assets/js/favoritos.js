document.addEventListener("DOMContentLoaded", () => {
    const favoritesContainer = document.getElementById("favorites-container");
  
    // Recuperar favoritos do localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
    if (favorites.length === 0) {
      favoritesContainer.innerHTML = `<p class="text-center">Nenhuma camisa favorita encontrada.</p>`;
      return;
    }
  
    // Gerar HTML para os favoritos
    favorites.forEach(item => {
      const card = `
        <div class="col-md-4">
          <div class="card bg-light shadow-lg rounded-lg overflow-hidden">
            <img src="${item.image}" class="card-img-top" alt="${item.name}">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-price text-danger">${item.price}</p>
            </div>
          </div>
        </div>
      `;
      favoritesContainer.innerHTML += card;
    });
  });

  
  