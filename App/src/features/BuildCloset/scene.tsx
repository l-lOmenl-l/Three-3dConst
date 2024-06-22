import { useLayoutEffect, useRef } from "react"
import * as THREE from 'three';
import closet from '../../entities/closet.js';
import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import Build from "./build.js";

export const scene = new THREE.Scene();

export function RenderScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useLayoutEffect(() => {
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current as HTMLCanvasElement, antialias: true });
    const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
    renderer.setClearAlpha(0.1)
    renderer.setSize(window.innerWidth, window.innerHeight);
    const controls = new OrbitControls(camera, renderer.domElement);
    camera.position.z = 400;
    camera.position.x=0
    camera.position.y=0
    controls.update();
    function render() {
      requestAnimationFrame(render);
      controls.update();
      renderer.render(scene, camera);
    }
    render();
    Build(scene);
  }, [])

  return (
    <canvas id='canvas' ref={canvasRef} />
  )
}
