import * as THREE from 'three';
import {params_closet} from './closet.jsx'
import {scene} from './scene.jsx'
import materialJson from './material.json'

let texture = new THREE.TextureLoader().load(materialJson[params_closet.materials.corpus].url);
let material = new THREE.MeshBasicMaterial( { map: texture } );

export default function BuildCloset(){
    //Clear all meshes closet
    clearCloset()
    //spawn pedestal
    let pedestal = new THREE.Mesh(new THREE.BoxGeometry(params_closet.sizes.width-10, 5 ,params_closet.sizes.depth), material)
    params_closet.mesh.push({name:"pedestal", ref:pedestal})
    pedestal.position.y = 0

    //spawn bottom closet
    let bottom = new THREE.Mesh(new THREE.BoxGeometry(params_closet.sizes.width, 2 ,params_closet.sizes.depth), material)
    bottom.position.y = pedestal.position.y + 2
    params_closet.mesh.push({name:"bottom", ref:bottom})




    //spawn side closet
    let firstPos = (params_closet.sizes.width/2) * -1;
    for (let i=0; i <= params_closet.amount_section; i++){
        let tempSide = new THREE.Mesh(new THREE.BoxGeometry(2, params_closet.sizes.height - 7 ,params_closet.sizes.depth), material)
        
        tempSide.position.x = firstPos
        firstPos = firstPos + params_closet.sizes.width/params_closet.amount_section

        tempSide.position.y = params_closet.sizes.height/2-2
        params_closet.mesh.push({name:"Side"+i, ref:tempSide})

    }

    //spawn top closet
    let top = new THREE.Mesh(new THREE.BoxGeometry(params_closet.sizes.width, 2 ,params_closet.sizes.depth), material)
    top.position.y = params_closet.sizes.height - 6.5
    params_closet.mesh.push({name:top, ref:top})

    //spawn XDF
    let xdf = new THREE.Mesh(new THREE.BoxGeometry(params_closet.sizes.width, params_closet.sizes.height-9 ,0.5))
    xdf.position.y = params_closet.sizes.height/2 - 3
    xdf.position.z = params_closet.sizes.depth / 2 * -1
    params_closet.mesh.push({name:"xdf", ref:xdf})


    params_closet.mesh.forEach(function(item) {
        item.ref.position.y = item.ref.position.y-130
        scene.add(item.ref)
        
    });
}
function clearCloset(){
    params_closet.mesh.forEach(function(item) {
        scene.remove(item.ref)
    });
    params_closet.mesh.length = 0
}

export function changeMaterialCloset(){
    params_closet.mesh.forEach(function(item) {
        let texture = new THREE.TextureLoader().load(materialJson[params_closet.materials.corpus].url);
        let material = new THREE.MeshBasicMaterial( { map: texture } );
        if (item.name != "xdf"){
            item.ref.material = material
        }

    });
}