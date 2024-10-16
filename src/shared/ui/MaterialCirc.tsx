import { Tooltip } from "@mui/material";

interface MaterialCirc {
    background: string,
    name: string,
    texture: string|null,
    ChangeTexture: (value: string) => void
}

const MaterialCirc: React.FC<MaterialCirc> = ({ ...props }) => {
    const active =  props.texture === props.background
    return (
        <Tooltip title={props.name} aria-label="add">
            <div className="w-[65px] min-w-[65px] h-[65px] border-2 rounded-full cursor-pointer" style={active ? { backgroundImage: `url(${props.background})`, backgroundColor: props.background, borderColor: '#4B9500FF' } : { backgroundImage: `url(${props.background})`, backgroundColor: props.background }} onClick={() => props.ChangeTexture(props.background)}>
            </div>
        </Tooltip>
    );

}

export default MaterialCirc;