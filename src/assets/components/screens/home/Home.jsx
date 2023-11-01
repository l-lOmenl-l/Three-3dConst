import styles from './Home.module.css'
import BuildCloset from './build/Construct';
import * as GUI from './gui.jsx'

export const Home = () => {
  return (
    <div className={styles.mainBody}>
      <div className={styles.lineMenu}>
        <p className={styles.textBtn}>Высота</p>
        <GUI.ChangeHeight />
      </div>
      <div className={styles.lineMenu}>
        <p className={styles.textBtn}>Ширина</p>
        <GUI.ChangeWidth />
      </div>
      <div className={styles.lineMenu}>
        <p className={styles.textBtn}>Глубина</p>
        <GUI.ChangeDepth />
      </div>
      <div className={styles.lineMenu}>
        <p className={styles.textBtn}>Секции</p>
        <GUI.ChangeSection />
      </div>
        <BuildCloset />
    </div>
    
  )
}
export default Home
