import * as THREE from 'three';
import {params_closet} from './closet.jsx'
import {scene} from './scene.jsx'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'




export default function BuildCloset(){
    let material = params_closet.materials.corpus;
    //Clear all meshes closet
    clearCloset()
    //spawn pedestal
    let pedestal = new THREE.Mesh(new THREE.BoxGeometry(params_closet.sizes.width-10, 5 ,params_closet.sizes.depth), material)
    pedestal.name = "pedestal"
    params_closet.mesh.push(pedestal)
    pedestal.position.y = 0

    //spawn bottom closet
    let bottom = new THREE.Mesh(new THREE.BoxGeometry(params_closet.sizes.width, 2 ,params_closet.sizes.depth), material)
    bottom.position.y = pedestal.position.y + 2
    bottom.name= "bottom"
    params_closet.mesh.push(bottom)

    //spawn side closet
    let firstPos = (params_closet.sizes.width/2) * -1;
    for (let i=0; i <= params_closet.amount_section; i++){
        let depth =  params_closet.sizes.depth
        if (i != 0 && i != params_closet.amount_section){
            depth =  params_closet.sizes.depth - 8
        }

        let tempSide = new THREE.Mesh(new THREE.BoxGeometry(2, params_closet.sizes.height - 8 , depth), material)
        if (i != 0 && i != params_closet.amount_section){
            tempSide.position.z = tempSide.position.z - 4
        }
        tempSide.position.x = firstPos
        firstPos = firstPos + params_closet.sizes.width/params_closet.amount_section

        tempSide.position.y = params_closet.sizes.height/2-2
        tempSide.name = "Side"+i
        params_closet.mesh.push(tempSide)

    }

    //spawn top closet
    let top = new THREE.Mesh(new THREE.BoxGeometry(params_closet.sizes.width, 2 ,params_closet.sizes.depth), material)
    top.position.y = params_closet.sizes.height - 6.5
    top.name="top"
    params_closet.mesh.push(top)

    //spawn XDF
    let xdf = new THREE.Mesh(new THREE.BoxGeometry(params_closet.sizes.width, params_closet.sizes.height-9 ,0.5))
    xdf.position.y = params_closet.sizes.height/2 - 3
    xdf.position.z = params_closet.sizes.depth / 2 * -1
    xdf.name="xdf"
    params_closet.mesh.push(xdf)

    //spawn profile
    const fbxLoader = new FBXLoader()
    fbxLoader.load('src/assets/meshes/profileBottom.fbx',(object) => {
            object.scale.set(params_closet.sizes.width, 1, 1)
            object.position.y = bottom.position.y + 1
            object.position.z = params_closet.sizes.depth / 2.2
            object.name = "profileBottom"
            params_closet.mesh.push(object)
            scene.add(object)
        }
    )

    params_closet.mesh.forEach(function(item) {
        item.position.y = item.position.y-130
        scene.add(item)
    });
}
function clearCloset(){
        params_closet.mesh.forEach(function(item) {
        scene.remove(item)
    });
    params_closet.mesh.length = 0
}

export function changeMaterialCloset(){

    params_closet.mesh.forEach(function(item) {
        if (item.name != "xdf"){
            item.material = params_closet.materials.corpus
            item.material.name = params_closet.materials.corpus.name
        }

    });
    params_closet.get_material()
}