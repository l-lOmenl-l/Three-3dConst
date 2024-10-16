import Toggle from "@/shared/ui/Toggle";
import { SetStateAction } from "react";
type Props={
    optionsModules:boolean,
    setOptionsModules: React.Dispatch<SetStateAction<boolean>>,
}
function ToggleModules(props:Props) {
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 'fit-content',
                display: 'flex',
                backgroundColor: 'white',
                padding: '10px',
                alignItems: 'center',
                gap: "20px",
                margin: '5px',
                borderRadius: '6px'
            }}
        >
            <p style={{ userSelect: 'none' }}>Настроить наполнение: </p>
            <Toggle checked={props.optionsModules} onChange={() => props.setOptionsModules(!props.optionsModules)} />
        </div>
    );
}

export default ToggleModules;