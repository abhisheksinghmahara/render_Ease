import React from "react";
import styles from "../styles.module.css";

const RightPanel = () => {
  return (
    <div className={styles.rightPanel}>
      {/* Top Div with Gradient Background */}
      <div className={styles.topDivRightPanel}>
        {/* Text inside the top div */}
        <div className={styles.appliedVirtuallyText}>Applied Virtually</div>
      </div>

      {/* Lower Div */}
      <div className={styles.lowerDivRightPanel}>
        <div className={styles.lowerRightPanel1}>1</div>
        <div className={styles.lowerRightPanel2}>
          <button className={styles.addToCart}>
            <span className={styles.addToCartText}>Add to cart</span>
          </button>
          <button className={styles.similiarProducts}>
            <span className={styles.similiarProductsText}>
              Show Similar Products
            </span>
          </button>
        </div>
        <div className={styles.lowerRightPanel3}>3</div>

        <div className={styles.lowerRightPanel4}>
  <p className={styles.panel4Paragraph}>Where are you in your buying journey?</p>
  <select className={styles.panel4Select}>
    <option value="option1">Select an option</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
    <option value="option4">Option 4</option>
  </select>
</div>

        <div className={styles.lowerRightPanel5}>
          <div className={styles.innerPanel5}>
            <span className={styles.panel5Heading}>Tips to get best view:</span>
            <ul className={styles.panel5Content}>
              <li>Adequate Lighting</li>
              <li>Fast and Stable Internet</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
