import * as THREE from 'three';
import closet from '../../entities/closet.js';
import { MeshProps, Object3DProps, SceneProps } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'


export default function Build(scene:SceneProps){
    const material = closet.materials.corpus;
    //Clear all meshes closet
    clearCloset(scene)
    //spawn pedestal
    const pedestal = new THREE.Mesh(new THREE.BoxGeometry(closet.sizes.width-10, 5 ,closet.sizes.depth), material)
    pedestal.name = "pedestal"
    closet.mesh.push(pedestal)
    pedestal.position.y = 0

    //spawn bottom closet
    const bottom = new THREE.Mesh(new THREE.BoxGeometry(closet.sizes.width, 2 ,closet.sizes.depth), material)
    bottom.position.y = pedestal.position.y + 2
    bottom.name= "bottom"
    closet.mesh.push(bottom)

    //spawn side closet
    let firstPos = (closet.sizes.width/2) * -1;
    for (let i=0; i <= closet.section; i++){
        let depth =  closet.sizes.depth
        if (i != 0 && i != closet.section){
            depth = closet.sizes.depth - 8
        }

        const tempSide = new THREE.Mesh(new THREE.BoxGeometry(2, closet.sizes.height - 8 , depth), material)
        if (i != 0 && i != closet.section){
            tempSide.position.z = tempSide.position.z - 4
        }
        tempSide.position.x = firstPos
        firstPos = firstPos + closet.sizes.width/closet.section
        tempSide.position.y = closet.sizes.height/2-2
        tempSide.name = "Side"+i
        closet.mesh.push(tempSide)

    }

    //spawn top closet
    const top = new THREE.Mesh(new THREE.BoxGeometry(closet.sizes.width, 2 ,closet.sizes.depth), material)
    top.position.y = closet.sizes.height - 6.5
    top.name="top"
    closet.mesh.push(top)

    //spawn XDF
    const xdf = new THREE.Mesh(new THREE.BoxGeometry(closet.sizes.width, closet.sizes.height-9 ,0.5))
    xdf.position.y = closet.sizes.height/2 - 3
    xdf.position.z = closet.sizes.depth / 2 * -1
    xdf.name="xdf"
    closet.mesh.push(xdf)

    //spawn profile
    const fbxLoader = new FBXLoader()
    fbxLoader.load('src/assets/meshes/profileBottom.fbx',(object:Object3DProps) => {
            object.scale.set(closet.sizes.width, 1, 1)
            object.position.y = bottom.position.y + 1
            object.position.z = closet.sizes.depth / 2.2
            object.name = "profileBottom"
            closet.mesh.push(object)
            scene.add(object)
        }
    )

    closet.mesh.forEach(function(item:MeshProps) {
        item.position.y = item.position.y-130
        scene.add(item)
    });
}
function clearCloset(scene:SceneProps){
    closet.mesh.forEach(function(item) {
        scene.remove(item)
    });
    closet.mesh.length = 0
}