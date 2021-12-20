import React from 'react';
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
  Input,
  useToast
} from "@chakra-ui/react";
import InputMask from 'react-input-mask';

import { useModal } from '../../../context/ModalRegister';

import styles from './index.module.css';

export default function RegisterModal() {
  const message = useToast();
  const nameRef = React.useRef();
  const phoneRef = React.useRef();
  const emailRef = React.useRef();
  const [loading, setLoading] = React.useState(false);
  const { isOpen, setIsOpen } = useModal();

  const onClose = () => setIsOpen(false);

  const handleSubmit = async () => {
    setLoading(true);

    if (!nameRef.current.value || !phoneRef.current.value || !emailRef.current.value){
      message({
        title: "Falha ao enviar",
        description: "Por favor, preencha todos os campos",
        status: "info",
        isClosable: true
      });
      return setLoading(false);
    };

    const url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeElrfdYBJtxUdzS5IG78Ea0aZwfYsSduaEroesNayIui3B8w/formResponse";

    const payload = new FormData();
    payload.append("entry.1797406478", nameRef.current.value);
    payload.append("entry.1763012668", phoneRef.current.value);
    payload.append("entry.1549734300", emailRef.current.value);

    // not writable values
    const pageUrl = new URL(window.location.href);
    const params = new URLSearchParams(pageUrl.search);

    payload.append("entry.64682934", params.get('origem'));
    payload.append("entry.102628012", params.get('sistema'));
    payload.append("entry.1123328919", params.get('uf'));
    payload.append("entry.800382816", params.get('cidade'));
    payload.append("entry.783774831", params.get('ip'));

    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');

    await fetch(url, {
      mode: 'no-cors',
      method: "post",
      body: payload
    })
      .then(console.log)
      .catch(console.log)
      .finally(() => {
        window.open('https://api.whatsapp.com/send?phone=5511992889851', '_blank');
        setIsOpen(false);
        return setLoading(false);
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent className={styles.modal} borderRadius="26px" pb={6} >
        <ModalHeader
          textAlign="center"
          color="#000"
        >Preencha seus dados para receber mais informações</ModalHeader>
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Nome</FormLabel>
            <Input
              ref={nameRef}
              border="2px solid #BDBDBD !important"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Celular</FormLabel>
            <Input
              ref={phoneRef}
              as={InputMask}
              mask="(**)*****-****"
              border="2px solid #BDBDBD !important" 
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>E-mail</FormLabel>
            <Input
              ref={emailRef} 
              border="2px solid #BDBDBD !important" 
            />
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
            isLoading={loading}
            onClick={handleSubmit}
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
