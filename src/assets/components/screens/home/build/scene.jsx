import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );

    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setClearAlpha(0.1)
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild(renderer.domElement)


    const controls = new OrbitControls( camera, renderer.domElement );
    camera.position.z=400
    camera.position.x=0
    camera.position.y=0
    controls.update();

    function render() {
        requestAnimationFrame( render );
        controls.update();
        renderer.render( scene, camera );
    }
    render()

