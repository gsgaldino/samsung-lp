import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
} from "@chakra-ui/react";

import { useModal } from '../../../context/ProductModal1';
import { useModal as useRegisterModal } from '../../../context/ModalRegister';
import Box from '../components/Box';

import styles from './index.module.css';

import galaxyWatch from '../../../assets/products/smartwatch1.png';
import galaxyWatch2 from '../../../assets/products/smartwatch2.jpg';

export default function ProductModal1() {
  const { isOpen, setIsOpen1 } = useModal();
  const { setIsOpen } = useRegisterModal();

  const onClose = () => setIsOpen1(false);

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
          <h4>Galaxy Watch 4</h4>
          <p>O smartwatch que cuida de você</p>
        </ModalHeader>

        <ModalBody pb={6}>
          <div className={styles.wrapper}>
            <div className={styles.item}>
              <img src={galaxyWatch} alt="Galaxy Watch 4" />
              <Box>
                <ul className={styles.list}>
                  <li>Monitoramento de atividades físicas</li>
                  <li>Acompanhamento dos indicadores de saúde e bem estar</li>
                  <li>Notificações e conteúdos de seu Smartphone</li>
                  <li>GPS embarcado</li>
                  <li>Controle de playlists sem tirar o celular do bolso</li>
                  <li>Integração com os principais aplicativos</li>
                  <li>Monitoramento de pressão arterial; Análise da composição corporal.</li>
                </ul>
              </Box>
            </div>
            <div className={styles.item}>
              <Box>
                <strong>Análise da composição corporal</strong>
                <p>O inovador sensor Samsung BioActive (BIA) mensura, analisa e fornece informações com alta precisão sobre seu corpo, indicando pistas sobre quais aspectos precisam receber mais atenção e cuidado.</p>
              </Box>
              <img src={galaxyWatch2} alt="Galaxy Watch 4" />
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
                  setIsOpen1(false);
                  setIsOpen(true);
                }}
              >Entre em contato com um vendedor</Button>
            </div>
          </div>
        </ModalBody>

      </ModalContent>
    </Modal>
  );
};
