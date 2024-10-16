import { IModule } from '@/widgets/main/workspace/Canvas';
import React from 'react'
import * as THREE from 'three';
import { useBuild } from '../hooks/useBuild';

type Props = {
    sizes: DomainSizes,
    texture:THREE.Texture,
    modules:IModule[]
}

function Standing(props: Props) {

    const {getPositionStanding} = useBuild(props.sizes);
   
    return (
        <>
            {/* вывод стоевых */}
            {Array.from({ length: props.sizes.amount_section + 1 }).map((_, index) => {
                const position = getPositionStanding(index, props.sizes.amount_section + 1);
                let depth =  props.sizes.depth[0]
                // сдвиг внутренних стоевых
                if(index!=0&&index!=props.sizes.amount_section){
                    position.z = position.z-2.9;
                    depth = depth - 5.8;
                }

                return (
                        <mesh 
                            key={index}
                            position={position}
                            {...props}
                        >
                            <boxGeometry args={[3, props.sizes.height[0]-8,depth-0.5]} />
                            <meshStandardMaterial map={props.texture} />
                        </mesh>          
                    
                );
            })}
        </>



    )
}
export default Standing