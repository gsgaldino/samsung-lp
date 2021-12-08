import Provider from '../Provider';
import Logo from '../Logo';
import { Button } from '@chakra-ui/react';
import { useModal } from '../../context/ModalRegister';

import styles from './index.module.css';

export default function Header() {
  const { setIsOpen } = useModal();
  const menuItems = [
    {
      label: "Produtos",
      type: "inline"
    },
    {
      label: "Ecossistema Galaxy",
      type: "inline"
    },
    {
      label: "Integração e segurança",
      type: "inline"
    },
    {
      label: "Saiba mais",
      type: "primary"
    }
  ];

  return (
    <div className={styles.header}>
      <Provider>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <Logo />
          </div>
          <div className={styles.item}>
            <nav>
              <ul>
                {menuItems.map((item, _i) => (
                  <li key={String(_i)}>
                    {
                      item.type === "primary"
                        ? <Button 
                            background="#000"
                            borderRadius="26px"
                            p="12px 20px"
                            fontWeight="400"
                            fontSize="var(--font-size)"
                            color="#fff"
                            onClick={() => setIsOpen(true)}
                            _focus={{
                              outline: "none !important"
                            }}
                            _hover={{
                              background: "#1f1f1f",
                              filter: "bgihtness(110%)"
                            }}
                          >{item.label}</Button>
                        : <a href="/">{item.label}</a>
                    }
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </Provider>
    </div>
  );
};
