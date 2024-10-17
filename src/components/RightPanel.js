import React from "react";
import styles from "../styles.module.css";
import emoji1 from "../assets/emoji1.svg";
import emoji2 from "../assets/emoji2.svg";
import emoji3 from "../assets/emoji3.svg";
import emoji4 from "../assets/emoji4.svg";
import emoji5 from "../assets/emoji4.svg";
import share from "../assets/share.svg";
import love from "../assets/heart.svg";
import detailsofproduct from "../assets/detailsofproduct.svg";
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
        {/* lower panel 1 */}
        <div className={styles.lowerRightPanel1}>
          <div className={styles.panel1upper}>
            <span className={styles.upper1text}>Artist 10 2nd Gen</span>
            <span className={styles.upper1btnbox}>
              <span className={styles.btnsdivatRightest}>
                <button className={styles.btnLoveAndShare}>
                  <img src={love} alt="love" />
                </button>
                <button className={styles.btnLoveAndShare}>
                  <img src={share} alt="share" />
                </button>
              </span>
            </span>
          </div>
          <div className={styles.panel1bottom}>
            <div className={styles.colourOuterDiv}>
              <p className={styles.colourText}>Colours</p>
              <div className={styles.panel3EmojiDiv}>
                <span
                  className={styles.emojiBox}
                  style={{
                    backgroundColor: "rgb(57,57,57)",
                    border: "1.5px solid rgba(216, 216, 216, 1)",
                  }}
                ></span>
                <span
                  className={styles.emojiBox}
                  style={{
                    backgroundColor: "rgb(96,117,84)",
                    border: "1.5px solid rgba(216, 216, 216, 1)",
                  }}
                ></span>
                <span
                  className={styles.emojiBox}
                  style={{
                    backgroundColor: "rgb(48,95,125)",
                    border: "1.5px solid rgba(216, 216, 216, 1)",
                  }}
                ></span>
                <span
                  className={styles.emojiBox}
                  style={{
                    backgroundColor: "rgb(205,159,161)",
                    border: "1.5px solid rgba(216, 216, 216, 1)",
                  }}
                ></span>
                <span
                  className={styles.emojiBox}
                  style={{
                    backgroundColor: "rgb(224,220,220)",
                    border: "1.5px solid rgba(216, 216, 216, 1)",
                  }}
                ></span>
                
              </div>
            </div>
            <div className={styles.productDetailBtnDiv}>
              <button className={styles.productDetailBtn}>
                <span className={styles.productDetailText}>
                  Product Details
                </span>
                  <img src={detailsofproduct} className={styles.productDetailLogo} alt="detailsofproducs" />
              </button>
            </div>
          </div>
        </div>

        {/* lower panel 2 */}
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

        <div className={styles.lowerRightPanel3}>
          <p className={styles.panel3Text}>How was your experience?</p>
          <div className={styles.panel3EmojiDiv}>
            <span className={styles.emojiBox}>
              <img alt="emoji1" src={emoji1} />
            </span>
            <span className={styles.emojiBox}>
              <img alt="emoji1" src={emoji2} />
            </span>
            <span className={styles.emojiBox}>
              <img alt="emoji1" src={emoji3} />
            </span>
            <span className={styles.emojiBox}>
              <img alt="emoji1" src={emoji4} />
            </span>
            <span className={styles.emojiBox}>
              <img alt="emoji1" src={emoji5} />
            </span>
          </div>
        </div>

        <div className={styles.lowerRightPanel4}>
          <p className={styles.panel4Paragraph}>
            Where are you in your buying journey?
          </p>
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
