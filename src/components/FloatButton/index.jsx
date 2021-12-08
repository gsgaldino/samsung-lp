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
  return (
    <div className={styles.floatButton}>
      <Provider>

        <Popover>

          <PopoverContent
            _focus={{ border: 'none' }}
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
                    _focus={{
                      border: '0.2px solid #000',
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
