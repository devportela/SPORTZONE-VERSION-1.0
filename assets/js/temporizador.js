
    // Define o tempo de expiração (exemplo: 1 hora a partir de agora)
    var countDownDate = new Date().getTime() + 60 * 60 * 1000;

    // Atualiza o temporizador a cada 1 segundo
    var x = setInterval(function() {
        // Pega a data e hora atuais
        var now = new Date().getTime();
        
        // Calcula a diferença entre a data atual e a data final
        var distance = countDownDate - now;

        // Calcula os minutos e segundos restantes
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Exibe o tempo restante no elemento com id="timer"
        document.getElementById("timer").innerHTML = "Oferta expira em " + minutes + "m " + seconds + "s ";

        // Se o tempo acabar
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "Oferta Expirada!";
            document.getElementById("timer").classList.add('expired'); // Muda a cor para laranja-avermelhada quando expirar
        }
    }, 1000);

