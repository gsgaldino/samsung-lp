import Provider from '../Provider';
import Card from '../Card';

import styles from './index.module.css';

import integrationWindows from '../../assets/cards/integration-windows.jpg';
import customization from '../../assets/cards/customization.jpg';

import { useModalIntegracaoWindows } from '../../context/IntegracaoWindows';
import { useModalCustomizacaoSeguranca } from '../../context/CustomizacaoSeguranca';

export default function Integrations() {
  const { setIsIntegracaoWindowsOpen } = useModalIntegracaoWindows();
  const { setIsCustomizacaoSegurancaOpen } = useModalCustomizacaoSeguranca();

  return (
    <div className={styles.integrations} id="integracao-e-seguranca">
      <Provider>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <Card 
              image={integrationWindows}
              onClick={() => setIsIntegracaoWindowsOpen(true)}
              heading={(
                <div>
                  <p className={styles.title}>Integração Windows</p>
                  <p className={styles.subtitle}>Galaxy S21 | Z Flip 3 | Z Fold 3</p>
                </div>
              )}
            />
          </div>
          <div className={styles.item}>
          <Card 
              image={customization}
              onClick={() => setIsCustomizacaoSegurancaOpen(true)}
              heading={(
                <div className={styles.title}>
                  <p>Customização e <br/> Segurança</p>
                </div>
              )}
            />
          </div>
        </div>
      </Provider>
    </div>
  );
};
