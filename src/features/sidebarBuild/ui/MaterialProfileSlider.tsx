import HorizontalScroll from "react-scroll-horizontal";
import MaterialCirc from "@/shared/ui/MaterialCirc";

type Props = {
    materialJSON: object,
    color: string,
    ChangeColorProfile: (value: string) => void
}

function MaterialProfileSlider(props: Props) {

    return (
        <div className="h-[70px]">
            <HorizontalScroll>
                <div className="flex gap-2" style={{ width: window.innerWidth / 3 }}>
                    {props.materialJSON.шк.profile.map((item, key) => {
                        return (
                            <MaterialCirc texture={props.color} background={item.color} name={item.name} key={key} ChangeTexture={props.ChangeColorProfile} />
                        )
                    })}
                </div>
            </HorizontalScroll>
        </div>
    );
}

export default MaterialProfileSlider;