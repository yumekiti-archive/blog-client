import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Reports from './pages/Reports';

import { getHeaderMock } from './libs/mocks/header';

const App: FC = () => {
  return (
    <>
      <Header
        header={getHeaderMock().header}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reports" element={<Reports />} />
      </Routes>
    </>
  );
}

export default App;