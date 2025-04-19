// Tworzenie falujących linii
function createWaveLines(container) {
  for (let i = 0; i < 20; i++) {
    const line = document.createElement('div');
    line.classList.add('wave-line');
    line.style.top = `${(i / 20) * 100}%`;
    container.appendChild(line);
  }
}

document.querySelectorAll('.wave-bg').forEach(bg => createWaveLines(bg));

// Animacja falujących linii
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

// Animacja nawigacji
anime({
  targets: '.nav-link, .theme-toggle, .music-toggle',
  opacity: [0, 1],
  translateX: [50, 0],
  scale: [0.5, 1],
  rotate: [0, 360],
  easing: 'easeOutElastic(1, 0.6)',
  duration: 600,
  delay: anime.stagger(150)
});

// Animacja sekcji
anime({
  targets: '.section',
  opacity: [0, 1],
  translateY: [50, 0],
  easing: 'easeOutExpo',
  duration: 800,
  delay: anime.stagger(200)
});

// Animacja tytułu
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

// Animacja tekstu
anime({
  targets: '.animate-text',
  opacity: [0, 1],
  translateY: [20, 0],
  textShadow: ['0 0 0 rgba(155, 89, 182, 0)', '0 0 10px rgba(155, 89, 182, 0.5)'],
  easing: 'easeOutExpo',
  duration: 500,
  delay: 100
});

// Animacja kart projektów
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

// Animacja kart ulubionych
anime({
  targets: '.animate-favorite',
  opacity: [0, 1],
  translateY: [100, 0],
  rotateX: [45, 0],
  rotateY: [45, 0],
  scale: [0.8, 1],
  easing: 'easeOutElastic(1, 0.6)',
  duration: 800,
  delay: anime.stagger(200)
});

// Animacja ikon ulubionych
anime({
  targets: '.favorite-icon',
  opacity: [0, 1],
  scale: [0, 1],
  rotate: [0, 360],
  easing: 'easeOutElastic(1, 0.6)',
  duration: 800,
  delay: anime.stagger(100, {start: 200})
});

// Animacja obramowania i cienia kart projektów i ulubionych
anime({
  targets: '.project-card, .favorites-card',
  borderColor: ['#9B59B6', 'transparent'],
  boxShadow: ['0 0 0 rgba(155, 89, 182, 0)', '0 0 30px rgba(155, 89, 182, 0.8)'],
  easing: 'easeInOutSine',
  duration: 1200,
  loop: true,
  delay: anime.stagger(300)
});

// Efekt hover dla kart projektów i ulubionych
document.querySelectorAll('.project-card, .favorites-card').forEach(card => {
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

// Gładkie przewijanie dla nawigacji
document.querySelectorAll('.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Przełączanie motywu
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  const isLightTheme = document.body.classList.contains('light-theme');
  themeToggle.textContent = isLightTheme ? '🌞' : '🌙';
  localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
});

// Ładowanie zapisanego motywu
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.body.classList.add('light-theme');
  themeToggle.textContent = '🌞';
} else {
  themeToggle.textContent = '🌙';
}

// Visualizer muzyczny z Three.js
const canvas = document.getElementById('visualizer');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 50;

const bars = [];
const barCount = 64;
const barWidth = 1;
const barGap = 0.2;
const audio = new Audio('assets/background.mp3');
audio.loop = true;
audio.volume = 0.4; // Głośność na 40%

let audioContext = null;
let source = null;
let analyser = null;
let frequencyData = null;

function initAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    source = audioContext.createMediaElementSource(audio);
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 128;
    source.connect(analyser);
    analyser.connect(audioContext.destination);
    frequencyData = new Uint8Array(analyser.frequencyBinCount);
  }
}

// Tworzenie prętów visualizera
for (let i = 0; i < barCount; i++) {
  const geometry = new THREE.BoxGeometry(barWidth, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x9B59B6 });
  const bar = new THREE.Mesh(geometry, material);
  bar.position.x = (i - barCount / 2) * (barWidth + barGap);
  scene.add(bar);
  bars.push(bar);
}

function animateVisualizer() {
  if (audio.paused || !analyser) {
    renderer.render(scene, camera); // Renderuj pustą scenę, jeśli muzyka jest zatrzymana
    return;
  }
  requestAnimationFrame(animateVisualizer);
  analyser.getByteFrequencyData(frequencyData);
  bars.forEach((bar, i) => {
    const scale = frequencyData[i] / 255 * 20;
    bar.scale.y = Math.max(0.1, scale);
    const colorValue = 0x4B0082 + (i / barCount) * (0x9B59B6 - 0x4B0082);
    bar.material.color.setHex(colorValue);
  });
  renderer.render(scene, camera);
}

// Uruchom animację visualizera
animateVisualizer();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Przełączanie muzyki i visualizera
const musicToggle = document.querySelector('.music-toggle');
musicToggle.addEventListener('click', () => {
  if (!audioContext) {
    initAudioContext(); // Inicjalizacja AudioContext przy pierwszej interakcji
  }
  if (audio.paused) {
    audio.play().then(() => {
      musicToggle.textContent = '⏸️';
      localStorage.setItem('music', 'on');
    }).catch(error => {
      console.error('Failed to play audio:', error);
      musicToggle.textContent = '▶️';
    });
  } else {
    audio.pause();
    musicToggle.textContent = '▶️';
    localStorage.setItem('music', 'off');
  }
});

// Ładowanie zapisanego stanu muzyki
const savedMusicState = localStorage.getItem('music');
if (savedMusicState !== 'off') {
  initAudioContext();
  audio.play().then(() => {
    musicToggle.textContent = '⏸️';
  }).catch(error => {
    console.error('Failed to play audio on load:', error);
    musicToggle.textContent = '▶️';
  });
} else {
  musicToggle.textContent = '▶️';
}
