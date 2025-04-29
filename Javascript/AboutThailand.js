    // Collapsible Cards
    const aboutCards = document.querySelectorAll('.about-card');

    aboutCards.forEach(card => {
        const header = card.querySelector('.about-card-header');
        const content = card.querySelector('.about-card-content');

        header.addEventListener('click', () => {
            // Close all other cards
            aboutCards.forEach(otherCard => {
                if (otherCard !== card && otherCard.classList.contains('active')) {
                    otherCard.classList.remove('active');
                }
            });

            // Toggle the clicked card
            card.classList.toggle('active');
        });
    });
