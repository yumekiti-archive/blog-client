import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import ReportList from './pages/ReportList';

import { getHeaderMock } from './libs/mocks/header';

const App: FC = () => {
  return (
    <>
      <Header
        header={getHeaderMock().header}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reports" element={<ReportList />} />
      </Routes>
    </>
  );
}

export default App;