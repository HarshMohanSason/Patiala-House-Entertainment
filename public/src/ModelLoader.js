import * as THREE from 'https://cdn.skypack.dev/three@0.133.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.133.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.133.0/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'https://cdn.skypack.dev/three@0.133.0/examples/jsm/environments/RoomEnvironment.js';
import * as TWEEN from 'https://cdnjs.cloudflare.com/ajax/libs/tween.js/23.1.1/tween.esm.min.js';

window.createImageBitmap = undefined;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.getElementById('Modelcontainer').appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
var initialPosition = new THREE.Vector3(-0.13907890549606694, 1.0609806696966078, -9.971655066553083)
setInitialCameraPosition();

// Add orbital controls
const controls = new OrbitControls(camera, renderer.domElement);

// Load 3D model
const gltfLoader = new GLTFLoader();
document.querySelector('.loader').style.display = 'block';
gltfLoader.load('cannon/scene.glb', function (gltf) {

    const mesh = gltf.scene;
    const scaleFactor = 0.043; // Adjust this value according to your desired size
    mesh.scale.set(scaleFactor, scaleFactor, scaleFactor);
    mesh.position.set(0, -2, 0);

    scene.add(mesh);

    // Add room environment
    const environment = new RoomEnvironment();
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const environmentTexture = pmremGenerator.fromScene(environment).texture;
    scene.environment = environmentTexture;
    // Add point light to illuminate the model
    // Add point light to illuminate the model
    const pointLight = new THREE.PointLight(0xffffff, 3); // White light with intensity 2
    pointLight.position.set(0, 5, 0); // Position the light
    scene.add(pointLight);

    // Ambient light to provide overall illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 20); // White light with intensity 0.5
    scene.add(ambientLight);


    controls.enableDamping = true; // Smooth out rotation
    controls.dampingFactor = 0.1; // Controls the damping/smoothness
    controls.autoRotate = true;
    document.querySelector('.loader').style.display = 'none';
}, (xhr) => {

}, (error) => {
    console.error(error);
    document.querySelector('.loader').style.display = 'none';
});

function setInitialCameraPosition() {
    camera.position.copy(initialPosition);
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();