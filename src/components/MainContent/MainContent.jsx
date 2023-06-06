import React from "react";
import Menu from "./Menu";
import styles from "./MainContent.module.css"
import CardMain from "./CardMain";

const MainContent = () => {
  return (
    <div className={styles.main}>
        <Menu />
      <div className={styles.cardItem}>
        <CardMain name="Iphone 14 Pro Max" price="1.200$" image="https://img.mvideo.ru/Pdb/30064939b.jpg"/>
        <CardMain name="Iphone 14 Pro" price="1.100$" image="https://avatars.mds.yandex.net/get-mpic/2016828/img_id6576910136257959399.jpeg/orig"/>
        <CardMain name="Iphone 13 Pro Max" price="1.000$" image="https://images.biggeek.ru/1/435/264a/14730-555Space.jpg"/>
        <CardMain name="Iphone 13 Pro" price="900$" image="https://images.biggeek.ru/1/435/a6dd/14707-47BLue.jpg"/>
        <CardMain name="Iphone 12 Pro" price="850$" image="https://images.biggeek.ru/1/435/4b14/12465-456bigeek_image2.jpeg"/>
        <CardMain name="Iphone 12" price="750$" image="https://uralcases.ru/wp-content/uploads/2021/05/i12-purple.jpeg"/>
      </div>
    </div>
  );
};

export default MainContent;
