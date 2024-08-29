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
