import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Button,
  Input
} from "@chakra-ui/react";

import { useModal } from '../../../context/ModalRegister';

export default function RegisterModal() {
  const { isOpen, setIsOpen } = useModal();

  const onClose = () => setIsOpen(false);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent borderRadius="26px" pb={6}>
        <ModalHeader
          textAlign="center"
          color="#000"
        >Preencha seus dados para receber mais informações</ModalHeader>
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Nome</FormLabel>
            <Input 
              border="2px solid #BDBDBD !important"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Celular</FormLabel>
            <Input border="2px solid #BDBDBD !important"/>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>E-mail</FormLabel>
            <Input border="2px solid #BDBDBD !important"/>
          </FormControl>
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
