import React from 'react';
import { LeftOutlined, RightOutlined, PlayCircleOutlined, EnvironmentOutlined } from '@ant-design/icons';
import styles from './index.module.less';

interface Listing {
  id: string;
  title: string;
  address: string;
  price: number;
  image: string;
  rented?: boolean;
}

const featuredListings: Listing[] = [
  {
    id: '1',
    title: 'East Vancouver New Renovated',
    address: '5629 Birney Avenue, Vancouver, BC, Canada',
    price: 1250,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    rented: true,
  },
  {
    id: '2',
    title: 'Downtown Modern Studio',
    address: '123 Main Street, Vancouver, BC, Canada',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
  },
  {
    id: '3',
    title: 'North Vancouver Family Home',
    address: '789 Oak Avenue, North Vancouver, BC, Canada',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  },
  {
    id: '4',
    title: 'Burnaby Luxury Apartment',
    address: '456 Kingsway, Burnaby, BC, Canada',
    price: 1950,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
  },
  {
    id: '5',
    title: 'Richmond Heritage House',
    address: '321 Westminster Highway, Richmond, BC, Canada',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    id: '6',
    title: 'Surrey Spacious Townhouse',
    address: '888 160 Street, Surrey, BC, Canada',
    price: 2400,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
];

const FeaturedListings = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.featuredSection}>
      <div className={styles.container}>
        {/* 标题和导航 */}
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Listings</h2>
          <div className={styles.arrows}>
            <button className={styles.arrowBtn} onClick={() => scroll('left')}>
              <LeftOutlined />
            </button>
            <button className={styles.arrowBtn} onClick={() => scroll('right')}>
              <RightOutlined />
            </button>
          </div>
        </div>

        {/* 横向滚动卡片列表 */}
        <div className={styles.scrollContainer} ref={scrollContainerRef}>
          <div className={styles.cardList}>
            {featuredListings.map((listing) => (
              <div key={listing.id} className={styles.card}>
                {/* 图片区域 */}
                <div className={styles.imageWrapper}>
                  <img src={listing.image} alt={listing.title} className={styles.image} />
                  {listing.rented && <span className={styles.rentedTag}>Rented</span>}

                  {/* 图片上的操作图标 */}
                  <div className={styles.imageActions}>
                    <button className={styles.actionBtn}>
                      <PlayCircleOutlined />
                    </button>
                    <button className={styles.actionBtn}>
                      <EnvironmentOutlined />
                    </button>
                  </div>
                </div>

                {/* 内容区域 */}
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{listing.title}</h3>
                  <p className={styles.address}>{listing.address}</p>
                  <p className={styles.price}>${listing.price.toLocaleString()} / Month</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
