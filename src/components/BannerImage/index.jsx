import styles from './index.module.css';
import bannerImage from '../../assets/banner/banner.jpg';

export default function BannerImage() {
  return (
    <div className={styles.bannerImage}>
      <img src={bannerImage} alt="Banner Samsung"/>
    </div>
  );
};
