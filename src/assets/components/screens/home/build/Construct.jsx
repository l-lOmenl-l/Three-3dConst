import * as THREE from 'three';
import {params_closet} from './closet.jsx'
import {scene} from './scene.jsx'
import venge from '../../../../textures/DubTabac.jpg'


const texture = new THREE.TextureLoader().load(venge);
const material = new THREE.MeshBasicMaterial( { map: texture } );

export default function BuildCloset(){
    //Clear all meshes closet
    clearCloset()
    //spawn pedestal
    let pedestal = new THREE.Mesh(new THREE.BoxGeometry(params_closet.sizes.width-10, 5 ,params_closet.sizes.depth), material)
    params_closet.mesh.push(pedestal)
    pedestal.position.y = 0

    //spawn bottom closet
    let bottom = new THREE.Mesh(new THREE.BoxGeometry(params_closet.sizes.width, 2 ,params_closet.sizes.depth), material)
    bottom.position.y = pedestal.position.y + 2
    params_closet.mesh.push (bottom)

    let amount = params_closet.amount_section
    if (params_closet.amount_section > 2){
        amount += 1
    }

    let firstPos = (params_closet.sizes.width/amount) * -1;

    //spawn side closet
    for (let i=0; i <= params_closet.amount_section; i++){
        let tempSide = new THREE.Mesh(new THREE.BoxGeometry(2, params_closet.sizes.height - 7 ,params_closet.sizes.depth), material)
        
        tempSide.position.x = firstPos
        firstPos = firstPos + params_closet.sizes.width/amount

        tempSide.position.y = params_closet.sizes.height/2-2

        params_closet.mesh.push (tempSide)
    }
    //spawn top closet
    let top = new THREE.Mesh(new THREE.BoxGeometry(params_closet.sizes.width, 2 ,params_closet.sizes.depth), material)
    top.position.y = params_closet.sizes.height - 6.5
    params_closet.mesh.push (top)

    //spawn XDF
    let xdf = new THREE.Mesh(new THREE.BoxGeometry(params_closet.sizes.width, params_closet.sizes.height-9 ,0.5))
    xdf.position.y = params_closet.sizes.height/2 - 3
    xdf.position.z = params_closet.sizes.depth / 2 * -1
    params_closet.mesh.push (xdf)

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