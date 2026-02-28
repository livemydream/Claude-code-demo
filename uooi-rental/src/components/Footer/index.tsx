import React from 'react';
import styles from './index.module.less';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Logo 和地址 */}
        <div className={styles.brandSection}>
          <div className={styles.logo}>
            <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="6" fill="white"/>
              <path d="M8 12L16 6L24 12V22C24 23.1 23.1 24 22 24H10C8.9 24 8 23.1 8 22V12Z" stroke="#0056D2" strokeWidth="2" fill="none"/>
              <path d="M12 24V16H20V24" stroke="#0056D2" strokeWidth="2"/>
            </svg>
            <span className={styles.logoText}>UOOI</span>
          </div>

          <div className={styles.address}>
            <p>403A-4388 BERESFORD ST</p>
            <p>BURNABY, BC V5H 0E7</p>
          </div>

          <div className={styles.hours}>
            <p>Monday — Friday</p>
            <p>9:00 am — 5:00 pm</p>
          </div>
        </div>

        {/* 版权信息 */}
        <div className={styles.copyright}>
          <p>©2022 UOOI. Powered by UOOI. All rights reserved.</p>
          <p>Developed by Activator Tube Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
