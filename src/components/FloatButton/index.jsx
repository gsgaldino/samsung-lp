import React from 'react';
import Provider from '../Provider';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverHeader,
  PopoverArrow,
  PopoverBody,
  Input,
  Button
} from '@chakra-ui/react';
import InputMask from 'react-input-mask';

import styles from './index.module.css';

import whatsappIcon from '../../assets/whatsapp.png';

export default function FloatButton() {
  const [loading, setLoading] = React.useState(false);
  const phoneRef = React.useRef();

  const handleSubmit = async () => {
    setLoading(true);
    const url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeXjW2StmzJki-n7YHLkRcJBASXhoICjDn2lnlGgmmxA7f4Mg/formResponse";

    const payload = new FormData();
    payload.append("entry.1664633063", phoneRef.current.value);    

    // not writable values
    const pageUrl = new URL(window.location.href);
    const params = new URLSearchParams(pageUrl.search);

    payload.append("entry.1130805858", params.get('ip'));
    payload.append("entry.1009939788", params.get('origem'));
    payload.append("entry.824017109", params.get('uf'));
    payload.append("entry.732145377", params.get('cidade'));
    payload.append("entry.843436838", params.get('sistema'));

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
        return setLoading(false);
      });
  };

  return (
    <div className={styles.floatButton}>
      <Provider>
        <Popover>

          <PopoverContent
            _focus={{ border: 'none', outline: 'none' }}
            boxShadow="2px 2px 10px rgba(0,0,0,.3)"
            borderRadius="26px"
            right="10px"
          >
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Você esta quase lá...</PopoverHeader>
            <PopoverBody>
              <div className={styles.wrapper}>
                <div className={styles.box}>
                  <p>Para agilizar o atendimento preencha os dados abaixo</p>
                  <Input
                    ref={phoneRef}
                    as={InputMask}
                    mask="(**)*****-****"
                    border="2px solid #BDBDBD !important"
                  />
                </div>
                <Button
                  borderRadius="26px"
                  p="12px 20px"
                  fontWeight="400"
                  fontSize="var(--font-size)"
                  colorScheme="whatsapp"
                  onClick={handleSubmit}
                  isLoading={loading}
                >Enviar WhatsApp</Button>
              </div>
            </PopoverBody>
          </PopoverContent>
          <PopoverTrigger>
            <div className={styles.button}>
              <img src={whatsappIcon} alt="Whatsapp icon" />
            </div>
          </PopoverTrigger>
        </Popover>
      </Provider>
    </div>
  );
};
