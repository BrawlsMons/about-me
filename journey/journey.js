// Journey Mode - Dedicated JavaScript

// Global variables
let scene, camera, renderer, audioContext, analyser, dataArray;
let bars = [];
let particles = [];
let rings = [];
let sphere, starField;
let frameCount = 0;
let music = null;

// Brand colors (only hex)
const brandColors = {
  primary: '#667eea',
  secondary: '#764ba2', 
  accent: '#9B59B6',
  background: '#0f0f23',
  surface: '#1a1a2e'
};

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
  initThreeJS();
  initAudio();
  createParticleEffects();
  
  // Start animation loop
  animate();
});

// Initialize Three.js scene
function initThreeJS() {
  // Scene setup
  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x0f0f23, 50, 200);
  
  // Camera setup
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 50);
  
  // Renderer setup
  renderer = new THREE.WebGLRenderer({ 
    canvas: document.getElementById('visualizer'),
    alpha: true,
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  
  // Lighting
  const ambientLight = new THREE.AmbientLight(0x667eea, 0.3);
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0x9B59B6, 0.8);
  directionalLight.position.set(50, 50, 50);
  directionalLight.castShadow = true;
  scene.add(directionalLight);
  
  // Create visualizer elements
  createVisualizerBars();
  createParticleSystem();
  createRings();
  createSphere();
  createStarField();
  
  // Handle window resize
  window.addEventListener('resize', onWindowResize);
}

// Create visualizer bars
function createVisualizerBars() {
  const barCount = 128;
  const radius = 25;
  
  for (let i = 0; i < barCount; i++) {
    const geometry = new THREE.BoxGeometry(0.5, 1, 0.5);
    const material = new THREE.MeshLambertMaterial({ 
      color: new THREE.Color().setHex(parseInt(brandColors.primary.replace('#', '0x')))
    });
    const bar = new THREE.Mesh(geometry, material);
    
    const angle = (i / barCount) * Math.PI * 2;
    bar.position.x = Math.cos(angle) * radius;
    bar.position.z = Math.sin(angle) * radius;
    bar.castShadow = true;
    bar.receiveShadow = true;
    
    bars.push(bar);
    scene.add(bar);
  }
}

// Create particle system
function createParticleSystem() {
  const particleCount = 1000;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 200;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
    
    const color = new THREE.Color().setHex(parseInt(brandColors.accent.replace('#', '0x')));
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }
  
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  
  const material = new THREE.PointsMaterial({
    size: 2,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending
  });
  
  const particleSystem = new THREE.Points(geometry, material);
  particles.push(particleSystem);
  scene.add(particleSystem);
}

// Create rings
function createRings() {
  for (let i = 0; i < 3; i++) {
    const geometry = new THREE.RingGeometry(15 + i * 5, 16 + i * 5, 64);
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color().setHex(parseInt(brandColors.secondary.replace('#', '0x'))),
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    });
    const ring = new THREE.Mesh(geometry, material);
    ring.rotation.x = Math.PI / 2;
    rings.push(ring);
    scene.add(ring);
  }
}

// Create central sphere
function createSphere() {
  const geometry = new THREE.SphereGeometry(2, 32, 32);
  const material = new THREE.MeshPhongMaterial({
    color: new THREE.Color().setHex(parseInt(brandColors.primary.replace('#', '0x'))),
    transparent: true,
    opacity: 0.8,
    emissive: new THREE.Color().setHex(parseInt(brandColors.accent.replace('#', '0x'))),
    emissiveIntensity: 0.2
  });
  sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);
}

// Create star field
function createStarField() {
  const starCount = 2000;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(starCount * 3);
  
  for (let i = 0; i < starCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 400;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 400;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 400;
  }
  
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
  const material = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 1,
    transparent: true,
    opacity: 0.6
  });
  
  starField = new THREE.Points(geometry, material);
  scene.add(starField);
}

// Initialize audio
function initAudio() {
  music = document.getElementById('background-music');
  
  if (music) {
    music.volume = 0.3;
    music.preload = 'auto';
    music.crossOrigin = 'anonymous';
    
    // Try to create audio context for visualization
    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      dataArray = new Uint8Array(analyser.frequencyBinCount);
      
      const source = audioContext.createMediaElementSource(music);
      source.connect(analyser);
      analyser.connect(audioContext.destination);
    } catch (error) {
      console.log('Audio context creation failed:', error);
    }
    
    // Auto-play attempt
    const playAudio = () => {
      music.play().catch(error => {
        console.log('Auto-play failed:', error);
      });
      document.removeEventListener('click', playAudio);
    };
    
    document.addEventListener('click', playAudio);
  }
}

// Create additional particle effects
function createParticleEffects() {
  // This function can be extended for more particle effects
  // Currently handled by CSS animations
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  frameCount++;
  
  // Update visualizer based on audio
  if (analyser && dataArray) {
    analyser.getByteFrequencyData(dataArray);
    
    // Update bars
    bars.forEach((bar, index) => {
      const value = dataArray[index] || 0;
      const scale = (value / 255) * 10 + 1;
      bar.scale.y = scale;
      bar.position.y = (scale - 1) * 0.5;
      
      // Color based on frequency
      const hue = (index / bars.length) * 360;
      bar.material.color.setHSL(hue / 360, 0.8, 0.5);
    });
    
    // Update sphere
    if (sphere) {
      const average = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
      sphere.scale.setScalar(1 + (average / 255) * 0.5);
    }
  } else {
    // Fallback animation without audio
    bars.forEach((bar, index) => {
      const wave = Math.sin(frameCount * 0.01 + index * 0.1) * 2 + 3;
      bar.scale.y = wave;
      bar.position.y = (wave - 1) * 0.5;
    });
    
    if (sphere) {
      sphere.scale.setScalar(1 + Math.sin(frameCount * 0.02) * 0.2);
    }
  }
  
  // Rotate elements
  if (sphere) {
    sphere.rotation.y += 0.01;
  }
  
  rings.forEach((ring, index) => {
    ring.rotation.z += 0.002 * (index + 1);
  });
  
  particles.forEach(particleSystem => {
    particleSystem.rotation.y += 0.001;
    particleSystem.rotation.x += 0.0005;
  });
  
  if (starField) {
    starField.rotation.y += 0.0002;
  }
  
  // Camera movement
  camera.position.x = Math.sin(frameCount * 0.005) * 5;
  camera.position.y = Math.cos(frameCount * 0.003) * 3;
  camera.lookAt(0, 0, 0);
  
  renderer.render(scene, camera);
}

// Handle window resize
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Start journey function
function startJourney() {
  // Add button press animation
  const button = document.querySelector('.start-journey-btn');
  button.style.transform = 'translateY(-1px) scale(0.98)';
  
  setTimeout(() => {
    // Navigate to Act 1 Layer 1
    window.location.href = 'nexus-awakening.html';
  }, 300);
}

// Additional effects and interactions can be added here
document.addEventListener('mousemove', (e) => {
  if (camera) {
    const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    
    camera.position.x += mouseX * 0.5;
    camera.position.y += mouseY * 0.3;
  }
});
