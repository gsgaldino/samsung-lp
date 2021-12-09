import Provider from '../Provider';
import { Button } from '@chakra-ui/react';

import { useModal } from '../../context/ModalRegister';

import styles from './index.module.css';

import ecossistemaGalaxy from '../../assets/ecossistema-galaxy.png';

export default function MiddleBanner() {
  const { setIsOpen } = useModal();

  return (
    <div className={styles.middleBanner} id="ecossistema-galaxy">
      <Provider>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <h2>Ecossistema Galaxy</h2>
            <Button
              background="#000"
              borderRadius="26px"
              p="12px 20px"
              fontWeight="400"
              color="#fff"
              onClick={() => setIsOpen(true)}
              _focus={{
                outline: "none !important"
              }}
              _hover={{
                background: "#1f1f1f",
                filter: "bgihtness(110%)"
              }}
            >Saiba mais</Button>
          </div>
          <div className={styles.item}>
            <img src={ecossistemaGalaxy} alt="ecossistema galaxy" />
          </div>
        </div>
      </Provider>
    </div>
  );
};
