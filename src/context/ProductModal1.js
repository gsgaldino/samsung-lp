import React from 'react';

const ProductModal1Context = React.createContext();

export default function ProductModal1({ children }) {
  const [isOpen, setIsOpen1] = React.useState(false);

  return (
    <ProductModal1Context.Provider
      value={{
        isOpen,
        setIsOpen1
      }}
    >
      { children }
    </ProductModal1Context.Provider>
  );
};

export function useModal() {
  const context = React.useContext(ProductModal1Context);
  const { isOpen, setIsOpen1 } = context;

  return {isOpen, setIsOpen1 };
};
