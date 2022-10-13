import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import ReportList from './pages/ReportsPage';
import KnowledgesList from './pages/KnowledgesPage';
import ReportPage from './pages/ReportPage';
import CategoriesPage from './pages/CategoriesPage';
import TagsPage from './pages/TagsPage';
import SearchPage from './pages/SearchPage';

import { getHeaderMock } from './libs/mocks/header';

import { useGetReports, useGetCategories, useGetTags, useGetKnowledges } from './libs/api';

const App: FC = () => {
  const reports = useGetReports();
  const categories = useGetCategories();
  const tags = useGetTags();
  const knowledges = useGetKnowledges();

  return (
    <>
      <Header header={getHeaderMock()} />
      <Routes>
        <Route
          path='/'
          element={<Home reports={reports} knowledges={knowledges} categories={categories} tags={tags} />}
        />
        <Route path='/reports' element={<ReportList reports={reports} categories={categories} tags={tags} />} />
        <Route path='/report/:id' element={<ReportPage reports={reports} categories={categories} tags={tags} />} />
        <Route
          path='/knowledge'
          element={<KnowledgesList knowledges={knowledges} categories={categories} tags={tags} />}
        />
        <Route
          path='/categories/:id'
          element={<CategoriesPage reports={reports} knowledges={knowledges} categories={categories} tags={tags} />}
        />
        <Route
          path='/tags/:id'
          element={<TagsPage reports={reports} knowledges={knowledges} categories={categories} tags={tags} />}
        />
        <Route
          path='/search'
          element={<SearchPage reports={reports} knowledges={knowledges} categories={categories} tags={tags} />}
        />
      </Routes>
    </>
  );
};

export default App;
