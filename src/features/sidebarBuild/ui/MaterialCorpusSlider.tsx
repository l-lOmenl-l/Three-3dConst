import HorizontalScroll from "react-scroll-horizontal";
import MaterialCirc from "@/shared/ui/MaterialCirc";


type Props={
    materialJSON:object,
    texture:string,
    ChangeTexture:(value:string)=>void
}

function MaterialCorpusSlider(props:Props) {

    return (
        <>
            <div className="h-[70px]">
            <HorizontalScroll>
                <div className="flex gap-2" style={{width:window.innerWidth/3}}>
                    {props.materialJSON.шк.corpus.map((item,key)=>{
                        return(
                            <MaterialCirc texture={props.texture} background={item.url} name={item.name} ChangeTexture={props.ChangeTexture} key={key}/>
                        )
                    })}
                </div>
            </HorizontalScroll>
            </div>
        </>
    );
}

export default MaterialCorpusSlider;