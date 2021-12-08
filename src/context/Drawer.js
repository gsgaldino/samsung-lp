import React from 'react';

const DrawerContext = React.createContext();

export default function DrawerProvider({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <DrawerContext.Provider
      value={{
        isDrawerOpen,
        setIsDrawerOpen
      }}
    >
      { children }
    </DrawerContext.Provider>
  );
};

export function useDrawer() {
  const context = React.useContext(DrawerContext);
  const { isDrawerOpen, setIsDrawerOpen } = context;

  return {isDrawerOpen, setIsDrawerOpen };
};
