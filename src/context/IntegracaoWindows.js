import React from 'react';

const IntegracaoWindowsContext = React.createContext();

export default function IntegracaoWindows({ children }) {
  const [isIntegracaoWindowsOpen, setIsIntegracaoWindowsOpen] = React.useState(false);

  return (
    <IntegracaoWindowsContext.Provider
      value={{
        isIntegracaoWindowsOpen,
        setIsIntegracaoWindowsOpen
      }}
    >
      { children }
    </IntegracaoWindowsContext.Provider>
  );
};

export function useModalIntegracaoWindows() {
  const context = React.useContext(IntegracaoWindowsContext);
  const { isIntegracaoWindowsOpen, setIsIntegracaoWindowsOpen } = context;

  return {isIntegracaoWindowsOpen, setIsIntegracaoWindowsOpen };
};
