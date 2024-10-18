import React from 'react';
import styles from '../styles.module.css';
import tablet from '../assets/tablet.svg';
import threeDBtnImg from '../assets/threeDBtnImg.svg'
import scalingImg from '../assets/scaling.svg'
import locationBtn from '../assets/linemap.svg';
import playBtn from '../assets/playBtn.svg';
const LeftPanel = () => {
    return (
        <div className={styles.leftPanel}>
            {/* Ellipse as the base beneath the image */}
            <div className={styles.ellipse}></div>

            <img
                src={tablet}
                alt="Main"
                className={styles.tabstyle}
            />

            {/* Featured buttons div */}
            <div className={styles.featuredButtons}>
                <button className={styles.featuredButton}>
                    <img src={threeDBtnImg} className={styles.threeDBtn} alt="Button Icon"  />
                </button>
                <button className={styles.featuredButton}>
                <img src={scalingImg} className={styles.scalingImg} alt="Button Icon"  />
                </button>
                <button className={styles.featuredButton}>
                <img src={locationBtn} className={styles.locationBtn} alt="Button Icon"  />
                </button>
                <button className={styles.featuredButton}>
                <img src={playBtn} className={styles.playBtn} alt="Button Icon" />
                </button>
                <button className={styles.featuredButton}>
                <img src={playBtn} className={styles.playBtn} alt="Button Icon"  />
                </button>
                <button className={styles.featuredButton}></button>
                <button className={styles.featuredButton}></button>
            </div>
        </div>
    );
};

export default LeftPanel;
