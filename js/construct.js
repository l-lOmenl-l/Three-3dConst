import * as THREE from 'three';
import {params_closet} from './closet.js'
import {scene} from "./scene.js";

let geometry = new THREE.BoxGeometry( params_closet.x, params_closet.z ,params_closet.y );
const texture = new THREE.TextureLoader().load('textures/венге.jpg' );
const material = new THREE.MeshBasicMaterial( { map: texture } );




export function BuildCloset(){
    let mesh = []
    let pedestal = new THREE.Mesh(new THREE.BoxGeometry(params_closet.x-10, 5 ,params_closet.y), material)
    mesh.push (pedestal)
    pedestal.position.y = 0
    let bottom = new THREE.Mesh(new THREE.BoxGeometry(params_closet.x, 2 ,params_closet.y), material)
    bottom.position.y = pedestal.position.y + 2
    let standing = []

    mesh.push (bottom)



    mesh.forEach(function(item, i, arr) {
        scene.add(item)
    });


}

BuildCloset()




