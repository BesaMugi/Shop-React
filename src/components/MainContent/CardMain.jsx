import React from 'react'
import styles from "./MainContent.module.css"

const CardMain = ({name, price, image }) => {
  return (
    <div className={styles.item}>

        <div className={styles.cardIcon}>
            <img src={image} alt="" />
        </div>

        <div className={styles.price}>
            {price}
        </div>

        <div className={styles.name}>
            {name}
        </div>
        
        <button className={styles.button}>
            Купить
        </button>
    </div>
  )
}

export default CardMain