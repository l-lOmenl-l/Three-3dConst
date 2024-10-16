import { InputHTMLAttributes } from "react";

interface Toggle extends InputHTMLAttributes<HTMLInputElement>{

}

const Toggle: React.FC<Toggle> = ({  ...props }) => {
    return (
        <input type="checkbox" className="toggle toggle-secondary" {...props} />
    );

}

export default Toggle;