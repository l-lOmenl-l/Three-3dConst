import { IModel } from "@/entities/model";
import { useFBX } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from 'three';

export const useRender = (color:string)=>{
    
    //рендер 3Дмодели
    function Model(object:IModel) {
        const BasicMaterial = new THREE.MeshStandardMaterial({ color: new THREE.Color(color) })
        const fbx = useFBX(object.url);
        const model = useMemo(() => fbx.clone(true), []);
        model.children.forEach((mesh, i) => { mesh.material = BasicMaterial; });
        return (
            <primitive object={model} scale={object.scale} position={object.position}/>
        )
    }

    return {
        Model
    }

}