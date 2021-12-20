import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
} from "@chakra-ui/react";

import { useModalEcossistemaGalaxy } from '../../../context/EcossistemaGalaxy';
import { useModal as useRegisterModal } from '../../../context/ModalRegister';

import Slider from "react-slick";

import ecoGalaxy1 from '../../../assets/ecogalaxy1.png';
import ecoGalaxy2 from '../../../assets/ecogalaxy2.png';
import ecoGalaxy3 from '../../../assets/ecogalaxy3.png';

import galaxyTab from '../../../assets/products/galaxytab.png';

import mgalaxyTab1 from '../../../assets/products/m_galaxytab1.png';
import mgalaxyTab2 from '../../../assets/products/m_galaxytab2.png';
import mgalaxyTab3 from '../../../assets/products/m_galaxytab3.png';

import { useMediaQuery } from 'react-responsive';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import styles from './index.module.css';

export default function EcossistemaGalaxy() {
  const {
    isEcossistemaGalaxyOpen,
    setIsEcossistemaGalaxyOpen
  } = useModalEcossistemaGalaxy();
  const { setIsOpen } = useRegisterModal();
  const [activeSlide, setActiveSlide] = React.useState(1);
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)'
  })

  const onClose = () => setIsEcossistemaGalaxyOpen(false);

  function PrevArrow(props) {
    const { className, onClick } = props;

    const getPosition = () => {
      let position;

      if (isMobile && activeSlide === 0) {
        return position = { bottom: "-580%", left: "60%" };
      } else if (isMobile && activeSlide === 1) {
        return position = { bottom: "-1080%", left: "60%" }
      } else if (!isMobile) {
        return position = { bottom: "-300px", left: "280px" }
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

      if (isMobile && activeSlide === 1) {
        return position = { bottom: "-1080%", left: "-60%" };
      } else if (isMobile && activeSlide === 0) {
        return position = { bottom: "-580%", left: "-60%" }
      } else if (!isMobile) {
        return position = { bottom: "-300px", left: "-280px" }
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

  const getHeight = () => {
    if (isMobile)
      return activeSlide === 0 ? "1100px" : "1900px";

    return "320px";
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: current => setActiveSlide(current),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  function appendDots(dots) {
    return (
      <div style={{ top: "-50px" }}>
        <ul style={{ margin: "3px" }}> {dots} </ul>
      </div>
    );
  }

  return (
    <Modal
      isOpen={isEcossistemaGalaxyOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent borderRadius="26px" pb={6} className={styles.modalContent}>

        <ModalBody pb={6}>
          <Slider {...settings} appendDots={appendDots}>
            <div className={styles.item}>
              <h4>Galaxy TAB | S7 FE</h4>
              {!isMobile && <img src={galaxyTab} alt="Customização e segurança" style={{
                maxWidth: "780px"
              }} />}

              {isMobile && <div className={styles.mobileWrapper}>
                <img src={mgalaxyTab1} alt="Customização e segurança" />
                <img src={mgalaxyTab2} alt="Customização e segurança" />
                <img src={mgalaxyTab3} alt="Customização e segurança" />
              </div>}

              <Button
                mt={isMobile ? 0 : 6}
                background="#000"
                borderRadius="26px"
                top={isMobile ? "0px" : "-100px"}
                left={isMobile ? "0px" : "-40px"}
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
                  setIsEcossistemaGalaxyOpen(false);
                  setIsOpen(true);
                }}
              >Entre em contato com um vendedor</Button>
            </div>

            <div className={styles.item}>
              <h4>Ecossistema Galaxy</h4>
              <div
                className={styles.wrapper}
                style={{
                  height: getHeight(),
                  transition: "all 0.4s ease"
                }}
              >
                <div className={styles.item}>
                  <img src={ecoGalaxy1} alt="Customização e segurança" />
                </div>
                <div className={styles.item}>
                  <img src={ecoGalaxy2} alt="Customização e segurança" />
                </div>
                <div className={styles.item}>
                  <img src={ecoGalaxy3} alt="Customização e segurança" />
                </div>
              </div>

              <Button
                mt={isMobile ? 0 : 6}
                background="#000"
                borderRadius="26px"
                top={isMobile ? "-290px" : "100px"}
                p="12px 20px"
                fontWeight="400"
                fontSize="var(--font-size)"
                color="#fff"
                mb={isMobile ? "-200px" : "-200px"}
                _focus={{
                  outline: "none !important"
                }}
                _hover={{
                  background: "#1f1f1f",
                  filter: "bgihtness(110%)"
                }}
                onClick={() => {
                  setIsEcossistemaGalaxyOpen(false);
                  setIsOpen(true);
                }}
              >Entre em contato com um vendedor</Button>
            </div>
          </Slider>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
