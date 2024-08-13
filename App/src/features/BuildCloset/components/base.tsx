import * as THREE from 'three';
import { SceneProps } from '@react-three/fiber';



export default function buildBase(scene:SceneProps, product){
    switch(product.base){
        case "Стандарт": {
            const  base :THREE.Mesh= new THREE.Mesh(new THREE.BoxGeometry(product.sizes.width[0]-10, 5 ,product.sizes.depth[0]))
            scene.add(base)
            break
        }
        default: {
            console.log("Error find base option")
            break
        }
    }

}

