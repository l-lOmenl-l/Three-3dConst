import React, { ReactNode } from 'react'
import { Carousel,Popover } from 'antd';
import styles from './MaterialSlider.module.css'
import materialJson from '../../../../config/material.json'

interface IMaterial{
  url:string,
  name:string
}

function spliceIntoChunks(arr:object[], chunkSize:number) {
  const res = [];
  while (arr.length > 0) {
      const chunk = arr.splice(0, chunkSize);
      res.push(chunk);
  }
  return res;
}

const MaterialSliderCorpus = () => {
  const data = JSON.parse(JSON.stringify(materialJson))
  
  let list = data["шк"].corpus.map((item: IMaterial, index: number) =>
  <Popover title={item.name}>
    <div key={index.toString()} className={styles.materialBlock} style={{ backgroundImage: `url(${item.url})` }}>
    </div>
  </Popover>
  )

  list = spliceIntoChunks(list, 5)
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <>
     <h5 className={styles.titleOption}>Материал корпуса:</h5>
      <Carousel className={styles.carousel}>
      {list.map((item:ReactNode, index: number)=>
      <div key={index.toString()} className={styles.blockContent}>
        {item}
      </div>
      )}
    </Carousel>
    </>
  )
}



export default MaterialSliderCorpus