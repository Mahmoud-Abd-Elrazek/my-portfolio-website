window.addEventListener('scroll', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
  
    timelineItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        item.classList.add('visible');
      }
    });
});