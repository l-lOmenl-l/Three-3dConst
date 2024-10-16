import React, { SetStateAction, useState } from 'react'
import { IModule } from "@/widgets/main/workspace/Canvas";
import { useBuild } from "../../hooks/useBuild";
import * as THREE from 'three';
import ContextMenuModules from './ui/contextMenu';
import { ThreeEvent, Vector3 } from '@react-three/fiber';
import GroupShelf from './groups/groupShelf';

type Props = {
    sizes: DomainSizes,
    setModules: React.Dispatch<SetStateAction<IModule[]>>,
    modules: IModule[],
    optionsModules: boolean,
    texture: THREE.Texture,
}

export interface IMenuPosition {
    x: number,
    y: number,
    z: number
}
export interface IInput{
    type:string,
    count:number
}

function Modules(props: Props) {
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuPosition, setMenuPosition] = useState<IMenuPosition>({ x: 0, y: 0, z: 0 });
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number|null>(null);

    const { getPositionHoverObject, getPositionModuleHorizontal, getPositionModuleVertical } = useBuild(props.sizes);

    //переворачиваем текстуру
    const textureRotate = props.texture.clone();
    textureRotate.rotation = Math.PI / 2;
    textureRotate.center.set(0.5, 0.5);

    //вызов контекстного меню
    const handleContextMenu = (event:ThreeEvent<MouseEvent>, id:number) => {
        if (props.optionsModules) {
            event.stopPropagation();
            if (event.point.x > 0) {
                setMenuPosition({ x: (0 - (props.sizes.width[0] / (id + 1))) + (event.point.x / (id + 1)), y: event.point.y, z: event.point.z });
            }
            else {
                setMenuPosition({ x: 0 - ((props.sizes.width[0] / (props.sizes.amount_section)) - 2), y: event.point.y, z: event.point.z });
            }
            setMenuVisible(true);
            setSelectedId(id);
        }
    };

    // добавление модуля
    const addModule = (index: number, object:IInput[]) => {
        const newModule : IModule = {
            id: index,
            type: [],
        };
        
        object.map((item)=>{
            for (let index = 0; index < item.count; index++) {
                newModule.type.push(item.type)
            }
        })
        const isEven = (value:string) => value === 'barbell';
        const elementsToMoveForward = newModule.type.filter(isEven);
        const remainingElements = newModule.type.filter((value) => !isEven(value));

        // Порядок модулей
        newModule.type = ['shelf', ...remainingElements, ...elementsToMoveForward, 'shelf'];

        if(props.modules.find((item) => item.id === index)) {
            const obj = props.modules.filter((item)=>item.id!=index)
            props.setModules([...obj,newModule]);
        }
        else {
            props.setModules([...props.modules, newModule]);
        }
        
        setMenuVisible(false)
        setSelectedId(null)
        
    };

    return (

        Array.from({ length: props.sizes.amount_section }).map((_, index) => {
            const position = getPositionHoverObject(index, props.sizes.amount_section);
            const positionHorizontal : Vector3 = getPositionModuleHorizontal(index, props.sizes.amount_section);
            return (
                <group key={index}>
                    <mesh
                        visible={props.optionsModules}
                        {...props}
                        position={position}
                        onPointerOver={() => selectedId === null && setHoveredIndex(index)}
                        onPointerOut={() => setHoveredIndex(null)}
                        onClick={(e) => handleContextMenu(e, index)}
                    >
                        <boxGeometry args={[(props.sizes.width[0] / (props.sizes.amount_section)) - 3, props.sizes.height[0] - 12, 1]} />
                        <meshStandardMaterial color={hoveredIndex === index || selectedId === index ? 'hotpink' : 'orange'} transparent opacity={0.5} />
                        {/* контекстное меню для настройки модулей */}
                        {menuVisible && selectedId === index && (
                            <ContextMenuModules index={index} menuPosition={menuPosition} setMenuVisible={setMenuVisible} setSelectedId={setSelectedId} addModule={addModule} />
                        )}
                    </mesh>
                    {props.modules.map((section, key) => {
                        if (index === section.id) {
                           
                                // Логика вывода Модулей
                                return (
                                    <GroupShelf key={key} sizes={props.sizes} positionHorizontal={positionHorizontal} getPositionModuleVertical={getPositionModuleVertical} texture={textureRotate} section={section} index={index} />
                                )
                            
                        }
                    })}
                </group>

            );
        })




    )
}
export default Modules