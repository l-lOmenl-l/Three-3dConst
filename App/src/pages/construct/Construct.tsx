import React from 'react'
import UICloset from '../../features/UICloset/ui/UICloset'
import { RenderScene } from '../../features/BuildCloset/scene'
import styles from './Constuct.module.css'
const Construct = () => {
  return (
    <>
      <div className={styles.main}>
        <UICloset />
        <RenderScene />
      </div>
    </>

  )
}

export default Construct 