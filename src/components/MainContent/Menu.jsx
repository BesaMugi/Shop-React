import React from 'react'
import styles from "./MainContent.module.css"

const Menu = () => {
  return (
    <div>
        <ul className={styles.menu}>
            <li>
                Гаджеты и аксесуары
            </li>
            <hr />
            <li>
                Бытовая техника
            </li>
            <hr />
            <li>
                Прочее
            </li>
        </ul>
    </div>
  )
}

export default Menu