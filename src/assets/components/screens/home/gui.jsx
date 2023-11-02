import {useState} from "react";
import styles from "./Home.module.css";
import BuildCloset from '../../build/Construct';
import {params_closet} from '../../build/closet'
import materialJson from '../../build/material.json'

//Интерфейс изменения высоты
export function ChangeHeight() {
    const [height,set] = useState(params_closet.sizes.height)
    function handleChange (e){
        set(params_closet.sizes.height = Number(e.target.value))
        BuildCloset();
    }
    return(
        <div className={styles.lineBtn}>
            <input className={styles.inputRange} onChange={e=>handleChange(e)} min="50" max="300" type="range" defaultValue="220" />
            <label className={styles.labelText}>{height}</label>
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
            <input className={styles.inputRange} onChange={e=>handleChange(e)} min="100" max="300" type="range" defaultValue="160" />
            <label className={styles.labelText}>{width}</label>
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
            <input className={styles.inputRange} onChange={e=>handleChange(e)} min="35" max="75" type="range" defaultValue="65" />
            <label className={styles.labelText}>{depth}</label>
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
            <input className={styles.inputRange} onChange={e=>handleChange(e)} min="2" max="9" type="range" defaultValue="2" />
            <label className={styles.labelText}>{section}</label>
        </div>
    )
}

//Интерфейс выборки материала
export function ChangeMaterial() {
    console.log(materialJson)
    return(
        <div className={styles.lineSlider}>
            {materialJson.map((item, index) => {
                return (
                    <div key={index} className={styles.circleMaterial} style={{backgroundImage:`url(${item.url})`}}></div>
                );
            })}
        </div>
    )
}

