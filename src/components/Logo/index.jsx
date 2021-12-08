import styles from './index.module.css';
import logo from '../../assets/logo.svg';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <p>Parceiro oficial</p>
        </div>
        <div className={styles.item}>
          <img src={logo} alt="Samsung logo" />
        </div>
      </div>
    </div>
  );
};
