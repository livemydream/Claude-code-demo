import React, { useState } from 'react';
import { Dropdown, Button } from 'antd';
import { UserOutlined, DownOutlined, GlobalOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import styles from './index.module.less';

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  // Services 下拉菜单
  const servicesMenuItems: MenuProps['items'] = [
    { key: 'maintenance', label: 'Maintenance' },
    { key: 'repairs', label: 'Repairs' },
    { key: 'cleaning', label: 'Cleaning Services' },
  ];

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContent}>
        {/* Logo */}
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="6" fill="#0056D2"/>
              <path d="M8 12L16 6L24 12V22C24 23.1 23.1 24 22 24H10C8.9 24 8 23.1 8 22V12Z" stroke="white" strokeWidth="2" fill="none"/>
              <path d="M12 24V16H20V24" stroke="white" strokeWidth="2"/>
            </svg>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>UOOI</span>
            <span className={styles.logoSubtitle}>Professional Management Group</span>
          </div>
        </div>

        {/* 导航链接 */}
        <nav className={styles.navMenu}>
          <a href="#" className={styles.navLink}>Home</a>
          <a href="#" className={styles.navLink}>Rent Listing</a>
          <Dropdown
            menu={{ items: servicesMenuItems }}
            open={servicesOpen}
            onOpenChange={setServicesOpen}
            placement="bottomLeft"
          >
            <a className={styles.navLink} onClick={(e) => e.preventDefault()}>
              Services <DownOutlined className={styles.dropdownIcon} />
            </a>
          </Dropdown>
          <a href="#" className={styles.navLink}>Contact Us</a>
        </nav>

        {/* 右侧操作区 */}
        <div className={styles.actions}>
          {/* 语言选择 */}
          <button className={styles.langBtn}>
            <GlobalOutlined className={styles.langIcon} />
            En
          </button>

          {/* 用户图标 */}
          <button className={styles.userIcon}>
            <UserOutlined />
          </button>

          {/* Tenants 按钮 */}
          <Button type="primary" className={styles.tenantsBtn}>
            Tenants
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
