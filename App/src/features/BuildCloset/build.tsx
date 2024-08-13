import * as THREE from 'three';
import product from '../../entities/testProduct.tsx';
import { SceneProps } from '@react-three/fiber';
import buildBase from './components/base.js';
import buildFloor from './components/floor.tsx';
import buildStanding from './components/standing.tsx';


function clearAllMesh(scene:SceneProps){
    for (let i = 0; i < scene.children.length; i++) {
        scene.remove(scene.children[i])
    }
}

export default function BuildProduct(scene:SceneProps){
    clearAllMesh(scene)
    buildBase(scene, product)
    buildFloor(scene, product)
    buildStanding(scene, product)
}

