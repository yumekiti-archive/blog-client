import { FC } from 'react';

import { getReportsMock } from '../libs/mocks/reports';
import { getCategoriesMock } from '../libs/mocks/categories';
import { getIntroduceMock } from '../libs/mocks/introduce';
import { getTagsMock } from '../libs/mocks/tags';

import Report from '../libs/interfaces/report';
import Category from '../libs/interfaces/category';
import Tag from '../libs/interfaces/tag';

import Reports from '../components/Reports';
import Introduce from '../components/Introduce';
import Categories from '../components/Categories';
import Tags from '../components/Tags';
import Search from '../components/Search';

interface Props {
  reports: Report[];
  categories: Category[];
  tags: Tag[];
}

const ReportList: FC<Props> = ({ reports, categories, tags }) => {
  return (
    <>
      <div className='container mx-auto flex flex-wrap'>
        <div className='w-full lg:w-3/4 mx-auto'>
          <div className='my-12 mx-6'>
            <Reports data={reports} groupNum={8} findReports={{ category: 0, tag: 0, search: '' }} />
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
    </>
  );
};

export default ReportList;
