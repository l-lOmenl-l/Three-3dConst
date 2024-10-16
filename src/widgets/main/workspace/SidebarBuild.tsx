'use client'

import DimensionsUI from "@/features/sidebarBuild/ui/Dimensions"
import CanvasModel from "./Canvas"
import { useBaseOptions } from "@/features/sidebarBuild/hooks/useBaseOptions"
import MaterialCorpusSlider from "@/features/sidebarBuild/ui/MaterialCorpusSlider"
import MaterialProfileSlider from "@/features/sidebarBuild/ui/MaterialProfileSlider"

const SidebarBuild = () => {

    const { ChangeHeight, sizes, ChangeWidth, ChangeDepth, minWidth, maxWidth,section,changeSection,materialJSON,texture, ChangeTexture, ChangeBase, ChangeColorProfile, base, color} = useBaseOptions()
    
    return (
        <>
            <div className="w-2/6 h-full bg-white px-6 flex flex-col gap-2 pt-3">
                <div>
                    <p className="text-lg font-bold">Вариант исполнения</p>
                </div>
                <DimensionsUI ChangeHeight={ChangeHeight} sizes={sizes} ChangeWidth={ChangeWidth} ChangeDepth={ChangeDepth} minWidth={minWidth} maxWidth={maxWidth} section={section} changeSection={changeSection} ChangeBase={ChangeBase} base={base}/>
                <div>
                    <p className="text-lg font-bold">Материал корпуса</p>
                </div>
                <MaterialCorpusSlider materialJSON={materialJSON} ChangeTexture={ChangeTexture} texture={texture}/>
                <div>
                    <p className="text-lg font-bold">Материал профиля</p>
                </div>
                <MaterialProfileSlider materialJSON={materialJSON} ChangeColorProfile={ChangeColorProfile} color={color}/>
            </div>
            <div className="w-4/6">
                <CanvasModel sizes={sizes} texture={texture} base={base} color={color}/>
            </div>
        </>
    )

}

export default SidebarBuild
