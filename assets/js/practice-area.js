document.addEventListener("DOMContentLoaded", function () {
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    const practiceCards = document.querySelectorAll('.practice-card');

    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const parentCard = this.closest('.practice-card');
            const serviceInfo = parentCard.querySelector('.service-info');
            const buttonText = this;

            // Toggle expanded class
            parentCard.classList.toggle('expanded');

            if (parentCard.classList.contains('expanded')) {
                serviceInfo.style.display = 'block';  
                buttonText.textContent = 'Close';  
            } else {
                serviceInfo.style.display = 'none';  
                buttonText.textContent = 'Learn More';  
            }

            // Close other expanded cards
            practiceCards.forEach(card => {
                if (card !== parentCard) {
                    card.classList.remove('expanded');
                    card.querySelector('.service-info').style.display = 'none';
                    card.querySelector('.learn-more').textContent = 'Learn More';
                }
            });
        });
    });
});
