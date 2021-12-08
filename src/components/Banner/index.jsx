import styles from './index.module.css';

import bannerLeft from '../../assets/banner/left.jpg';
import bannerRight from '../../assets/banner/right.png';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <img src={bannerLeft} alt="Samsung" />
        </div>
        <div className={styles.item}>
          <img src={bannerRight} alt="Samsung" />
        </div>
      </div>
    </div>
  );
};
