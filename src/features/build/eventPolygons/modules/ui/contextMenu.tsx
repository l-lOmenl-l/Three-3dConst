import { Html } from "@react-three/drei"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Button } from "@mui/material";
import { IInput, IMenuPosition } from "../modules";
import { SetStateAction } from "react";

type Props={
    menuPosition:IMenuPosition,
    index:number,
    setMenuVisible: React.Dispatch<SetStateAction<boolean>>,
    setSelectedId: React.Dispatch<SetStateAction<number|null>>,
    addModule:(index:number, object:IInput[])=>void
}
function ContextMenuModules(props:Props) {
    return ( 
        <Html position={[props.menuPosition.x, props.menuPosition.y, props.menuPosition.z]}>
        <div
            style={{
                width: 'auto',
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: "20px"
            }}
        >
            <div className="flex items-center justify-between">
                <p style={{ userSelect: 'none' }}>Секция №{props.index + 1}</p>
                <CloseOutlinedIcon onClick={() => { props.setMenuVisible(false), props.setSelectedId(null) }} style={{ cursor: 'pointer' }} />

            </div>
                <div className="flex">
                    <div className="flex flex-col p-1 gap-2">
                        {/* Кнопки для полок */}
                        {[4, 5, 6, 7].map((item, key) => {
                            const out :IInput[]= [{type:'shelf',count:item}]
                            return (
                                <Button key={key} variant="contained" size="small" sx={{ whiteSpace: 'nowrap' }} onClick={() => props.addModule(props.index, out)}>{item} полки</Button>
                            )
                        })}
                    </div>
                    <div className="flex flex-col p-1 gap-2">
                        <Button  variant="contained" size="small" sx={{ whiteSpace: 'nowrap' }} onClick={() => props.addModule(props.index, [{type:'barbell',count:3},{type:'shelf',count:1}])}>3 штанги и полка</Button>

                    </div>
                </div>
           
        </div>
    </Html>
     );
}

export default ContextMenuModules;