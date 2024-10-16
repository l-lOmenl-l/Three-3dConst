import { Vector3 } from '@react-three/fiber';
import React from 'react'
import * as THREE from 'three';

type Props = {
    indexQ: number,
    positionVertical: Vector3,
    sizes: DomainSizes,
    texture: THREE.Texture,
}

function Barbell(props: Props) {
    //переворачиваем текстуру
    const textureRotate = props.texture.clone();
    textureRotate.rotation = Math.PI / 2;
    textureRotate.center.set(0.5, 0.5);

    return (
        <group key={props.indexQ}>
            <mesh {...props} position={props.positionVertical}>
                <boxGeometry args={[((props.sizes.width[0] / (props.sizes.amount_section)) - 2), 3, props.sizes.depth[0] - 6]} />
                <meshStandardMaterial map={textureRotate} />
            </mesh>
            <mesh {...props} position={[props.positionVertical.x,props.positionVertical.y-10,props.positionVertical.z]}>
                <boxGeometry args={[((props.sizes.width[0] / (props.sizes.amount_section)) - 2), 3, 5]} />
                <meshStandardMaterial color={'#b6b6b6'} />
            </mesh>
        </group>

    )
}
export default Barbell