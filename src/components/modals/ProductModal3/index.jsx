import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import Box from '../components/Box';

import { useModal3 } from '../../../context/ProductModal3';
import { useModal as useRegisterModal } from '../../../context/ModalRegister';

import styles from './index.module.css';

import zFold from '../../../assets/products/zfold.png';
import zFold3 from '../../../assets/products/zfold3.png';
import check from '../../../assets/check.png';

export default function ProductModal3() {
  const { isOpen, setIsOpen3 } = useModal3();
  const { setIsOpen } = useRegisterModal();

  const onClose = () => setIsOpen3(false);

  const Check = () => 
    <img 
      style={{
        width: '14px',
        height: '14px',
        marginRight: '4px'
      }} 
      src={check} 
      alt="Check" 
    />;

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
          <h4>Abra o novo</h4>
        </ModalHeader>

        <ModalBody pb={6}>
          <div className={styles.wrapper}>
            <div className={styles.item}>
              <img src={zFold} alt="Galaxy Z Fold" />
              <Box>
                <div className={styles.boxWrapper}>
                  <div className={styles.item}>
                    <ul>
                      <li><h4>Design</h4></li>
                      <li><Check />Máxima portabilidade;</li>
                      <li><Check />Durabilidade;</li>
                      <li><Check />Novo Display Externo com mais funcionalidades;</li>
                    </ul>
                  </div>
                  <div className={styles.item}>
                    <ul>
                      <li><h4>Durabilidade</h4></li>
                      <li><Check />Resistência a riscos;</li>
                      <li><Check />Abertura testada;</li>
                      <li><Check />Resistência à água IPX8;</li>
                    </ul>
                  </div>
                </div>
              </Box>
            </div>
            <div className={styles.item}>
              <img src={zFold3} alt="Galaxy Z Fold 3" />
              <Box>
                <div className={styles.boxWrapper}>
                  <div className={styles.item}>
                    <h4>TELA GRANDE PORTÁTIL</h4>
                    <h4>Tela principal sem interrupções</h4>
                    <p>Desempenho perfeito em uma tela sem interrupções, com câmera sob o display, com todos os detalhes pensados em entregar a melhor experiência visual</p>
                    <h4>MULTITAREFA OTIMIZADO</h4>
                    <p>Sua área de trabalho incrivelmente otimizada</p>
                  </div>
                  <div className={styles.item}>
                    <ul>
                      <li><h4>Durabilidade</h4></li>
                      <li><Check />Resistência a riscos;</li>
                      <li><Check />Abertura testada;</li>
                      <li><Check />Resistência à água IPX8;</li>
                    </ul>
                  </div>
                </div>
              </Box>
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
            onClick={() => {
              setIsOpen3(false);
              setIsOpen(true);
            }}
          >Entre em contato com um vendedor</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
