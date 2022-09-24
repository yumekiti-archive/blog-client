import { FC } from 'react';

import Header from './components/Header';
import Home from './pages/Home';

import { getHeaderMock } from './libs/header';

const App: FC = () => {
  return (
    <>
      <Header
        header={getHeaderMock().header}
      />
      <Home />
    </>
  );
}

export default App;