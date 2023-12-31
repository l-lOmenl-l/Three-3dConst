import {useState} from "react";
import styles from "./Home.module.css";
import BuildCloset from '../../build/Construct';
import {params_closet} from '../../build/closet'
import materialJson from '../../build/material.json'
import {changeMaterialCloset} from "../../build/Construct.jsx";
import { events } from "@react-three/fiber";
import * as THREE from "three";

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

    const [section,set] = useState(params_closet.materials)
    function handleChange (index){
        let data = JSON.parse(JSON.stringify(materialJson))
        let texture = new THREE.TextureLoader().load(data["шк"].corpus[index].url);
        let material = new THREE.MeshBasicMaterial( { map: texture } );
        material.name = data["шк"].corpus[index].name
        set(params_closet.materials.corpus = material)
        changeMaterialCloset();
    }
    function getArray(){
        let data = JSON.parse(JSON.stringify(materialJson))
        return data["шк"].corpus
    }
    return(
        <div className={styles.lineSlider}>
            {getArray().map((item, index) => {
             return (
                 <div>
                    <button key={index} className={styles.circleMaterial}  onClick={()=>handleChange(index)} style={{backgroundImage:`url(${item.url})`}} />
                    <p>{item.name}</p>
                 </div>
                );
            })}
        </div>
    )


}

