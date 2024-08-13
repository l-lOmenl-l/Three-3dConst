import * as THREE from 'three';
import { SceneProps } from '@react-three/fiber';



export default function buildFloor(scene:SceneProps, product){
    switch(product.floor){
        case "Стандарт": {
            const  floor :THREE.Mesh= new THREE.Mesh(new THREE.BoxGeometry(product.sizes.width[0], 2, product.sizes.depth[0]))
            let oldMesh = scene.children[scene.children.length-1]
            floor.position.y = oldMesh.position.y + oldMesh.scale.y + 2
            scene.add(floor)
            break
        }
        default: {
            console.log("Error find floor option")
            break
        }
    }

}

