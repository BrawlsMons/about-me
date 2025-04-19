function createWaveLines(container) {
    for (let i = 0; i < 20; i++) {
      const line = document.createElement('div');
      line.classList.add('wave-line');
      line.style.top = `${(i / 20) * 100}%`;
      container.appendChild(line);
    }
  }
  
  document.querySelectorAll('.wave-bg').forEach(bg => createWaveLines(bg));
  
  anime({
    targets: '.wave-line',
    translateY: () => anime.random(-50, 50),
    opacity: [0, 0.7, 0],
    scaleX: [0.8, 1.2],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: anime.stagger(100),
    loop: true
  });
  
  anime({
    targets: '.nav-link',
    opacity: [0, 1],
    translateX: [50, 0],
    scale: [0.5, 1],
    rotate: [0, 360],
    easing: 'easeOutElastic(1, 0.6)',
    duration: 600,
    delay: anime.stagger(150)
  });
  
  anime({
    targets: '.section',
    opacity: [0, 1],
    translateY: [50, 0],
    easing: 'easeOutExpo',
    duration: 800,
    delay: anime.stagger(200)
  });
  
  anime.timeline({ loop: true })
    .add({
      targets: '.animate-title',
      opacity: [0, 1],
      translateY: [50, 0],
      scale: [0.8, 1],
      easing: 'easeOutExpo',
      duration: 500
    })
    .add({
      targets: '.animate-title',
      textShadow: [
        '0 0 0 rgba(155, 89, 182, 0)',
        '0 0 20px rgba(155, 89, 182, 1)'
      ],
      easing: 'easeInOutQuad',
      duration: 600,
      direction: 'alternate'
    });
  
  anime({
    targets: '.animate-text',
    opacity: [0, 1],
    translateY: [20, 0],
    textShadow: ['0 0 0 rgba(155, 89, 182, 0)', '0 0 10px rgba(155, 89, 182, 0.5)'],
    easing: 'easeOutExpo',
    duration: 500,
    delay: 100
  });
  
  anime({
    targets: '.animate-project',
    opacity: [0, 1],
    translateY: [100, 0],
    rotateX: [45, 0],
    rotateY: [45, 0],
    scale: [0.8, 1],
    easing: 'easeOutElastic(1, 0.6)',
    duration: 800,
    delay: anime.stagger(200)
  });
  
  anime({
    targets: '.project-card',
    borderColor: ['#9B59B6', 'transparent'],
    boxShadow: ['0 0 0 rgba(155, 89, 182, 0)', '0 0 30px rgba(155, 89, 182, 0.8)'],
    easing: 'easeInOutSine',
    duration: 1200,
    loop: true,
    delay: anime.stagger(300)
  });
  
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      anime({
        targets: card,
        scale: 1.1,
        rotateX: 10,
        rotateY: 10,
        boxShadow: '0 0 50px rgba(155, 89, 182, 1)',
        easing: 'easeOutQuad',
        duration: 200
      });
    });
    card.addEventListener('mouseleave', () => {
      anime({
        targets: card,
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        boxShadow: '0 0 20px rgba(155, 89, 182, 0)',
        easing: 'easeOutQuad',
        duration: 200
      });
    });
  });
  
  document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });