import styles from './UICloset.module.css'
import { Button } from 'antd';
import Sliders from './sliders/Sliders';
import MaterialSliderCorpus from './MaterialSliderCorpus/MaterialSlider';
import MaterialSliderProfile from './MaterialSliderProfile/MaterialSlider';
const UICloset = () => {
    return (
        <div className={styles.main}>
            <h4 className={styles.title}>Параметры шкафа</h4>
            <Sliders />
            <MaterialSliderCorpus />
            <MaterialSliderProfile />
                    <div className={styles.lineBlock}>
                <Button className={styles.btn} type="primary">Далее</Button>
            </div>
        </div>
    )
}
export default UICloset