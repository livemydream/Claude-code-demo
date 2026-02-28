import React from 'react';
import { Tag, Rate } from 'antd';
import { EnvironmentOutlined, HomeOutlined } from '@ant-design/icons';
import type { Listing } from '@/types/listing';
import styles from './index.module.less';

interface ListingCardProps {
  listing: Listing;
}

const listingImages = [
  'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
];

const ListingCard = ({ listing }: ListingCardProps) => {
  const imageUrl = listing.image || listingImages[Math.floor(Math.random() * listingImages.length)];

  return (
    <div className={styles.listingCard}>
      {/* 图片区域 */}
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={listing.title} className={styles.listingImage} />
        {listing.featured && <span className={styles.featuredTag}>Featured</span>}
      </div>

      {/* 内容区域 */}
      <div className={styles.cardContent}>
        <div className={styles.header}>
          <h3 className={styles.title}>{listing.title}</h3>
          <div className={styles.price}>${listing.price}<span className={styles.period}>/月</span></div>
        </div>

        <div className={styles.address}>
          <EnvironmentOutlined className={styles.icon} />
          <span>{listing.address}</span>
        </div>

        <div className={styles.info}>
          <div className={styles.infoItem}>
            <HomeOutlined className={styles.icon} />
            <span>{listing.area}</span>
          </div>
          <div className={styles.infoItem}>
            <span>{listing.beds} 室</span>
          </div>
          <div className={styles.infoItem}>
            <span>{listing.baths} 卫</span>
          </div>
        </div>

        <div className={styles.rating}>
          <Rate disabled defaultValue={4.5} allowHalf />
          <span className={styles.ratingText}>(4.5)</span>
        </div>

        {listing.tags && listing.tags.length > 0 && (
          <div className={styles.tags}>
            {listing.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListingCard;
