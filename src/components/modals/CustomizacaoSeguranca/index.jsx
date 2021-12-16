import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";

import { useModalCustomizacaoSeguranca } from '../../../context/CustomizacaoSeguranca';

import Slider from "react-slick";

import customization1 from '../../../assets/products/customization1.png';
import customization2 from '../../../assets/products/customization2.png';

import styles from './index.module.css';

export default function CustomizacaoSeguranca() {
  const {
    isCustomizacaoSegurancaOpen,
    setIsCustomizacaoSegurancaOpen
  } = useModalCustomizacaoSeguranca();

  const onClose = () => setIsCustomizacaoSegurancaOpen(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Modal
      isOpen={isCustomizacaoSegurancaOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent borderRadius="26px" pb={6} className={styles.modalContent}>

        <ModalBody pb={6}>
          <Slider {...settings}>
            <div className={styles.item}>
              <h4>Personalização total em todos os dispositivos</h4>
              <img src={customization1} alt="Customização e segurança" />
            </div>

            <div className={styles.item}>
              <h4>Praticidade e segurança</h4>
              <img src={customization2} alt="Customização e segurança" />
            </div>
          </Slider>
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
