document.addEventListener('DOMContentLoaded', () => {
    const animatedTexts = document.querySelectorAll('.animated-text');

    animatedTexts.forEach(text => {
        text.addEventListener('mouseover', () => {
            text.style.color = '#ff6f61'; // Cor ao passar o mouse
            text.style.textShadow = '2px 2px 5px rgba(255, 105, 97, 0.7)'; // Sombra ao passar o mouse
        });

        text.addEventListener('mouseout', () => {
            text.style.color = '#DB7093'; // Cor original
            text.style.textShadow = 'none'; // Remove a sombra ao sair
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const animatedImage = document.querySelector('.animated-image');

    animatedImage.addEventListener('mouseover', () => {
        // Inicia a animação de mover e aumentar
        animatedImage.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
        animatedImage.style.transform = 'translateX(20px) scale(1.1)';
        animatedImage.style.boxShadow = '0 0 15px rgba(255, 105, 97, 0.7)';
    });

    animatedImage.addEventListener('mouseout', () => {
        // Reverte a animação para a posição original
        animatedImage.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
        animatedImage.style.transform = 'translateX(0) scale(1)';
        animatedImage.style.boxShadow = 'none';
    });
});
