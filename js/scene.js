import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setClearAlpha(0)
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const controls = new OrbitControls( camera, renderer.domElement );
camera.position.set( 0, 0, 400 );
controls.update();


function animate() {
    requestAnimationFrame( animate );
    controls.update();
    renderer.render( scene, camera );
}

animate()




