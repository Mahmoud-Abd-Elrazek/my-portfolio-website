// Add scroll animation to make video cards visible
window.addEventListener('scroll', () => {
    const videoCards = document.querySelectorAll('.video-card');
  
    videoCards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        card.classList.add('visible');
      }
    });
  });
  