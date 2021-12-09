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

import styles from './index.module.css';

import whatsappIcon from '../../assets/whatsapp.png';

export default function FloatButton() {
  const phoneRef = React.useRef();
  const handleSubmit = async () => {
    const url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeXjW2StmzJki-n7YHLkRcJBASXhoICjDn2lnlGgmmxA7f4Mg/formResponse";

    const payload = new FormData();
    payload.append("entry.1664633063", phoneRef.current.value);

    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');

    const res = await fetch(url, {
      mode: 'no-cors',
      method: "post",
      body: payload
    });

    console.log(res);
  };

  return (
    <div className={styles.floatButton}>
      <Provider>
        <Popover>

          <PopoverContent
            _focus={{ border: 'none', outline: 'none' }}
            boxShadow="2px 2px 10px rgba(0,0,0,.3)"
            right="10px"
          >
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Whatsapp</PopoverHeader>
            <PopoverBody>
              <div className={styles.wrapper}>
                <div className={styles.box}>
                  <p>Digite seu número</p>
                  <Input 
                    placeholder="(XX) XXXXX-XXXX"
                    ref={phoneRef}
                    _focus={{
                      border: '0.5px solid #000',
                      outline: 'none'
                    }} 
                  />
                </div>
                <Button
                  background="#000"
                  borderRadius="26px"
                  p="12px 20px"
                  fontWeight="400"
                  fontSize="var(--font-size)"
                  color="#fff"
                  onClick={handleSubmit}
                  _focus={{
                    outline: "none !important"
                  }}
                  _hover={{
                    background: "#1f1f1f",
                    filter: "bgihtness(110%)"
                  }}
                >Enviar</Button>
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
