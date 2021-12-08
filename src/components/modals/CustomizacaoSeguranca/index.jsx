import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";

import { useModalCustomizacaoSeguranca } from '../../../context/CustomizacaoSeguranca';

export default function CustomizacaoSeguranca() {
  const { 
    isCustomizacaoSegurancaOpen, 
    setIsCustomizacaoSegurancaOpen 
  } = useModalCustomizacaoSeguranca();

  const onClose = () => setIsCustomizacaoSegurancaOpen(false);

  return (
    <Modal
      isOpen={isCustomizacaoSegurancaOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent borderRadius="26px" pb={6}>
        <ModalHeader
          textAlign="center"
          color="#000"
        >Customização e Segurança</ModalHeader>
        
        <ModalBody pb={6}>

        </ModalBody>

        <ModalFooter>
          <Button
            background="#000"
            borderRadius="26px"
            p="20px 20px"
            width="200px"
            fontWeight="400"
            color="#fff"
            margin="0 auto"
            onClick={onClose}
            _focus={{
              outline: "none !important"
            }}
            _hover={{
              background: "#1f1f1f",
              filter: "bgihtness(110%)"
            }}
          >Enviar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
