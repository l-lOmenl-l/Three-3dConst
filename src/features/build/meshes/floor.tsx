import { IModel } from '@/entities/model';
import React from 'react'
import * as THREE from 'three';

type Props={
    sizes:DomainSizes, 
    texture:THREE.Texture,
    Model:(object:IModel)=>JSX.Element
}
  
function Floor(props:Props) {
    //переворачиваем текстуру
    const textureRotate = props.texture.clone();
    textureRotate.rotation = Math.PI / 2;
    textureRotate.center.set(0.5, 0.5);
    return (
        <>
            {/* крышка */}
            <mesh {...props} position={[0, props.sizes.height[0]-5, 0.25]}>
                <boxGeometry args={[props.sizes.width[0]+1, 2, props.sizes.depth-0.5]} />
                <meshStandardMaterial map={textureRotate}/>
            </mesh>
            {/* направляющая */}
            <mesh receiveShadow {...props} position={[0-0.5,props.sizes.height[0]-7.5,(props.sizes.depth/2)-2.8]}>
                <boxGeometry args={[0,0,3]}/>
                <props.Model url="/profile up.fbx" scale={[props.sizes.width[0]-5, 0.3, 0.8]} position={[0,0,0]} color='#A9A9A9'/>
            </mesh>
        </>
    )
}
export default Floor