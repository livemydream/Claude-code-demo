import React from 'react';
import styles from './index.module.less';

// Figma 图片资源（最新获取）
const imgEllipse48 = 'https://www.figma.com/api/mcp/asset/89241555-5ec5-4fbb-9269-285686e55fc8';
const imgGroup6862 = 'https://www.figma.com/api/mcp/asset/f26acf68-0438-488c-bdbc-ba99543f0d76';
const imgRectangle206 = 'https://www.figma.com/api/mcp/asset/77163074-6d84-40bc-ac98-cb668305417a';
const imgRectangle207 = 'https://www.figma.com/api/mcp/asset/583a359c-c9d3-4d5a-8829-8686241050e8';
const imgRectangle208 = 'https://www.figma.com/api/mcp/asset/37e1bbf6-0f65-4c38-b52c-a6d23b84d1f1';
const imgRectangle209 = 'https://www.figma.com/api/mcp/asset/382a34dc-db62-43d2-b000-c872d284b53a';
const imgRectangle210 = 'https://www.figma.com/api/mcp/asset/9643534e-5d7b-4709-b9e2-91e38fa29bcb';
const imgRectangle211 = 'https://www.figma.com/api/mcp/asset/de5cb698-ba0a-40a4-922d-6b510eb4ec6b';
const imgRectangle212 = 'https://www.figma.com/api/mcp/asset/52073ce3-714c-41b2-a997-a61eb8c0a706';
const imgRectangle213 = 'https://www.figma.com/api/mcp/asset/6fc9c1e5-3a51-40d0-8f99-19ea5bcac448';
const imgRectangle214 = 'https://www.figma.com/api/mcp/asset/635f6d9e-0f88-4905-851a-06658501b924';
const imgGroup = 'https://www.figma.com/api/mcp/asset/58befa03-15c0-4f4a-86bb-faa8cdde3c42';
const imgGroup1 = 'https://www.figma.com/api/mcp/asset/5502c9fc-844b-424b-8421-00c6623d8060';

export default function GroceryCoverPage() {
  return (
    <div className={styles.cover}>
      <div className={styles.designContainer}>
        {/* 背景椭圆装饰 */}
        <div className={styles.bgEllipse}>
          <img src={imgEllipse48} alt="" className={styles.bgEllipseImg} />
        </div>

        {/* 装饰图形组 */}
        <div className={styles.decorGroup}>
          <img src={imgGroup6862} alt="" className={styles.decorGroupImg} />
        </div>

        {/* Logo 区域 */}
        <div className={styles.logoSection}>
          <div className={styles.logo}>
            <img src={imgGroup} alt="" className={styles.logoIcon1} />
            <img src={imgGroup1} alt="" className={styles.logoIcon2} />
          </div>
          <p className={styles.logoText}>online groceriet</p>
        </div>

        {/* 标签按钮 */}
        <div className={styles.tagButton}>
          <div className={styles.tagBg} />
          <p className={styles.tagText}>Mobile App UI Kit</p>
        </div>

        {/* 主标题 */}
        <div className={styles.mainTitle}>
          <p>Who needs</p>
          <p>{`Online Groceries `}</p>
          <p>App UI</p>
        </div>

        {/* 主要卡片（最前方，带绿色阴影）- 直接在 designContainer 下 */}
        <div className={styles.cardMain}>
          <div className={styles.cardWrapper}>
            <div className={styles.cardInner}>
              <img src={imgRectangle214} alt="" className={styles.cardImage} />
            </div>
          </div>
        </div>

        {/* 后层卡片堆叠区域 (Group 6863) */}
        <div className={styles.cardsContainer}>
          {/* 后层卡片 1 */}
          <div className={styles.cardBack1}>
            <div className={styles.cardWrapper}>
              <div className={styles.cardInner}>
                <img src={imgRectangle213} alt="" className={styles.cardImage} />
              </div>
            </div>
          </div>

          {/* 后层卡片 2 */}
          <div className={styles.cardBack2}>
            <div className={styles.cardWrapper}>
              <div className={styles.cardInner}>
                <img src={imgRectangle209} alt="" className={styles.cardImage} />
              </div>
            </div>
          </div>

          {/* 后层卡片 3 */}
          <div className={styles.cardBack3}>
            <div className={styles.cardWrapper}>
              <div className={styles.cardInner}>
                <img src={imgRectangle210} alt="" className={styles.cardImage} />
              </div>
            </div>
          </div>

          {/* 后层卡片 4 */}
          <div className={styles.cardBack4}>
            <div className={styles.cardWrapper}>
              <div className={styles.cardInner}>
                <img src={imgRectangle207} alt="" className={styles.cardImage} />
              </div>
            </div>
          </div>

          {/* 后层卡片 5 */}
          <div className={styles.cardBack5}>
            <div className={styles.cardWrapper}>
              <div className={styles.cardInner}>
                <img src={imgRectangle211} alt="" className={styles.cardImage} />
              </div>
            </div>
          </div>

          {/* 后层卡片 6 */}
          <div className={styles.cardBack6}>
            <div className={styles.cardWrapper}>
              <div className={styles.cardInner}>
                <img src={imgRectangle212} alt="" className={styles.cardImage} />
              </div>
            </div>
          </div>

          {/* 后层卡片 7 */}
          <div className={styles.cardBack7}>
            <div className={styles.cardWrapper}>
              <div className={styles.cardInner}>
                <img src={imgRectangle210} alt="" className={styles.cardImage} />
              </div>
            </div>
          </div>

          {/* Mask Group 卡片（带绿色阴影） */}
          <div className={styles.cardMask}>
            <div className={styles.cardWrapper}>
              <div className={styles.cardInnerMask}>
                <img src={imgRectangle207} alt="" className={styles.cardImage} />
              </div>
            </div>
          </div>

          {/* 后层卡片 8 */}
          <div className={styles.cardBack8}>
            <div className={styles.cardWrapper}>
              <div className={styles.cardInner}>
                <img src={imgRectangle206} alt="" className={styles.cardImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
