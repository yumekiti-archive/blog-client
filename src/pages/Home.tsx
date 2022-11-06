import { FC, useEffect } from 'react';

import Introduce from '../components/Introduce';
import Categories from '../components/Categories';
import Tags from '../components/Tags';
import Reports from '../components/Reports';
import Knowledges from '../components/Knowledges';
import Search from '../components/Search';

import Report from '../libs/interfaces/report';
import Category from '../libs/interfaces/category';
import Tag from '../libs/interfaces/tag';
import Knowledge from '../libs/interfaces/knowledge';

import { getReportsMock } from '../libs/mocks/reports';
import { getCategoriesMock } from '../libs/mocks/categories';
import { getIntroduceMock } from '../libs/mocks/introduce';
import { getKnowledgeMock } from '../libs/mocks/knowledges';
import { getTagsMock } from '../libs/mocks/tags';

const Home: FC = () => {
  return (
    <>
      <div className='container mx-auto flex flex-wrap'>
        <div className='w-full lg:w-3/4 mx-auto'>
          <div className='my-12 mx-6'>
            <Reports pageSize={4} find={{ type: 0, value: '' }} />
          </div>
          <div className='my-12 mx-6'>
            <Knowledges pageSize={5} find={{ type: 0, value: '' }} />
          </div>
        </div>
        <div className='w-full lg:w-1/4 mx-auto'>
          <div className='my-12 mx-6'>{/* <Introduce /> */}</div>
          <div className='my-12 mx-6'>
            <Search />
          </div>
          <div className='my-12 mx-6'>{/* <Categories /> */}</div>
          <div className='my-12 mx-6'>{/* <Tags /> */}</div>
        </div>
      </div>
    </>
  );
};

export default Home;
