import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";

import { useModal4 } from '../../../context/ProductModal4';

import styles from './index.module.css';

import galaxys21 from '../../../assets/galaxys21.png';
import galaxys21Plus from '../../../assets/galxys21ultra.png';

export default function ProductModal4() {
  const { isOpen, setIsOpen4 } = useModal4();

  const onClose = () => setIsOpen4(false);

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
          <h4>Galaxy S21 5G | S21+ 5G | S21 Ultra 5G</h4>
        </ModalHeader>

        <ModalBody pb={6}>
          <div className={styles.wrapper}>
            <div className={styles.item}>
              <p>Galaxy S21 5G | S21+ 5G</p>
              <img src={galaxys21} alt="Galaxy S21" />
            </div>
            <div className={styles.item}>
              <p>Galaxy S21 Ultra 5G</p>
              <img src={galaxys21Plus} alt="Galaxy S21 Plus" />
            </div>
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
