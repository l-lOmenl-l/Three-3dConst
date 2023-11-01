import * as THREE from 'three';
import {params_closet} from './closet.jsx'
import {scene} from './scene.jsx'
import venge from '../../../../textures/DubTabac.jpg'

//let geometry = new THREE.BoxGeometry( params_closet.x, params_closet.z ,params_closet.y );
const texture = new THREE.TextureLoader().load(venge);
const material = new THREE.MeshBasicMaterial( { map: texture } );
let startZ = params_closet.z/2*-1

export default function BuildCloset(){
    //Clear all meshes closet
    clearCloset()
    //spawn pedestal
    let pedestal = new THREE.Mesh(new THREE.BoxGeometry(params_closet.x-10, 5 ,params_closet.y), material)
    params_closet.mesh.push(pedestal)
    pedestal.position.y = startZ

    //spawn bottom closet
    let bottom = new THREE.Mesh(new THREE.BoxGeometry(params_closet.x, 2 ,params_closet.y), material)
    bottom.position.y = pedestal.position.y + 2
    params_closet.mesh.push (bottom)

    let amount = params_closet.amount_section
    if (params_closet.amount_section > 2){
        amount += 1
    }

    let firstPos = (params_closet.x/amount) * -1;

    //spawn side closet
    for (let i=0; i <= params_closet.amount_section; i++){
        let tempSide = new THREE.Mesh(new THREE.BoxGeometry(2, params_closet.z - 7 ,params_closet.y), material)
        
        tempSide.position.x = firstPos
        firstPos = firstPos + params_closet.x/amount

        tempSide.position.y = startZ + (params_closet.z/2-2)

        params_closet.mesh.push (tempSide)
    }
    //spawn top closet
    let top = new THREE.Mesh(new THREE.BoxGeometry(params_closet.x, 2 ,params_closet.y), material)
    top.position.y = startZ + params_closet.z - 6.5
    params_closet.mesh.push (top)

    //spawn XDF
    let xdf = new THREE.Mesh(new THREE.BoxGeometry(params_closet.x, params_closet.z-9 ,0.5))
    xdf.position.y = startZ + params_closet.z/2 - 3
    xdf.position.z = params_closet.y / 2 * -1
    params_closet.mesh.push (xdf)

    params_closet.mesh.forEach(function(item) {
        scene.add(item)
        
    });
}
function clearCloset(){
    params_closet.mesh.forEach(function(item) {
        scene.remove(item)
    });
    params_closet.mesh.length = 0
}