import { Vector3 } from '@react-three/fiber';
import React from 'react'
import * as THREE from 'three';

type Props = {
    indexQ: number,
    positionVertical: Vector3,
    sizes: DomainSizes,
    texture: THREE.Texture,
}

function Shelf(props: Props) {
    //переворачиваем текстуру
    const textureRotate = props.texture.clone();
    textureRotate.rotation = Math.PI / 2;
    textureRotate.center.set(0.5, 0.5);
    return (
        <mesh {...props} key={props.indexQ} position={props.positionVertical}>
            <boxGeometry args={[((props.sizes.width[0] / (props.sizes.amount_section)) - 2), 3, props.sizes.depth[0] - 6]} />
            <meshStandardMaterial map={textureRotate} />
        </mesh>
    )
}
export default Shelf