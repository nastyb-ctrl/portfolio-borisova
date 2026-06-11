const light = document.querySelector('.cursor-light');

window.addEventListener('mousemove', (event) => {
  light.style.left = `${event.clientX}px`;
  light.style.top = `${event.clientY}px`;
});

const revealItems = document.querySelectorAll('.section, .work-item, .skill-grid article, .terminal-card');

revealItems.forEach((item) => item.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));


// Click glow for work cards
document.querySelectorAll('.work-item').forEach((card) => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.work-item').forEach((item) => {
      if (item !== card) item.classList.remove('active-glow');
    });
    card.classList.toggle('active-glow');
  });
});
