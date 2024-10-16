import SliderRange from "@/shared/ui/Slider";
import product from "@/entities/testProduct";
import Checkbox from "@/shared/ui/Checkbox";
import SectionBtn from "@/shared/ui/SectionBtn";
import HorizontalScroll from "react-scroll-horizontal";
type Props={
    ChangeWidth:(value: number[])=>void,
    ChangeDepth:(value: number[])=>void,
    ChangeHeight:(value: number[])=>void,
    ChangeBase:()=>void,
    changeSection:(value: number)=>void,
    sizes:DomainSizes, 
    minWidth:number
    maxWidth:number,
    section:string[],
    base:boolean
    
}
function DimensionsUI(props:Props) {

    return (
        <>
        
        <div className="flex justify-between items-center gap-5">
                <p className="w-auto text-nowrap">Количество секций:</p>
                <HorizontalScroll>
                    <div className="flex-grow-0 flex overflow-auto gap-2 scrollbar scrollbar-h-1" style={{width:(window.innerWidth/3)-100}}>
                    {props.section.map((item, key) => {
                    return (
                    <SectionBtn key={key} label={item} onClick={() => props.changeSection(Number(item))} selected={Number(item) === props.sizes.amount_section} />
                    )
                })}
                    </div>
                </HorizontalScroll>
            </div>
            <div>
                <p className="text-lg font-bold">Параметры</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="w-1/4">Высота:</p>
                <SliderRange min={51} max={287} step="1" value={String(props.sizes.height)} onChange={(e) => props.ChangeHeight([Number(e.target.value)])} />
                <p className="w-1/4 text-end">{product.sizes?.height}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="w-1/4">Ширина:</p>
                <SliderRange min={props.minWidth} max={props.maxWidth} value={String(props.sizes.width)} onChange={(e) => props.ChangeWidth([Number(e.target.value)])} />
                <p className="w-1/4 text-end">{product.sizes?.width}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="w-1/4">Глубина:</p>
                <SliderRange min={35} max={70} value={String(props.sizes.depth)} onChange={(e) => props.ChangeDepth([Number(e.target.value)])} />
                <p className="w-1/4 text-end">{product.sizes?.depth}</p>
            </div>
            <div className="flex justify-between items-center">
            <p className="w-1/4">Цоколь:</p>
                <Checkbox checked={props.base} onChange={()=>props.ChangeBase()}/>
            </div>
        </>
    );
}

export default DimensionsUI;