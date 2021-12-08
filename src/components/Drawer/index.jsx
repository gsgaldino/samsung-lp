import React from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';

import { useDrawer } from '../../context/Drawer';

export default function DrawerComponent() {
  const { isDrawerOpen, setIsDrawerOpen } = useDrawer();

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
            Menu
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
