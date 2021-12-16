import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";

import { useModalIntegracaoWindows } from '../../../context/IntegracaoWindows';

import windows1 from '../../../assets/products/windows1.png';
import windows2 from '../../../assets/products/windows2.png';
import windows3 from '../../../assets/products/windows3.png';

import styles from './index.module.css';

export default function IntegracaoWindows() {
  const { isIntegracaoWindowsOpen, setIsIntegracaoWindowsOpen } = useModalIntegracaoWindows();

  const onClose = () => setIsIntegracaoWindowsOpen(false);

  return (
    <Modal
      isOpen={isIntegracaoWindowsOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent borderRadius="26px" pb={6} className={styles.modalContent}>
        <ModalHeader
          className={styles.header}
          textAlign="center"
          color="#000"
        >
          <h4>Integração Windows Galaxy S21 | Z Flip 3 | Z Fold 3 | Tab S</h4>
        </ModalHeader>

        <ModalBody pb={6}>
          <div className={styles.wrapper}>
            <img src={windows1} alt="Windows 1" />
            <img src={windows2} alt="Windows 1" />
            <img src={windows3} alt="Windows 1" />
          </div>
        </ModalBody>

        <ModalFooter justifyContent="center">
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
