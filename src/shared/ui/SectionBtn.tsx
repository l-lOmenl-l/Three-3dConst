import { ButtonHTMLAttributes } from "react";

interface SectionBtn extends ButtonHTMLAttributes<HTMLButtonElement>{
    label:string,
    selected:boolean
}

const SectionBtn: React.FC<SectionBtn> = ({  ...props }) => {
    return (
        <button className="h-full w-auto flex flex-col items-center" {...props}>
            <p className="text-xs select-none">{props.label}</p>
            <div className={props.selected?"h-[5px] w-[10px] btn min-h-0 rounded-none px-4 btn-secondary":"h-[5px] w-[10px] btn min-h-0 rounded-none px-4 btn-accent"} ></div>
        </button>
        
    );

}

export default SectionBtn;