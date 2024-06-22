import React, { useState } from 'react';
import { Slider } from 'antd';
import closet from '../../../../entities/closet';
import Build from '../../../BuildCloset/build';
import { scene } from '../../../BuildCloset/scene';
import styles from './Sliders.module.css'

const Sliders = () => {
    const [height, setHeight] = useState(closet.sizes.height)
    const [width, setWidth] = useState(closet.sizes.width)
    const [depth, setDeep] = useState(closet.sizes.depth)
    const [section, setSection] = useState(closet.section)
    const setStateHeight = (e: number) => {
        Build(scene);
        setHeight(e)
        closet.changeHeight(e);
    }
    const setStateWidth = (e: number) => {
        Build(scene);
        setWidth(e)
        closet.changeWidth(e);
    }
    const setStateDeep = (e: number) => {
        Build(scene);
        setDeep(e)
        closet.changeDeep(e);
    }
    const setStateSection = (e: number) => {
        Build(scene);
        setSection(e)
        closet.changeSection(e);
    }
    return (
        <>
            <div className={styles.option}>
                <h5 className={styles.titleOption}>Высота:</h5>
                <div className={styles.blockSlider}>
                    <Slider className={styles.slider} min={0} max={350} defaultValue={height} onChange={(e) => setStateHeight(e)} tooltip={{ open: false }} />
                    <p className={styles.textMetrik}>{height}</p>
                </div>
            </div>
            <div className={styles.option}>
                <h5 className={styles.titleOption}>Ширина:</h5>
                <div className={styles.blockSlider}>
                    <Slider className={styles.slider} min={0} max={350} defaultValue={width} onChange={(e) => setStateWidth(e)} tooltip={{ open: false }} />
                    <p className={styles.textMetrik}>{width}</p>
                </div>
            </div>
            <div className={styles.option}>
                <h5 className={styles.titleOption}>Глубина:</h5>
                <div className={styles.blockSlider}>
                    <Slider className={styles.slider} min={0} max={150} defaultValue={depth} onChange={(e) => setStateDeep(e)} tooltip={{ open: false }} />
                    <p className={styles.textMetrik}>{depth}</p>
                </div>
            </div>
            <div className={styles.option}>
                <h5 className={styles.titleOption}>Секции:</h5>
                <div className={styles.blockSlider}>
                    <Slider className={styles.slider} min={1} max={6} defaultValue={section} onChange={(e) => setStateSection(e)} tooltip={{ open: false }} />
                    <p className={styles.textMetrik}>{section}</p>
                </div>
            </div>
        </>
    )
}

export default Sliders