import * as THREE from 'three';
import closet from '../../entities/closet.js';
import { SceneProps } from '@react-three/fiber';



export default function Build(scene:SceneProps){
    const  pedestal :THREE.Mesh= new THREE.Mesh(new THREE.BoxGeometry(closet.sizes.width-10, 5 ,closet.sizes.depth))
    scene.add(pedestal)

    
}

