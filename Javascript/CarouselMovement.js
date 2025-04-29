let currentIndex = 0;
function moveCarousel(direction) {
    const grid = document.querySelector('.destination-grid');
    const cards = document.querySelectorAll('.destination-card');
    const totalCards = cards.length;
    const cardsPerView = 3;

    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalCards - cardsPerView;
    } else if (currentIndex > totalCards - cardsPerView) {
        currentIndex = 0;
    }
    const offset = -currentIndex * (100 / cardsPerView);
    grid.style.transform = `translateX(${offset}%)`;
}