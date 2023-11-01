import {useState} from "react";
import styles from "./Home.module.css";
import BuildCloset from './build/Construct';
import {params_closet} from './build/closet'

//Интерфейс изменения высоты
export function ChangeHeight() {
    const [height,set] = useState(params_closet.sizes.height)
    function handleChange (e){
        set(params_closet.sizes.height = Number(e.target.value))
        BuildCloset();
    }
    return(
        <div className={styles.lineBtn}>
            <input className={styles.inputRange}
                   onChange={e=>handleChange(e)}
                   name="height" min="50" max="300" type="range" defaultValue="220" />
            <label className={styles.labelText} htmlFor="">{height}</label>
        </div>
    )
}
//Интерфейс изменения ширины
export function ChangeWidth() {
    const [width,set] = useState(params_closet.sizes.width)
    function handleChange (e){
        set(params_closet.sizes.width = Number(e.target.value))
        BuildCloset();
    }
    return(
        <div className={styles.lineBtn}>
            <input className={styles.inputRange} name="width"
                   onChange={e=>handleChange(e)}  min="100" max="300"
                   type="range" defaultValue="160" />
            <label className={styles.labelText} htmlFor="">{width}</label>
        </div>
    )
}
//Интерфейс изменения глубины
export function ChangeDepth() {
    const [depth,set] = useState(params_closet.sizes.depth)
    function handleChange (e){
        set(params_closet.sizes.depth = Number(e.target.value))
        BuildCloset();
    }
    return(
        <div className={styles.lineBtn}>
            <input className={styles.inputRange} name="depth"
                   onChange={e=>handleChange(e)}  min="35" max="75"
                   type="range" defaultValue="65" />
            <label className={styles.labelText} htmlFor="">{depth}</label>
        </div>
    )
}
//Интерфейс изменения секций
export function ChangeSection() {
    const [section,set] = useState(params_closet.amount_section)
    function handleChange (e){
        set(params_closet.amount_section = Number(e.target.value))
        BuildCloset();
    }
    return(
        <div className={styles.lineBtn}>
            <input className={styles.inputRange}  onChange={e=>handleChange(e)}
                   name="section"  min="2" max="9"
                   type="range" defaultValue="2" />
            <label className={styles.labelText} htmlFor="">{section}</label>
        </div>
    )
}