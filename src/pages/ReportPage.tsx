import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { getReportsMock } from '../libs/mocks/reports';
import { getCategoriesMock } from '../libs/mocks/categories';
import { getIntroduceMock } from '../libs/mocks/introduce';
import { getTagsMock } from '../libs/mocks/tags';

import Introduce from '../components/Introduce';
import Categories from '../components/Categories';
import Tags from '../components/Tags';
import Search from '../components/Search';
import Report from '../components/Report';

import { useGetReports, useGetCategories, useGetTags } from '../libs/api';

const ReportList: FC = () => {
  const { id } = useParams<{ id: string }>();
  const reports = useGetReports();
  const report = reports.find((report) => report.id === Number(id));
  return (
    <div className='container mx-auto flex flex-wrap'>
      <div className='w-full lg:w-3/4 mx-auto'>
        <div className='my-12 mx-6'>
          <Report report={report} />
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
          <Categories data={useGetCategories()} />
        </div>
        <div className='my-12 mx-6'>
          <Tags data={useGetTags()} />
        </div>
      </div>
    </div>
  );
};

export default ReportList;
