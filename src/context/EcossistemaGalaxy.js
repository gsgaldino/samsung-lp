import React from 'react';

const EcossistemaGalaxy = React.createContext();

export default function EcossistemaGalaxyContext({ children }) {
  const [isEcossistemaGalaxyOpen, setIsEcossistemaGalaxyOpen] = React.useState(false);

  return (
    <EcossistemaGalaxy.Provider
      value={{
        isEcossistemaGalaxyOpen,
        setIsEcossistemaGalaxyOpen
      }}
    >
      { children }
    </EcossistemaGalaxy.Provider>
  );
};

export function useModalEcossistemaGalaxy() {
  const context = React.useContext(EcossistemaGalaxy);
  const { isEcossistemaGalaxyOpen, setIsEcossistemaGalaxyOpen } = context;

  return {isEcossistemaGalaxyOpen, setIsEcossistemaGalaxyOpen };
};
