import React, { ReactNode } from 'react'
import { Carousel, Popover } from 'antd';
import styles from './MaterialSlider.module.css'



const MaterialSliderProfile = () => {
    return (
        <>
        <h5 className={styles.titleOption}>Материал профиля:</h5>
        <Carousel className={styles.carousel}>
            <div className={styles.blockContent}>
                <Popover title="Серебро">
                    <div className={styles.materialBlock} style={{ backgroundColor: `#c3c3c3` }}>
                    </div>
                </Popover>
            </div>
        </Carousel>
        </>
    )
}

export default MaterialSliderProfile