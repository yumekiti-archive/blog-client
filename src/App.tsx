import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import ReportList from './pages/ReportsPage';
import KnowledgesList from './pages/KnowledgesPage';
import ReportPage from './pages/ReportPage';
import CategoriesPage from './pages/CategoriesPage';
import TagsPage from './pages/TagsPage';

import { getHeaderMock } from './libs/mocks/header';

const App: FC = () => {
  return (
    <>
      <Header header={getHeaderMock()} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reports' element={<ReportList />} />
        <Route path='/report/:id' element={<ReportPage />} />
        <Route path='/knowledge' element={<KnowledgesList />} />
        <Route path='/categories/:id' element={<CategoriesPage />} />
        <Route path='/tags/:id' element={<TagsPage />} />
      </Routes>
    </>
  );
};

export default App;
