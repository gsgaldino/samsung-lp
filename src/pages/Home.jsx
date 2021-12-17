import React from 'react';

import Header from '../components/Header';
import BannerImage from '../components/BannerImage';
import Collection from '../components/Collection';
import MiddleBanner from '../components/MiddleBanner';
import Integrations from '../components/Integrations';
import Footer from '../components/Footer';
import FloatButton from '../components/FloatButton';

import RegisterModal from '../components/modals/RegisterModal';
import ProductModal1 from '../components/modals/ProductModal1';
import ProductModal2 from '../components/modals/ProductModal2';
import ProductModal3 from '../components/modals/ProductModal3';
import ProductModal4 from '../components/modals/ProductModal4';
import IntegracaoWindows from '../components/modals/IntegracaoWindows';
import CustomizacaoSeguranca from '../components/modals/CustomizacaoSeguranca';
import EcossistemaGalaxy from '../components/modals/EcossistemaGalaxy';
import Drawer from '../components/Drawer';

export default function Home() {
  return (
    <React.Fragment>

      <Header />
      <BannerImage />
      <Collection />
      <MiddleBanner />
      <Integrations />
      <Footer />
      <FloatButton />

      <RegisterModal />
      <ProductModal1 />
      <ProductModal2 />
      <ProductModal3 />
      <ProductModal4 />
      <IntegracaoWindows />
      <CustomizacaoSeguranca />
      <EcossistemaGalaxy />

      <Drawer />

    </React.Fragment>
  );
};
