import React from 'react';

const ModalRegisterContext = React.createContext();

export default function ProductModal4({ children }) {
  const [isOpen, setIsOpen4] = React.useState(false);

  return (
    <ModalRegisterContext.Provider
      value={{
        isOpen,
        setIsOpen4
      }}
    >
      { children }
    </ModalRegisterContext.Provider>
  );
};

export function useModal4() {
  const context = React.useContext(ModalRegisterContext);
  const { isOpen, setIsOpen4 } = context;

  return {isOpen, setIsOpen4 };
};
