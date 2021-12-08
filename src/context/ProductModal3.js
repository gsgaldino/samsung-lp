import React from 'react';

const ModalRegisterContext = React.createContext();

export default function ProductModal3({ children }) {
  const [isOpen, setIsOpen3] = React.useState(false);

  return (
    <ModalRegisterContext.Provider
      value={{
        isOpen,
        setIsOpen3
      }}
    >
      { children }
    </ModalRegisterContext.Provider>
  );
};

export function useModal3() {
  const context = React.useContext(ModalRegisterContext);
  const { isOpen, setIsOpen3 } = context;

  return {isOpen, setIsOpen3 };
};
