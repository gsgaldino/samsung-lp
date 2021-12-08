import React from 'react';

const ModalRegisterContext = React.createContext();

export default function ProductModal3({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <ModalRegisterContext.Provider
      value={{
        isOpen,
        setIsOpen
      }}
    >
      { children }
    </ModalRegisterContext.Provider>
  );
};

export function useModal() {
  const context = React.useContext(ModalRegisterContext);
  const { isOpen, setIsOpen } = context;

  return {isOpen, setIsOpen };
};
