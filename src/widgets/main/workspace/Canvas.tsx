'use client'
import { Canvas, useLoader } from "@react-three/fiber";
import Base from "@/features/build/meshes/base";
import { OrbitControls } from '@react-three/drei';
import Standing from "@/features/build/meshes/standing";
import Floor from "@/features/build/meshes/floor";
import Backplate from "@/features/build/meshes/backplate";
import { useMemo, useState } from "react";
import ToggleModules from "./UIcanvas/toggleModules";
import { useRender } from "@/features/build/hooks/useRender";
import * as THREE from 'three';
import Modules from "@/features/build/eventPolygons/modules/modules";

type Props = {
  sizes: DomainSizes,
  texture: string,
  color:string,
  base: boolean
}
export interface IModule {
  id: number,
  type: string[],
}
const CanvasModel = (props: Props) => {

  const [modules, setModules] = useState<IModule[]>([])
  const [optionsModules, setOptionsModules] = useState<boolean>(false)
  const {Model} = useRender(props.color);

  const texture = useLoader(THREE.TextureLoader, props.texture);

  // Мемоизация текстуры для предотвращения повторной загрузки
  const memoizedTexture = useMemo(() => {
    texture.minFilter = THREE.LinearMipMapLinearFilter; // Включение мипмаппинга
    texture.magFilter = THREE.LinearFilter;
    return texture;
  }, [texture]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Canvas shadows camera={{ position: [0, 0, 400] }} dpr={[1, 2]} >
        <color attach="background" args={["#DEDEDE"]} />
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} />
        {/* ЗАКАЗНОЙ ШКАФ */}
        <group position={[0, -100, 0]}>
          <Base sizes={props.sizes} texture={memoizedTexture} base={props.base} Model={Model}/>
          <Standing sizes={props.sizes} texture={memoizedTexture} modules={modules} />
          <Floor sizes={props.sizes} texture={memoizedTexture} Model={Model}/>
          <Backplate sizes={props.sizes} />
          {/* логика модулей */}
          <Modules texture={memoizedTexture} optionsModules={optionsModules} sizes={props.sizes} setModules={setModules} modules={modules} />
        </group>

        <OrbitControls />
      </Canvas>
      <ToggleModules setOptionsModules={setOptionsModules} optionsModules={optionsModules} />
    </div>

  )

}
export default CanvasModel