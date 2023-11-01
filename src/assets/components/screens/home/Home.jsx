import styles from './Home.module.css'

import BuildCloset from './build/Construct';
import {params_closet} from './build/closet'



  


export const Home = () => {
  function changeRender({ target }) {
    switch (true) {
      case target.name=='width':
        params_closet.x =  Number(target.value)
        BuildCloset()
        break;
      case target.name=='height':
        params_closet.z = Number(target.value)
        BuildCloset()
        break;
      case target.name=='deep':
        params_closet.y = Number(target.value)
        BuildCloset()
        break;
    }
  }

  return (
    <div className={styles.mainBody}>
      <div className={styles.lineMenu}>
        <p className="text-btn">Высота</p>
        <div className={styles.lineBtn}>
          <input className="btn" name="height" onChange={changeRender} min="0" max="250" type="range" defaultValue="220" />
        </div>
      </div>
      <div className={styles.lineMenu}>
        <p className="text-btn">Ширина</p>
        <div className={styles.lineBtn}>
          <input className="btn" name="width" onClick={changeRender} type="range" value="160" />
        </div>
      </div>
      <div className={styles.lineMenu}>
        <p className="text-btn">Глубина</p>
        <div className={styles.lineBtn}>
          <input className="btn" name="deep" onClick={changeRender} type="range" value="65" />
        </div>
      </div>
        <BuildCloset />
    </div>
    
  )
}

export default Home