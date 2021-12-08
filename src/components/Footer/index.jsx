import Logo from '../Logo';
import Provider from '../Provider';

import styles from './index.module.css';

import alliedLogo from '../../assets/allied.jpg';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Provider>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <img src={alliedLogo} alt="Allied Logo"/>
            <p>ALLIED - Copyright 2020 - Todos os direitos reservados</p>
          </div>
          <div className={styles.item}>
            <Logo />
          </div>
        </div>
      </Provider>
    </div>
  );
};
