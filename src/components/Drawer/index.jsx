import React from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button
} from '@chakra-ui/react';

import { useModal } from '../../context/ModalRegister';
import { useDrawer } from '../../context/Drawer';

import styles from './index.module.css';

export default function DrawerComponent() {
  const { setIsOpen } = useModal();
  const { isDrawerOpen, setIsDrawerOpen } = useDrawer();
  const menuItems = [
    {
      label: "Produtos",
      type: "inline",
      href: "#produtos"
    },
    {
      label: "Ecossistema Galaxy",
      type: "inline",
      href: "#ecossistema-galaxy"
    },
    {
      label: "Integração e segurança",
      type: "inline",
      href: "#integracao-e-seguranca"
    },
    {
      label: "Saiba mais",
      type: "primary"
    }
  ];

  const onClose = () => setIsDrawerOpen(false);

  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            _focus={{
              border: 'none'
            }}
          />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <nav className={styles.menu}>
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
                        : <a href={item.href}>{item.label}</a>
                    }
                  </li>
                ))}
              </ul>
            </nav>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  )
}
