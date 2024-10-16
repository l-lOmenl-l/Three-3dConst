import { InputHTMLAttributes } from "react";

interface SliderRange extends InputHTMLAttributes<HTMLInputElement>{

}

const SliderRange: React.FC<SliderRange> = ({  ...props }) => {
    return (
        <input type="range" {...props} className="w-1/2 range range-secondary range-xs "/>
    );

}

export default SliderRange;