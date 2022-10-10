import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { getReportsMock } from '../libs/mocks/reports';
import { getCategoriesMock } from '../libs/mocks/categories';
import { getIntroduceMock } from '../libs/mocks/introduce';
import { getTagsMock } from '../libs/mocks/tags';

import Report from '../libs/interfaces/report';
import Category from '../libs/interfaces/category';
import Tag from '../libs/interfaces/tag';
import Knowledge from '../libs/interfaces/knowledge';

import Introduce from '../components/Introduce';
import Categories from '../components/Categories';
import Tags from '../components/Tags';
import Search from '../components/Search';
import ReportDetail from '../components/ReportDetail';

import { useGetReports, useGetCategories, useGetTags } from '../libs/api';

interface Props {
  reports: Report[];
  categories: Category[];
  tags: Tag[];
}

const ReportList: FC<Props> = ({ reports, categories, tags }) => {
  const { id } = useParams<{ id: string }>();
  const report = reports.find((report) => report.id === Number(id));
  return (
    <div className='container mx-auto flex flex-wrap'>
      <div className='w-full lg:w-3/4 mx-auto'>
        <div className='my-12 mx-6'>
          <ReportDetail report={report} />
        </div>
      </div>
      <div className='w-full lg:w-1/4 mx-auto'>
        <div className='my-12 mx-6'>
          <Introduce data={getIntroduceMock()} />
        </div>
        <div className='my-12 mx-6'>
          <Search />
        </div>
        <div className='my-12 mx-6'>
          <Categories data={categories} />
        </div>
        <div className='my-12 mx-6'>
          <Tags data={tags} />
        </div>
      </div>
    </div>
  );
};

export default ReportList;
