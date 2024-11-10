  // Função para carregar o footer
    function loadFooter() {
        fetch('footer.html') // Caminho para o arquivo footer.html
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
    }

    // Carregar o footer quando a página for carregada
    window.onload = loadFooter;