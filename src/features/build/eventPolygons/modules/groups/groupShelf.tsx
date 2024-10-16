import Barbell from "@/features/build/meshes/barbell";
import Shelf from "@/features/build/meshes/shelf";
import { IModule } from "@/widgets/main/workspace/Canvas";
import { Vector3 } from "@react-three/fiber";
import * as THREE from 'three';

type Props = {
    index: number,
    sizes: DomainSizes,
    positionHorizontal: Vector3,
    section: IModule,
    texture: THREE.Texture,
    getPositionModuleVertical: (index: number, count: number) => Vector3 | [x: number, y: number, z: number] | readonly [x: number, y: number, z: number]
}

function GroupShelf(props: Props) {
    
    return (

        <group position={props.positionHorizontal} key={props.index}>

            {props.section.type.map((item, key) => {
                const positionVertical = props.getPositionModuleVertical(key, props.section.type.length);

                if (key != 0 && key != props.section.type.length - 1) {

                    if (item === 'shelf') {
                        return (
                            <Shelf key={key} positionVertical={positionVertical} texture={props.texture} sizes={props.sizes} indexQ={key} />
                        )
                    }
                    if (item === 'barbell') {
                        return (
                            <Barbell key={key} positionVertical={positionVertical} texture={props.texture} sizes={props.sizes} indexQ={key} />
                        )
                    }
                }

            })}



        </group>

    );
}

export default GroupShelf;