const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

 document.querySelectorAll('.feat-card, .step, .testi-card').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity .55s ease ${i * 0.07}s, transform .55s ease ${i * 0.07}s`;
    observer.observe(el);
  });
