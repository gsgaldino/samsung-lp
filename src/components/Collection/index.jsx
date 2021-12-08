import Provider from '../Provider';

import styles from './index.module.css';

import item1 from '../../assets/cards/galaxy-watch-series-4.jpg';
import item2 from '../../assets/cards/galaxy-buds-2.jpg';
import item3 from '../../assets/cards/galaxy-z-fold.jpg';
import item4 from '../../assets/cards/galaxy-s21.jpg';

import separator from '../../assets/separator.svg';

import { useModal as useModal1 } from '../../context/ProductModal1';
import { useModal as useModal2 } from '../../context/ProductModal2';
import { useModal3 } from '../../context/ProductModal3';
import { useModal4 } from '../../context/ProductModal4';

export default function Collection() {
  const { setIsOpen1 } = useModal1();
  const { setIsOpen2 } = useModal2();
  const { setIsOpen3 } = useModal3();
  const { setIsOpen4 } = useModal4();

  return (
    <div className={styles.collection}>
      <Provider>
        <div className={styles.wrapper}>
          <div
            className={`
                ${styles.item} ${styles.primary}
              `}
            onClick={() => setIsOpen1(true)}
          >
            <div className={styles.text}>
              <h4 className={styles.title}>Galaxy Watch SERIES 4</h4>
              <p>O relógio que cuida de você</p>
            </div>
            <img src={item1} alt="Galaxy Watch Series 4" />
          </div>

          <img
            src={separator}
            alt="Separator"
            className={styles.separator}
          />

          <div
            className={`
                ${styles.item} ${styles.secondary}
              `}
            onClick={() => setIsOpen2(true)}
          >
            <div className={styles.text}>
              <h4>Galaxy Buds 2</h4>
              <h4>Buds Pro</h4>
            </div>
            <img src={item2} alt="Galaxy Watch Series 4" />
          </div>
        </div>

        <div className={styles.wrapper}>
          <div
            className={`${styles.item} ${styles.secondary}`}
            onClick={() => setIsOpen3(true)}
          >
            <div className={styles.title}>
              <h4>Galaxy Z Fold 3</h4>
              <h4>Flip 3 5G</h4>
            </div>
            <img src={item3} alt="Galaxy Watch Series 4" />
          </div>

          <img
            src={separator}
            alt="Separator"
            className={styles.separator}
          />

          <div
            className={`${styles.item} ${styles.primary}`}
            onClick={() => setIsOpen4(true)}
          >
            <h4 className={styles.title}>Galaxy S21 | S21+ | S21 Ultra</h4>
            <img src={item4} alt="Galaxy Watch Series 4" />
          </div>
        </div>
      </Provider>
    </div>
  );
};
