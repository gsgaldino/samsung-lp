import React from 'react';

const ModalRegisterContext = React.createContext();

export default function ProductModal2({ children }) {
  const [isOpen, setIsOpen2] = React.useState(false);

  return (
    <ModalRegisterContext.Provider
      value={{
        isOpen,
        setIsOpen2
      }}
    >
      { children }
    </ModalRegisterContext.Provider>
  );
};

export function useModal() {
  const context = React.useContext(ModalRegisterContext);
  const { isOpen, setIsOpen2 } = context;

  return {isOpen, setIsOpen2 };
};
