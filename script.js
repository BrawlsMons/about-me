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
  targets: '.nav-link, .theme-toggle, .music-toggle, .journey-toggle',
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

// Hero section animations
anime({
  targets: '.profile-image',
  opacity: [0, 1],
  scale: [0.5, 1],
  rotate: [0, 360],
  easing: 'easeOutElastic(1, 0.6)',
  duration: 1000,
  delay: 500
});

anime({
  targets: '.hero-title',
  opacity: [0, 1],
  translateY: [50, 0],
  scale: [0.8, 1],
  easing: 'easeOutExpo',
  duration: 800,
  delay: 700
});

anime({
  targets: '.hero-subtitle, .hero-description',
  opacity: [0, 1],
  translateY: [30, 0],
  easing: 'easeOutExpo',
  duration: 600,
  delay: anime.stagger(100, {start: 900})
});

anime({
  targets: '.stat-item',
  opacity: [0, 1],
  translateY: [50, 0],
  scale: [0.8, 1],
  easing: 'easeOutElastic(1, 0.6)',
  duration: 800,
  delay: anime.stagger(150, {start: 1100})
});

// About cards animation
anime({
  targets: '.about-card',
  opacity: [0, 1],
  translateY: [80, 0],
  scale: [0.9, 1],
  easing: 'easeOutElastic(1, 0.6)',
  duration: 800,
  delay: anime.stagger(200)
});

// Enhanced hover effects for stat items
document.querySelectorAll('.stat-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    anime({
      targets: item,
      scale: 1.05,
      rotate: '2deg',
      easing: 'easeOutQuad',
      duration: 200
    });
  });
  
  item.addEventListener('mouseleave', () => {
    anime({
      targets: item,
      scale: 1,
      rotate: '0deg',
      easing: 'easeOutQuad',
      duration: 200
    });
  });
});

// Enhanced hover effects for about cards
document.querySelectorAll('.about-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    anime({
      targets: card.querySelector('.about-icon'),
      scale: 1.2,
      rotate: '10deg',
      easing: 'easeOutElastic(1, 0.6)',
      duration: 300
    });
  });
  
  card.addEventListener('mouseleave', () => {
    anime({
      targets: card.querySelector('.about-icon'),
      scale: 1,
      rotate: '0deg',
      easing: 'easeOutElastic(1, 0.6)',
      duration: 300
    });
  });
});

// Continuous profile glow animation
anime({
  targets: '.profile-glow',
  scale: [0.8, 1.2],
  opacity: [0.3, 0.7],
  easing: 'easeInOutSine',
  duration: 2000,
  direction: 'alternate',
  loop: true
});

// Tech tags stagger animation
anime({
  targets: '.tech-tag',
  opacity: [0, 1],
  scale: [0.8, 1],
  translateY: [20, 0],
  easing: 'easeOutElastic(1, 0.6)',
  duration: 500,
  delay: anime.stagger(50)
});

// Project links animation
anime({
  targets: '.project-link',
  opacity: [0, 1],
  translateX: [-20, 0],
  easing: 'easeOutExpo',
  duration: 600,
  delay: anime.stagger(100, {start: 200})
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

// Visualizer muzyczny z Three.js - ULTRA ADVANCED VERSION
const canvas = document.getElementById('visualizer');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
camera.position.z = 100;

// Define exact brand color constants
const BRAND_BLUE = 0x667eea;      // Main blue from CSS
const BRAND_PURPLE_1 = 0x764ba2;  // Purple gradient 1
const BRAND_PURPLE_2 = 0x9B59B6;  // Main brand purple
const BRAND_PURPLE_3 = 0x944F96;  // Mid purple

// Advanced visualizer components
const bars = [];
const particles = [];
const waves = [];
const barCount = 128;
const particleCount = 500;
const waveCount = 3;

// Create particle system with brand colors
const particleGeometry = new THREE.BufferGeometry();
const particlePositions = new Float32Array(particleCount * 3);
const particleColors = new Float32Array(particleCount * 3);

// Brand color palette - exact CSS colors properly converted
const brandColors = [
  { r: 0.4, g: 0.494, b: 0.918, hex: 0x667eea }, // #667eea - Main blue
  { r: 0.463, g: 0.294, b: 0.635, hex: 0x764ba2 }, // #764ba2 - Purple gradient  
  { r: 0.608, g: 0.349, b: 0.714, hex: 0x9B59B6 }, // #9B59B6 - Brand purple
  { r: 0.580, g: 0.306, b: 0.588, hex: 0x944F96 }  // #944F96 - Mid purple
];

for (let i = 0; i < particleCount; i++) {
  particlePositions[i * 3] = (Math.random() - 0.5) * 400;
  particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 400;
  particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 400;
  
  // Use exact brand colors for particles
  const colorIndex = Math.floor(Math.random() * brandColors.length);
  const color = brandColors[colorIndex];
  particleColors[i * 3] = color.r;
  particleColors[i * 3 + 1] = color.g;
  particleColors[i * 3 + 2] = color.b;
}

particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

const particleMaterial = new THREE.PointsMaterial({
  size: 2,
  vertexColors: true,
  transparent: true,
  opacity: 0.8,
  blending: THREE.AdditiveBlending
});

const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particleSystem);

// Create 3D bars with exact brand colors
for (let i = 0; i < barCount; i++) {
  const geometry = new THREE.CylinderGeometry(0.8, 1.2, 1, 8);
  const material = new THREE.MeshPhongMaterial({ 
    color: BRAND_PURPLE_2, // Main brand purple
    transparent: true,
    opacity: 0.9,
    shininess: 100,
    emissive: BRAND_PURPLE_1, // Purple gradient as emissive
    emissiveIntensity: 0.1
  });
  const bar = new THREE.Mesh(geometry, material);
  
  const angle = (i / barCount) * Math.PI * 2;
  const radius = 50;
  bar.position.x = Math.cos(angle) * radius;
  bar.position.z = Math.sin(angle) * radius;
  bar.position.y = 0;
  
  scene.add(bar);
  bars.push(bar);
}

// Create wave rings with exact brand colors
for (let i = 0; i < waveCount; i++) {
  const geometry = new THREE.RingGeometry(20 + i * 15, 25 + i * 15, 32);
  const material = new THREE.MeshBasicMaterial({ 
    color: BRAND_BLUE, // Main brand blue
    transparent: true,
    opacity: 0.3,
    side: THREE.DoubleSide
  });
  const wave = new THREE.Mesh(geometry, material);
  wave.rotation.x = Math.PI / 2;
  wave.position.y = -20 - i * 5;
  scene.add(wave);
  waves.push(wave);
}

// Add lighting
const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(50, 50, 50);
scene.add(directionalLight);

const pointLight = new THREE.PointLight(BRAND_PURPLE_2, 2, 100);
pointLight.position.set(0, 0, 50);
scene.add(pointLight);

// Add fog for depth
scene.fog = new THREE.Fog(0x000000, 50, 200);

// Add even more spectacular effects
const sphereGeometry = new THREE.SphereGeometry(15, 32, 32);
const sphereMaterial = new THREE.MeshPhongMaterial({
  color: BRAND_PURPLE_2, // Main brand purple
  transparent: true,
  opacity: 0.3,
  wireframe: true
});
const centralSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(centralSphere);

// Create orbital rings
const orbitRings = [];
for (let i = 0; i < 5; i++) {
  const ringGeometry = new THREE.TorusGeometry(25 + i * 8, 2, 8, 32);
  const ringMaterial = new THREE.MeshPhongMaterial({
    color: BRAND_BLUE, // Main brand blue
    transparent: true,
    opacity: 0.4
  });
  const ring = new THREE.Mesh(ringGeometry, ringMaterial);
  ring.rotation.x = Math.PI / 2 + i * 0.3;
  ring.rotation.y = i * 0.5;
  scene.add(ring);
  orbitRings.push(ring);
}

// Add starfield background
const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1 });
const starVertices = [];

for (let i = 0; i < 1000; i++) {
  starVertices.push(
    (Math.random() - 0.5) * 1000,
    (Math.random() - 0.5) * 1000,
    (Math.random() - 0.5) * 1000
  );
}

starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

// Audio setup with better error handling
const audio = document.getElementById('background-music');
audio.volume = 0.3;
audio.loop = true;
audio.crossOrigin = "anonymous";

let audioContext = null;
let source = null;
let analyser = null;
let frequencyData = null;
let isPlaying = false;

function initAudioContext() {
  try {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    source = audioContext.createMediaElementSource(audio);
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 512; // Higher resolution for better visualization
    analyser.smoothingTimeConstant = 0.8;
    source.connect(analyser);
    analyser.connect(audioContext.destination);
    frequencyData = new Uint8Array(analyser.frequencyBinCount);
    console.log('AudioContext initialized successfully');
  } catch (error) {
    console.error('Failed to initialize AudioContext:', error);
  }
}

// Tworzenie prętów visualizera - ZASTĄPIONE POWYŻEJ ADVANCED VERSION

function animateVisualizer() {
  if (!isPlaying) {
    // Subtle animation when stopped - exact brand colors
    const time = Date.now() * 0.001;
    bars.forEach((bar, i) => {
      bar.scale.y = 0.1 + Math.sin(time + i * 0.1) * 0.05;
      bar.material.opacity = 0.3;
      // Cycle through brand colors slowly
      const brandColorHexes = [BRAND_BLUE, BRAND_PURPLE_1, BRAND_PURPLE_2];
      const colorIndex = Math.floor(time * 0.2 + i * 0.1) % brandColorHexes.length;
      bar.material.color.setHex(brandColorHexes[colorIndex]);
    });
    
    // Slow particle movement with brand colors
    const positions = particleSystem.geometry.attributes.position.array;
    const colors = particleSystem.geometry.attributes.color.array;
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3 + 1] += Math.sin(time + i) * 0.1;
      
      // Slow color cycling through brand colors
      const brandColorHexes = [BRAND_BLUE, BRAND_PURPLE_1, BRAND_PURPLE_2];
      const colorIndex = Math.floor(time * 0.1 + i * 0.01) % brandColorHexes.length;
      const color = new THREE.Color(brandColorHexes[colorIndex]);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    particleSystem.geometry.attributes.position.needsUpdate = true;
    particleSystem.geometry.attributes.color.needsUpdate = true;
    
    renderer.render(scene, camera);
    requestAnimationFrame(animateVisualizer);
    return;
  }
  
  requestAnimationFrame(animateVisualizer);
  
  const time = Date.now() * 0.001;
  
  if (analyser && !audio.paused && audio.currentTime > 0) {
    // EPIC REAL AUDIO VISUALIZATION
    analyser.getByteFrequencyData(frequencyData);
    
    // Animate bars in circular formation
    bars.forEach((bar, i) => {
      const freqIndex = Math.floor((i / barCount) * frequencyData.length);
      const scale = (frequencyData[freqIndex] / 255) * 30 + 1;
      
      bar.scale.y = scale;
      bar.position.y = (scale - 1) * 2;
      
      // Use exact brand colors based on frequency
      const brandColorHexes = [BRAND_BLUE, BRAND_PURPLE_1, BRAND_PURPLE_2, BRAND_PURPLE_3];
      const colorIndex = Math.floor((freqIndex / frequencyData.length) * brandColorHexes.length);
      
      // Use the exact hex color
      bar.material.color.setHex(brandColorHexes[colorIndex]);
      bar.material.opacity = 0.7 + (frequencyData[freqIndex] / 255) * 0.3;
      
      // Rotation based on frequency
      bar.rotation.y = time + (frequencyData[freqIndex] / 255) * Math.PI;
    });
    
    // Animate particles based on audio
    const positions = particleSystem.geometry.attributes.position.array;
    const colors = particleSystem.geometry.attributes.color.array;
    
    for (let i = 0; i < particleCount; i++) {
      const freqIndex = Math.floor((i / particleCount) * frequencyData.length);
      const amplitude = frequencyData[freqIndex] / 255;
      
      // Particle movement
      positions[i * 3] += Math.sin(time + i * 0.01) * amplitude * 2;
      positions[i * 3 + 1] += Math.cos(time + i * 0.01) * amplitude * 2;
      positions[i * 3 + 2] += Math.sin(time * 2 + i * 0.02) * amplitude;
      
      // Particle colors - exact brand colors only
      const brandColorHexes = [BRAND_BLUE, BRAND_PURPLE_1, BRAND_PURPLE_2, BRAND_PURPLE_3];
      const colorIndex = Math.floor((i / particleCount) * brandColorHexes.length);
      const color = new THREE.Color(brandColorHexes[colorIndex]);
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      
      // Reset particle position if it goes too far
      if (Math.abs(positions[i * 3]) > 200) positions[i * 3] *= 0.1;
      if (Math.abs(positions[i * 3 + 1]) > 200) positions[i * 3 + 1] *= 0.1;
      if (Math.abs(positions[i * 3 + 2]) > 200) positions[i * 3 + 2] *= 0.1;
    }
    
    particleSystem.geometry.attributes.position.needsUpdate = true;
    particleSystem.geometry.attributes.color.needsUpdate = true;
    
    // Animate wave rings
    waves.forEach((wave, i) => {
      const avgFreq = frequencyData.slice(i * 20, (i + 1) * 20).reduce((a, b) => a + b, 0) / 20;
      wave.scale.setScalar(1 + (avgFreq / 255) * 2);
      wave.rotation.z = time * (0.5 + i * 0.2);
      wave.material.opacity = 0.2 + (avgFreq / 255) * 0.4;
      
      // Exact brand colors for waves
      const waveColorHexes = [BRAND_BLUE, BRAND_PURPLE_1, BRAND_PURPLE_2];
      const color = new THREE.Color(waveColorHexes[i % waveColorHexes.length]);
      wave.material.color.copy(color);
    });
    
    // Dynamic lighting based on audio - exact brand color
    const avgFreq = frequencyData.reduce((a, b) => a + b, 0) / frequencyData.length;
    pointLight.intensity = 1 + (avgFreq / 255) * 3;
    // Fixed brand purple lighting
    pointLight.color.setHex(BRAND_PURPLE_2);
    
    // Animate central sphere
    centralSphere.rotation.x = time * 0.5;
    centralSphere.rotation.y = time * 0.3;
    centralSphere.scale.setScalar(1 + (avgFreq / 255) * 0.5);
    centralSphere.material.opacity = 0.2 + (avgFreq / 255) * 0.3;
    
    // Animate orbital rings
    orbitRings.forEach((ring, i) => {
      ring.rotation.z = time * (0.2 + i * 0.1);
      const ringFreq = frequencyData[i * 10] || 0;
      ring.scale.setScalar(1 + (ringFreq / 255) * 0.3);
      ring.material.opacity = 0.3 + (ringFreq / 255) * 0.4;
      
      // Exact brand colors for rings
      const ringColorHexes = [BRAND_BLUE, BRAND_PURPLE_1, BRAND_PURPLE_2, BRAND_PURPLE_3];
      ring.material.color.setHex(ringColorHexes[i % ringColorHexes.length]);
    });
    
    // Animate starfield
    stars.rotation.y = time * 0.05;
    stars.rotation.x = time * 0.02;
    
    // Camera movement
    camera.position.x = Math.sin(time * 0.2) * 20;
    camera.position.y = Math.cos(time * 0.15) * 10;
    camera.position.z = 80 + Math.sin(time * 0.1) * 20;
    camera.lookAt(0, 0, 0);
    
  } else {
    // EPIC FAKE VISUALIZATION - exact brand colors
    bars.forEach((bar, i) => {
      const scale = Math.sin(time * 3 + i * 0.2) * 8 + 10;
      bar.scale.y = scale;
      bar.position.y = (scale - 1) * 1.5;
      
      // Exact brand colors cycling
      const brandColorHexes = [BRAND_BLUE, BRAND_PURPLE_1, BRAND_PURPLE_2, BRAND_PURPLE_3];
      const colorIndex = (i + Math.floor(time)) % brandColorHexes.length;
      bar.material.color.setHex(brandColorHexes[colorIndex]);
      bar.rotation.y = time + i * 0.1;
    });
    
    // Fake particle animation
    const positions = particleSystem.geometry.attributes.position.array;
    const colors = particleSystem.geometry.attributes.color.array;
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] += Math.sin(time + i * 0.01) * 0.5;
      positions[i * 3 + 1] += Math.cos(time + i * 0.01) * 0.5;
      positions[i * 3 + 2] += Math.sin(time * 2 + i * 0.02) * 0.3;
      
      // Exact brand particle colors for fake mode
      const brandColorHexes = [BRAND_BLUE, BRAND_PURPLE_1, BRAND_PURPLE_2, BRAND_PURPLE_3];
      const colorIndex = (i + Math.floor(time * 2)) % brandColorHexes.length;
      const color = new THREE.Color(brandColorHexes[colorIndex]);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      
      if (Math.abs(positions[i * 3]) > 200) positions[i * 3] *= 0.1;
      if (Math.abs(positions[i * 3 + 1]) > 200) positions[i * 3 + 1] *= 0.1;
      if (Math.abs(positions[i * 3 + 2]) > 200) positions[i * 3 + 2] *= 0.1;
    }
    
    particleSystem.geometry.attributes.position.needsUpdate = true;
    particleSystem.geometry.attributes.color.needsUpdate = true;
    
    // Fake wave animation - exact brand colors
    waves.forEach((wave, i) => {
      const scale = 1 + Math.sin(time * 2 + i) * 0.5;
      wave.scale.setScalar(scale);
      wave.rotation.z = time * (0.3 + i * 0.1);
      
      // Exact brand colors
      const waveColorHexes = [BRAND_BLUE, BRAND_PURPLE_1, BRAND_PURPLE_2];
      wave.material.color.setHex(waveColorHexes[i % waveColorHexes.length]);
    });
    
    // Fake lighting - exact brand color
    pointLight.intensity = 2 + Math.sin(time * 2) * 1;
    pointLight.color.setHex(BRAND_PURPLE_2); // Fixed brand purple
    
    // Animate central sphere (fake)
    centralSphere.rotation.x = time * 0.3;
    centralSphere.rotation.y = time * 0.2;
    centralSphere.scale.setScalar(1 + Math.sin(time * 2) * 0.2);
    
    // Animate orbital rings (fake) - exact brand colors
    orbitRings.forEach((ring, i) => {
      ring.rotation.z = time * (0.1 + i * 0.05);
      ring.scale.setScalar(1 + Math.sin(time + i) * 0.1);
      
      // Exact brand colors for rings
      const ringColorHexes = [BRAND_BLUE, BRAND_PURPLE_1, BRAND_PURPLE_2, BRAND_PURPLE_3];
      ring.material.color.setHex(ringColorHexes[i % ringColorHexes.length]);
    });
    
    // Animate starfield
    stars.rotation.y = time * 0.03;
    stars.rotation.x = time * 0.01;
    
    // Smooth camera movement
    camera.position.x = Math.sin(time * 0.1) * 25;
    camera.position.y = Math.cos(time * 0.08) * 15;
    camera.position.z = 80 + Math.sin(time * 0.05) * 15;
    camera.lookAt(0, 0, 0);
  }
  
  renderer.render(scene, camera);
}

// Uruchom animację visualizera
animateVisualizer();

// Journey Mode functionality
const journeyToggle = document.querySelector('.journey-toggle');
const journeyPanel = document.getElementById('journey-panel');
const journeyClose = document.querySelector('.journey-close');
const journeyPassword = document.getElementById('journey-password');
const journeySubmit = document.getElementById('journey-submit');
const journeyError = document.getElementById('journey-error');
const journeyHint = document.getElementById('journey-hint');

// Secret password (hint is in hero stats - "42")
const SECRET_PASSWORD = 'Interlinked';

// Toggle Journey panel
journeyToggle.addEventListener('click', () => {
  journeyPanel.classList.remove('hidden');
  journeyPanel.classList.add('active');
  journeyPassword.focus();
  console.log('🚀 Journey Mode activated!');
});

// Close panel
journeyClose.addEventListener('click', closeJourneyPanel);

// Close on outside click
journeyPanel.addEventListener('click', (e) => {
  if (e.target === journeyPanel) {
    closeJourneyPanel();
  }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && journeyPanel.classList.contains('active')) {
    closeJourneyPanel();
  }
});

function closeJourneyPanel() {
  journeyPanel.classList.remove('active');
  setTimeout(() => {
    journeyPanel.classList.add('hidden');
    journeyPassword.value = '';
    journeyError.classList.add('hidden');
  }, 300);
}

// Handle password submission
journeySubmit.addEventListener('click', checkPassword);
journeyPassword.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    checkPassword();
  }
  // Hide error when typing
  if (journeyError && !journeyError.classList.contains('hidden')) {
    journeyError.classList.add('hidden');
  }
});

function checkPassword() {
  const enteredPassword = journeyPassword.value.trim();
  
  if (enteredPassword === SECRET_PASSWORD) {
    // Success! Redirect to journey page
    console.log('🎉 Journey Mode unlocked!');
    
    // Add success animation
    journeySubmit.textContent = '✓ Success!';
    journeySubmit.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
    
    // Animate success
    anime({
      targets: '.journey-content',
      scale: [1, 1.05, 1],
      rotate: [0, 5, -5, 0],
      duration: 600,
      easing: 'easeInOutQuart',
      complete: () => {
        // Redirect after animation to new journey folder
        window.location.href = 'journey/journey.html';
      }
    });
    
    // Store success in localStorage for potential future use
    localStorage.setItem('journeyUnlocked', 'true');
    
  } else {
    // Show error
    journeyError.classList.remove('hidden');
    journeyPassword.value = '';
    journeyPassword.focus();
    
    // Shake animation for error
    anime({
      targets: '.journey-content',
      translateX: [-10, 10, -10, 10, 0],
      duration: 400,
      easing: 'easeInOutQuart'
    });
    
    // Reset submit button if it was changed
    journeySubmit.textContent = 'Enter';
    journeySubmit.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    
    console.log('❌ Incorrect password');
  }
}

// Add special easter egg for multiple wrong attempts
let wrongAttempts = 0;
const originalHintText = journeyHint.textContent;

journeyPassword.addEventListener('input', () => {
  const value = journeyPassword.value.trim();
  
  // Special hints based on input
  if (value.length > 0) {
    if (value.toLowerCase().includes('interlink') || value.toLowerCase().includes('blade') || value.toLowerCase().includes('runner')) {
      journeyHint.textContent = '� You\'re on the right track... What\'s the key word from the movie?';
      journeyHint.style.background = 'linear-gradient(135deg, rgba(40, 167, 69, 0.1), rgba(40, 167, 69, 0.05))';
      journeyHint.style.borderColor = 'rgba(40, 167, 69, 0.3)';
      journeyHint.style.color = '#28a745';
    } else if (value.toLowerCase() === 'interlinked' || value.toLowerCase().includes('inter')) {
      journeyHint.textContent = '🎯 So close! The exact word from the test...';
      journeyHint.style.background = 'linear-gradient(135deg, rgba(40, 167, 69, 0.2), rgba(40, 167, 69, 0.1))';
      journeyHint.style.borderColor = 'rgba(40, 167, 69, 0.4)';
      journeyHint.style.color = '#20c997';
    } else if (value.toLowerCase().includes('cell') || value.toLowerCase().includes('dreadfully')) {
      journeyHint.textContent = '🤖 "Cells. Have you ever been in an institution?" - Think connection...';
      journeyHint.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(102, 126, 234, 0.05))';
      journeyHint.style.borderColor = 'rgba(102, 126, 234, 0.3)';
      journeyHint.style.color = '#667eea';
    } else {
      journeyHint.textContent = originalHintText;
      journeyHint.style.background = 'linear-gradient(135deg, rgba(255, 193, 7, 0.1), rgba(255, 193, 7, 0.05))';
      journeyHint.style.borderColor = 'rgba(255, 193, 7, 0.3)';
      journeyHint.style.color = '#ffd700';
    }
  }
});

// Check if user previously unlocked journey mode
if (localStorage.getItem('journeyUnlocked') === 'true') {
  journeyToggle.style.filter = 'brightness(1.3)';
  journeyToggle.setAttribute('data-tooltip', 'Journey Mode (Unlocked!)');
}

console.log('🚀 Journey Mode ready! Find the secret code...');

// Music toggle functionality - RESTORED
const musicToggle = document.querySelector('.music-toggle');

musicToggle.addEventListener('click', async () => {
  try {
    if (!audioContext) {
      initAudioContext();
    }
    
    // Resume AudioContext if it's suspended
    if (audioContext && audioContext.state === 'suspended') {
      await audioContext.resume();
    }
    
    if (audio.paused) {
      await audio.play();
      musicToggle.textContent = '⏸️';
      isPlaying = true;
      localStorage.setItem('music', 'on');
      console.log('Music started playing');
    } else {
      audio.pause();
      musicToggle.textContent = '🎵';
      isPlaying = false;
      localStorage.setItem('music', 'off');
      console.log('Music paused');
    }
  } catch (error) {
    console.error('Audio playback failed:', error);
    console.log('Running visualizer without audio');
    musicToggle.textContent = isPlaying ? '🎵' : '⏸️';
    isPlaying = !isPlaying;
  }
});

// Load saved music state
const savedMusicState = localStorage.getItem('music');
musicToggle.textContent = '🎵';

// Better audio initialization
audio.addEventListener('canplaythrough', () => {
  console.log('Audio ready to play');
});

audio.addEventListener('loadstart', () => {
  console.log('Audio loading started');
});

audio.addEventListener('error', (e) => {
  console.error('Audio error:', e);
});

// Auto-start music if previously enabled (with user interaction)
document.addEventListener('click', async () => {
  if (savedMusicState === 'on' && !isPlaying && audio.paused) {
    try {
      await musicToggle.click();
    } catch (error) {
      console.log('Auto-play prevented by browser policy');
    }
  }
}, { once: true });

// Preload audio
audio.preload = 'auto';

// Window resize handler for visualizer
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

console.log('🎵 Music system initialized!');
