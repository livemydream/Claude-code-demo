import React from 'react';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import FeaturedListings from '@/components/FeaturedListings';
import FilterBar from '@/components/FilterBar';
import ListingCard from '@/components/ListingCard';
import Footer from '@/components/Footer';
import type { Listing } from '@/types/listing';
import styles from './index.module.less';

// 模拟房源数据
const mockListings: Listing[] = [
  {
    id: '1',
    title: 'East Vancouver New Renovated',
    price: 1250,
    address: '5629 Birney Avenue, Vancouver, BC, Canada',
    area: '85㎡',
    beds: 2,
    baths: 1,
    tags: ['New', 'Renovated'],
  },
  {
    id: '2',
    title: 'Downtown Modern Studio',
    price: 1800,
    address: '123 Main Street, Vancouver, BC, Canada',
    area: '55㎡',
    beds: 1,
    baths: 1,
    tags: ['Modern', 'Downtown'],
  },
  {
    id: '3',
    title: 'North Vancouver Family Home',
    price: 2800,
    address: '789 Oak Avenue, North Vancouver, BC, Canada',
    area: '180㎡',
    beds: 4,
    baths: 3,
    tags: ['Family', 'Garden'],
  },
  {
    id: '4',
    title: 'Burnaby Luxury Apartment',
    price: 1950,
    address: '456 Kingsway, Burnaby, BC, Canada',
    area: '95㎡',
    beds: 2,
    baths: 2,
    tags: ['Luxury', 'Pool'],
  },
  {
    id: '5',
    title: 'Richmond Heritage House',
    price: 2200,
    address: '321 Westminster Highway, Richmond, BC, Canada',
    area: '140㎡',
    beds: 3,
    baths: 2,
    tags: ['Heritage', 'Spacious'],
  },
  {
    id: '6',
    title: 'Surrey Spacious Townhouse',
    price: 2400,
    address: '888 160 Street, Surrey, BC, Canada',
    area: '160㎡',
    beds: 4,
    baths: 2,
    tags: ['Townhouse', 'Parking'],
  },
];

export default function IndexPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Banner />

      {/* 精选房源（横向滚动） */}
      <FeaturedListings />

      {/* 筛选栏 */}
      <FilterBar />

      {/* 房源列表 */}
      <div className={styles.listingSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Rental Listing</h2>
          <div className={styles.listingGrid}>
            {mockListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
