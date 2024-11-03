// Carregar as configurações salvas no localStorage quando a página é carregada
window.onload = function() {
    // Carregar o tema
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.getElementById('themeSelect').value = savedTheme;
        updateTheme(savedTheme); // Atualiza o tema baseado na configuração salva
    }

    // Carregar notificações por e-mail
    const savedNotifications = localStorage.getItem('emailNotifications');
    if (savedNotifications) {
        document.getElementById('emailNotifications').value = savedNotifications;
    }

    // Carregar privacidade: Compartilhar dados
    const savedDataSharing = localStorage.getItem('dataSharing');
    document.getElementById('dataSharing').checked = savedDataSharing === 'true';

    // Carregar privacidade: Mostrar perfil
    const savedShowProfile = localStorage.getItem('showProfile');
    document.getElementById('showProfile').checked = savedShowProfile === 'true';
};

// Função para atualizar o tema
function updateTheme(theme) {
    const body = document.body;
    if (theme === 'dark') {
        body.classList.add('bg-gray-900', 'text-white');
        body.classList.remove('bg-gray-100', 'text-gray-700');
    } else {
        body.classList.add('bg-gray-100', 'text-gray-700');
        body.classList.remove('bg-gray-900', 'text-white');
    }
}

// Salvar as configurações no localStorage ao clicar no botão "Salvar"
document.getElementById("saveBtn").addEventListener("click", function () {
    // Obter valores das opções
    const theme = document.getElementById("themeSelect").value;
    const emailNotifications = document.getElementById("emailNotifications").value;
    const dataSharing = document.getElementById("dataSharing").checked;
    const showProfile = document.getElementById("showProfile").checked;

    // Salvar valores no localStorage
    localStorage.setItem('theme', theme);
    localStorage.setItem('emailNotifications', emailNotifications);
    localStorage.setItem('dataSharing', dataSharing);
    localStorage.setItem('showProfile', showProfile);

    // Atualizar o tema
    updateTheme(theme);

    // Exibir mensagem de sucesso
    alert("Configurações salvas com sucesso!");
});
