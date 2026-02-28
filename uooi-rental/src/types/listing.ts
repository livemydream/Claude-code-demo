// 房源数据类型
export interface Listing {
  id: string;
  title: string;
  price: number;
  address: string;
  area: string;
  beds: number;
  baths: number;
  image: string;
  tags?: string[];
  featured?: boolean;
}

// 筛选器类型
export type FilterType = 'all' | 'apartment' | 'house' | 'villa' | 'studio';

// 导航菜单项
export interface NavItem {
  key: string;
  label: string;
  path: string;
}
