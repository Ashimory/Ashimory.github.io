import './style.css'
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

// define canvas objects
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.setZ(30);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#galaxy"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight );

const controls = new OrbitControls(camera, renderer.domElement);

// Add ambient light for background
const ambient = new THREE.AmbientLight(0xffffff);
scene.add(ambient);

// Add background 
const starbg = new THREE.TextureLoader().load('galaxybackground.jpg');
scene.background = starbg;

// Add a sun
const startt = new THREE.TextureLoader().load('suntexturetest.jpg');
const sungeo = new THREE.SphereGeometry( 15, 64, 64 );
const sunmat = new THREE.MeshStandardMaterial( { 
  // color:0x000000,
  emissive: 0x71cee3, 
  emissiveIntensity: 1,
  map: startt,  } );
const sunmesh = new THREE.Mesh( sungeo, sunmat );
const sunlight = new THREE.PointLight(0xffffff, 2,);
const sun = sunlight.add(sunmesh);
sun.position.set(0, 0, 0);
scene.add(sun);

// Add a planet
const planetgeo = new THREE.SphereGeometry( 3, 64, 64 );
const planetmat = new THREE.MeshStandardMaterial({color:0x053067});
const planet1 = new THREE.Mesh( planetgeo, planetmat );
planet1.position.set(25, 0, 0);
scene.add(planet1);

// Define model for stars

const stargeo = new THREE.SphereGeometry(0.1);
const starmat = new THREE.MeshStandardMaterial({color:0xffffff});

// Add stars to random positions

function addstars(){
  for (let index = 0; index < 240; index++) {
    const star = new THREE.Mesh(stargeo, starmat);
    
    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(187));
    // z = Math.min(1.0, z);

    star.position.set(x, y, z);
    scene.add(star);
  }
}

addstars();

// renderer.render(scene, camera);
// define animate function
function animate(){
  requestAnimationFrame(animate);

  controls.update();

  sun.rotation.y += 0.001;
  // console.log("working");

  renderer.render(scene, camera);
}

animate();