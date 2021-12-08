import React from 'react';

const CustomizacaoSeguranca = React.createContext();

export default function CustomizacaoSegurancaContext({ children }) {
  const [isCustomizacaoSegurancaOpen, setIsCustomizacaoSegurancaOpen] = React.useState(false);

  return (
    <CustomizacaoSeguranca.Provider
      value={{
        isCustomizacaoSegurancaOpen,
        setIsCustomizacaoSegurancaOpen
      }}
    >
      { children }
    </CustomizacaoSeguranca.Provider>
  );
};

export function useModalCustomizacaoSeguranca() {
  const context = React.useContext(CustomizacaoSeguranca);
  const { isCustomizacaoSegurancaOpen, setIsCustomizacaoSegurancaOpen } = context;

  return {isCustomizacaoSegurancaOpen, setIsCustomizacaoSegurancaOpen };
};
