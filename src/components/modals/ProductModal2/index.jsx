import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";

import { useModal } from '../../../context/ProductModal2';
import Box from '../components/Box';

import styles from './index.module.css';

import budsPro from '../../../assets/products/budspro.png';
import buds2 from '../../../assets/products/buds2.png';

export default function ProductModal2() {
  const { isOpen, setIsOpen2 } = useModal();

  const onClose = () => setIsOpen2(false);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent borderRadius="26px" pb={6} className={styles.modalContent}>
        <ModalHeader
          className={styles.header}
          textAlign="center"
          color="#000"
        >
          <h4>Galaxy Wearable</h4>
        </ModalHeader>

        <ModalBody pb={6}>
          <div className={styles.wrapper}>
            <div className={styles.item}>
              <img src={budsPro} alt="Buds Pro" />
              <p>Galaxy Buds Pro</p>
            </div>
            <div className={styles.item}>
              <img src={buds2} alt="Buds Pro" />
              <p>Galaxy Buds 2</p>
            </div>
          </div>

          <div className={styles.text}>
            <Box>
              <ul className={styles.menu}>
                <li>Cancelamento de ruído ativo <br /> + opção de som ambiente natural;</li>
                <li>Som imersivo com alto-falantes duplos;</li>
                <li>Melhor qualidade de chamadas com 3 microfones dedicados;</li>
                <li>Design confortável com ajuste ergonômico;</li>
              </ul>
            </Box>
          </div>

        </ModalBody>

        <ModalFooter display="flex" justifyContent="center">
          <Button
            background="#000"
            borderRadius="26px"
            p="12px 20px"
            fontWeight="400"
            fontSize="var(--font-size)"
            color="#fff"
            _focus={{
              outline: "none !important"
            }}
            _hover={{
              background: "#1f1f1f",
              filter: "bgihtness(110%)"
            }}
          >Entre em contato com um vendedor</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
