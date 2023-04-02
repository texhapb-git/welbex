import { Header } from '../Header';
import { Main } from '../Main';
import { Footer } from '../Footer';

import '../../styles/main.scss';
import { MainPage } from '../../pages/MainPage';
import { HeaderMobile } from '../HeaderMobile';

const App = () => {
  return (
    <>
      <Header />
      <HeaderMobile />
      <Main>
        <MainPage />
      </Main>
      <Footer />
    </>
  );
}

export { App };
