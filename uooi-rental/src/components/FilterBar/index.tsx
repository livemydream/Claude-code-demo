import React from 'react';
import { Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import styles from './index.module.less';

interface FilterBarProps {
  value?: string;
  onChange?: (filter: string) => void;
}

const propertyTypes: MenuProps['items'] = [
  { key: 'any', label: 'Any' },
  { key: 'highrise', label: 'High-rise' },
  { key: 'lowrise', label: 'Low-rise' },
  { key: 'house', label: 'House' },
  { key: 'townhouse', label: 'Townhouse' },
];

const rentalTypes: MenuProps['items'] = [
  { key: 'any', label: 'Any' },
  { key: 'shortterm', label: 'Short Term' },
  { key: 'longterm', label: 'Long Term' },
];

const FilterBar = ({ value = 'all', onChange }: FilterBarProps) => {
  return (
    <div className={styles.filterBar}>
      <div className={styles.filterContent}>
        {/* Filters 按钮 */}
        <Button className={styles.filterBtn}>Filters</Button>

        {/* Property Type 下拉 */}
        <Dropdown menu={{ items: propertyTypes }} placement="bottomLeft">
          <Button className={styles.dropdownBtn}>
            Property type <DownOutlined className={styles.dropdownIcon} />
          </Button>
        </Dropdown>

        {/* Rental Type 下拉 */}
        <Dropdown menu={{ items: rentalTypes }} placement="bottomLeft">
          <Button className={styles.dropdownBtn}>
            Rental Type <DownOutlined className={styles.dropdownIcon} />
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default FilterBar;
