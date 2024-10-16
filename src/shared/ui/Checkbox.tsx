import { InputHTMLAttributes } from "react";

interface Checkbox extends InputHTMLAttributes<HTMLInputElement>{

}

const Checkbox: React.FC<Checkbox> = ({ ...props }) => {
    return (
        <input type="checkbox" checked={true} {...props} className="checkbox checkbox-secondary border-white-400 [--chkfg:white] checkbox-sm" />
        
    );

}

export default Checkbox;