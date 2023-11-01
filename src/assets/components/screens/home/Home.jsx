import styles from './Home.module.css'

import BuildCloset from './build/Construct';
import {params_closet} from './build/closet'





  


export const Home = () => {

  function changeRender({ target }) {
    switch (true) {
      case target.name=='width':
        params_closet.sizes.width =  Number(target.value)
        BuildCloset()
        break;
      case target.name=='height':
        params_closet.sizes.height = Number(target.value)
        BuildCloset()
        break;
      case target.name=='depth':
        params_closet.sizes.depth = Number(target.value)
        BuildCloset()
        break;
      case target.name=='section':
        params_closet.amount_section = Number(target.value)
        BuildCloset()
        break;
    }
  }

  return (
    <div className={styles.mainBody}>

      <div className={styles.lineMenu}>
        <p className="text-btn">Высота</p>
        <div className={styles.lineBtn}>
          <input className={styles.inputRange} name="height" onChange={changeRender} min="50" max="300" type="range" defaultValue="220" />
        </div>
      </div>
      <div className={styles.lineMenu}>
        <p className="text-btn">Ширина</p>
        <div className={styles.lineBtn}>
          <input className={styles.inputRange} name="width" onChange={changeRender}  min="100" max="300" type="range" defaultValue="160" />
        </div>
      </div>
      <div className={styles.lineMenu}>
        <p className="text-btn">Глубина</p>
        <div className={styles.lineBtn}>
          <input className={styles.inputRange} name="depth" onChange={changeRender}  min="35" max="75" type="range" defaultValue="65" />
        </div>
      </div>
      <div className={styles.lineMenu}>
        <p className="text-btn">Секции</p>
        <div className={styles.lineBtn}>
          <input className={styles.inputRange} name="section" onChange={changeRender}  min="2" max="9" type="range" defaultValue="2" />
        </div>
      </div>
        <BuildCloset />
    </div>
    
  )
}

export default Home
