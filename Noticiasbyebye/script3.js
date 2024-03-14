document.addEventListener('DOMContentLoaded', function() {
    const imagemClicavel = document.querySelectorAll('.imagem-clicavel');
    const downloadScreen = document.querySelectorAll('.download-screen');
    const downloadButton = document.querySelectorAll('.download-button');

    imagemClicavel.forEach((imagem, index) => {
        imagem.addEventListener('click', function() {
            downloadScreen[index].classList.remove('hidden');
            // Adiciona um pequeno atraso para garantir que a classe 'hidden' seja removida antes de aplicar a transição
            setTimeout(() => {
                downloadScreen[index].style.opacity = '1';
            }, 50);
        });
    });

    // Adiciona um event listener para capturar o clique fora da caixa de download
    document.addEventListener('click', function(event) {
        downloadScreen.forEach((screen, index) => {
            if (!screen.contains(event.target) && !imagemClicavel[index].contains(event.target)) {
                screen.style.opacity = '0';
                // Adiciona um pequeno atraso antes de ocultar a caixa
                setTimeout(() => {
                    screen.classList.add('hidden');
                }, 300); // Tempo correspondente à duração da transição CSS
            }
        });
    });

    downloadButton.forEach((button, index) => {
        button.addEventListener('click', function() {
            let url, filename;
            if (index === 0) {
                url = 'DownloadSkins/nerd.png';
                filename = 'nerd.png';
            } else if (index === 1) {
                url = 'DownloadSkins/gatoarabe.png';
                filename = 'gatoarabe.png';
            } else if (index === 2) {
                url = 'DownloadSkins/negro.png';
                filename = 'negro.png';
            } else if (index === 3) {
                url = 'DownloadSkins/skin1.png';
                filename = 'skin1.png';
            } else if (index === 4) {
                url = 'DownloadSkins/skin2.png';
                filename = 'skin2.png';
            } else if (index === 5) {
                url = 'DownloadSkins/skin3.png';
                filename = 'skin3.png';
            } else if (index === 6) {
                url = 'DownloadSkins/skin4.png';
                filename = 'skin4.png';
            } else if (index === 7) {
                url = 'DownloadSkins/skin5.png';
                filename = 'skin5.png';
            } else if (index === 8) {
                url = 'DownloadSkins/skin6.png';
                filename = 'skin6.png';
            } else if (index === 9) {
                url = 'DownloadSkins/skin7.png';
                filename = 'skin7.png';
            } else if (index === 10) {
                url = 'DownloadSkins/skin8.png';
                filename = 'skin8.png';
            }

            fetch(url)
                .then(response => response.blob())
                .then(blob => {
                    const blobURL = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = blobURL;
                    a.download = filename;
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(blobURL);
                    document.body.removeChild(a);
                })
                .catch(error => console.error('Erro ao realizar o download:', error));
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 90) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('logoLink').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});
