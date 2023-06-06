import React from 'react';
import styles from "./Header.module.css";
import HeaderIcon from './HeaderIcon';
import HeaderLogo from './HeaderLogo';

const Header = () => {
  return (
    <div>
        <div className={styles.header}>
            <HeaderLogo />
            <HeaderIcon />
        </div>
    </div>
  )
}

export default Header