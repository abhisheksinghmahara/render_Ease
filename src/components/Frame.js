import React from "react";
import styles from "../styles.module.css";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import arIcon from "../assets/viewInARImg.svg";
import zoomInIcon from '../assets/zoom-in.svg';
import zoomOutIcon from '../assets/zoom-out.svg';
import screenIcon from '../assets/screenView.svg';
// import RenderEaseLogo from '../assets/RenderEaseLogo.svg';
import RenderEaseLogo from '../assets/rendereaselogo.webp';
// import companylogoText from '../assets/RenderEase TextLogo.svg';
// import InsiderRenderEaseLogo from '../assets/InsiderRenderEaseLogo.svg';

const Frame = () => {
  return (
    <div className={styles.frame}>

      <div className={styles.crossButton}>
        <div className={styles.innerBox}>
          <svg width="44" height="44">
            {/* Vertical Line */}
            <line
              x1="22" // Start point (horizontal center)
              y1="11" // Start position (22px/2 = 11px)
              x2="22" // End point (horizontal center)
              y2="33" // End position (22px/2 + 22px = 33px)
              stroke="black"
              strokeWidth="2" // Thickness of the line
              strokeLinecap="round" // Rounded ends for the vertical line
            />
            {/* Horizontal Line */}
            <line
              x1="11" // Start point (22px/2 = 11px)
              y1="22" // Vertical center
              x2="33" // End point (22px/2 + 22px = 33px)
              y2="22" // Horizontal center
              stroke="black"
              strokeWidth="2" // Thickness of the line
              strokeLinecap="round" // Rounded ends for the horizontal line
            />
          </svg>
        </div>
      </div>

      <div className={styles.content}>
        <LeftPanel />
        
        {/* middlediv */}
        <div className={styles.middleContainer}>
          {/* view in ar btn  */}
          <div className={styles.topBtnStyleDiv}>
            <div className={styles.viewInAR}>
              <button className={styles.viewInARbtn}>
                <img
                  alt="arIcon"
                  src={arIcon}
                  className={styles.arIcon}
                  style={{ width: "100%", height: "100%" }}
                />
              </button>
              <span className={styles.viewInARText}>View In AR</span>
            </div>
          </div>
          {/* zoom btns  */}
          <div className={styles.buttonContDiv}>
            {/* Zoom In Button with Icon */}
            <button className={styles.middlelowerButton}>
              <img alt="zoom-in" src={zoomInIcon} className={styles.zoomIcon} />
            </button>
            <button className={styles.middlelowerButton}>
              <img alt="zoom-out" src={zoomOutIcon} className={styles.zoomOutIcon} />
            </button>
            <button className={styles.middlelowerButton}>
              <img alt="screenview" src={screenIcon} className={styles.screnIcon} />
            </button>
          </div>
        </div>

        <RightPanel />
      </div>
      {/* footer  */}
      <footer className={styles.footerforlogo} >
        <div className={styles.poweredByText} >
          Powered by
        </div>
      <div className={styles.logoDivRenderEase}>
        <img src={RenderEaseLogo} alt="company-logo" />
        {/* <div className={styles.logoDivRenderEase}>
          <div className={styles.companylogoBox} >
            <img src={RenderEaseLogo} alt="company-logo"/ >
          </div>
          <div className={styles.companylogoText}>
            <img src={companylogoText} className={styles.companylogoText} alt="companylogoText"/>
          </div >
        </div> */}
        </div> 
      </footer>
    </div>
  );
};

export default Frame;
