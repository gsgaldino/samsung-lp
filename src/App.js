import Home from './pages/Home';
import { ChakraProvider } from "@chakra-ui/react";

import RegisterModalContext from './context/ModalRegister';
import ProductModal1 from './context/ProductModal1';
import ProductModal2 from './context/ProductModal2';
import ProductModal3 from './context/ProductModal3';
import ProductModal4 from './context/ProductModal4';
import IntegracaoWindowsContext from './context/IntegracaoWindows';
import CustomizacaoSeguranca from './context/CustomizacaoSeguranca';
import DrawerProvider from './context/Drawer';
import EcossistemaGalaxy from './context/EcossistemaGalaxy';

import './globals.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => (
  <ChakraProvider>
    <RegisterModalContext>
      <ProductModal1>
        <ProductModal2>
          <ProductModal3>
            <ProductModal4>
              <IntegracaoWindowsContext>
                <CustomizacaoSeguranca>
                  <DrawerProvider>
                    <EcossistemaGalaxy>
                      
                      <Home />

                    </EcossistemaGalaxy>
                  </DrawerProvider>
                </CustomizacaoSeguranca>
              </IntegracaoWindowsContext>
            </ProductModal4>
          </ProductModal3>
        </ProductModal2>
      </ProductModal1>
    </RegisterModalContext>
  </ChakraProvider>
);

export default App;
