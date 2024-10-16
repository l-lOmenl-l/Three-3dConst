import { IModel } from '@/entities/model';
import React from 'react'
import * as THREE from 'three';


type Props={
    sizes:DomainSizes, 
    texture:THREE.Texture,
    base:boolean,
    Model:(object:IModel)=>JSX.Element
}


function Base(props:Props) {

    //переворачиваем текстуру
    const textureRotate = props.texture.clone();
    textureRotate.rotation = Math.PI / 2;
    textureRotate.center.set(0.5, 0.5);

    return (
        <>
            {/* база */}
            <mesh {...props} position={[0, 0, 0.25]}>
                <boxGeometry args={[props.sizes.width[0]+1, 4, props.sizes.depth-0.5]}/>
                <meshStandardMaterial map={textureRotate} />
            </mesh>
            {/* Цоколь */}
            {props.base&&
                    <mesh {...props} position={[0, -6, 0.25]}>
                        <boxGeometry args={[props.sizes.width[0]-8, 8, props.sizes.depth-0.5]}/>
                        <meshStandardMaterial map={textureRotate} />
                    </mesh>
            }
            {/* направляющая */}
            <mesh receiveShadow {...props} position={[0,2.5,(props.sizes.depth/2)-2.8]}>
                <boxGeometry args={[0,0,3]}/>
                <props.Model url="/profilebottom.fbx" scale={[props.sizes.width[0]-4, 1, 1]} position={[0,0,0]} color='#A9A9A9'/>
            </mesh>
           
        </>
    )
}
export default Base

