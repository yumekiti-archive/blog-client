import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import ReportList from './pages/ReportList';
import KnowledgeList from './pages/KnowledgeList';

import { getHeaderMock } from './libs/mocks/header';

const App: FC = () => {
  return (
    <>
      <Header
        header={getHeaderMock()}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reports" element={<ReportList />} />
        <Route path="/knowledge" element={<KnowledgeList />} />
      </Routes>
    </>
  );
}

export default App;