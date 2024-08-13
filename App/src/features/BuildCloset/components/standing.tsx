import * as THREE from 'three';
import { SceneProps } from '@react-three/fiber';



export default function buildStanding(scene:SceneProps, product){
    switch(product.standing){
        case "Стандарт": {
            let widthSections = product.sizes.width[0] / product.sizes.amount_section
            let firstPos = 0 - (product.sizes.width[0] / 2) + 1
            let oldMesh = scene.children[scene.children.length-1]
            const  standing :THREE.Mesh= new THREE.Mesh(new THREE.BoxGeometry(2, product.sizes.height[0] ,product.sizes.depth[0]))
            standing.position.x = firstPos
            standing.position.y = oldMesh.position.y + oldMesh.scale.y + product.sizes.height[0] / 2
            scene.add(standing)
            break
        }
        default: {
            console.log("Error find floor option")
            break
        }
    }

}

