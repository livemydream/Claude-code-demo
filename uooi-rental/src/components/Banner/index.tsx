import React from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import styles from './index.module.less';

const bannerSlides = [
  {
    id: 1,
    text: 'Enjoy life enjoy every moment',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80',
  },
  {
    id: 2,
    text: 'Find your perfect home today',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
  },
  {
    id: 3,
    text: 'Live where you love',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
  },
];

const Banner = () => {
  const carouselRef = React.useRef<any>(null);

  const nextSlide = () => {
    carouselRef.current?.next();
  };

  const prevSlide = () => {
    carouselRef.current?.prev();
  };

  return (
    <section className={styles.banner}>
      <Carousel ref={carouselRef} autoplay dots={false} className={styles.carousel}>
        {bannerSlides.map((slide) => (
          <div key={slide.id} className={styles.slide}>
            <div
              className={styles.slideBg}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className={styles.overlay} />
            <div className={styles.bannerContent}>
              <h1 className={styles.bannerText}>{slide.text}</h1>
            </div>
          </div>
        ))}
      </Carousel>

      {/* 轮播箭头 */}
      <button className={styles.navArrow + ' ' + styles.prevArrow} onClick={prevSlide}>
        <LeftOutlined />
      </button>
      <button className={styles.navArrow + ' ' + styles.nextArrow} onClick={nextSlide}>
        <RightOutlined />
      </button>
    </section>
  );
};

export default Banner;
