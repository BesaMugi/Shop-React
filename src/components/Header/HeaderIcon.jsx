import React from 'react';
import headIcon from "./shop-bag.png";
import styles from "./Header.module.css";

const HeaderIcon = () => {
  return (
    <div className={styles.headIcon}>
        <img src={headIcon} alt="" />
    </div>
  )
};

export default HeaderIcon;