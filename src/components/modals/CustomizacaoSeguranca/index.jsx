import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";

import { useModalCustomizacaoSeguranca } from '../../../context/CustomizacaoSeguranca';
import { useModal as useRegisterModal } from '../../../context/ModalRegister';

import Slider from "react-slick";

import customization1 from '../../../assets/products/customization1.png';
import customization3 from '../../../assets/products/customization3.png';
import customization4 from '../../../assets/products/customization4.png';
import customization5 from '../../../assets/products/customization5.png';

import { useMediaQuery } from 'react-responsive';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import styles from './index.module.css';

export default function CustomizacaoSeguranca() {
  const {
    isCustomizacaoSegurancaOpen,
    setIsCustomizacaoSegurancaOpen
  } = useModalCustomizacaoSeguranca();
  const { setIsOpen } = useRegisterModal();
  const [activeSlide, setActiveSlide] = React.useState(0);
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)'
  })

  const onClose = () => setIsCustomizacaoSegurancaOpen(false);

  function PrevArrow(props) {
    const { className, onClick } = props;

    const getPosition = () => {
      let position;

      if (isMobile && activeSlide === 1){
        return position = {bottom: "-946%", left: "60%"};
      }else if (isMobile && activeSlide === 0) {
        return position = {bottom: "-260%", left: "60%"}
      }else if (!isMobile) {
        return position = {bottom: "-276px", left: "280px"}
      };

      return position;
    };

    return (
      <div
        className={className}
        style={{ 
          display: "block",
          width: "80px",
          height: "80px"
        }}
        onClick={onClick}
      >
        <ChevronLeftIcon
          w="60px"
          h="60px" 
          position="absolute"
          color="#C4C4C4"
          zIndex="999"
          {...getPosition()}
        />
      </div>
    );
  };

  function NextArrow(props) {
    const { className, onClick } = props;

    const getPosition = () => {
      let position;

      if (isMobile && activeSlide === 1){
        return position = {bottom: "-946%", left: "-60%"};
      }else if (isMobile && activeSlide === 0) {
        return position = {bottom: "-260%", left: "-60%"}
      }else if (!isMobile) {
        return position = {bottom: "-276px", left: "-280px"}
      };

      return position;
    };

    return (
      <div
        className={className}
        style={{ 
          display: "block",
          width: "80px",
          height: "80px",
        }}
        onClick={onClick}
      >
        <ChevronRightIcon 
          w="60px"
          h="60px" 
          position="absolute"
          color="#C4C4C4"
          zIndex="999"
          {...getPosition()}
        />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: current => setActiveSlide(current),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
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
              <div className={styles.wrapper} style={{
                height: (activeSlide === 1 && isMobile) ? "1400px" : "300px",
                transition: "all 0.4s ease"
              }}>
                <div className={styles.item}>
                  <img src={customization3} alt="Customização e segurança" />
                </div>
                <div className={styles.item}>
                  <img src={customization4} alt="Customização e segurança" />
                </div>
                <div className={styles.item}>
                  <img src={customization5} alt="Customização e segurança" />
                </div>
              </div>
            </div>
          </Slider>
        </ModalBody>

        <ModalFooter justifyContent="center">
          <Button
            mt={6}
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
              setIsCustomizacaoSegurancaOpen(false);
              setIsOpen(true);
            }}
          >Entre em contato com um vendedor</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
