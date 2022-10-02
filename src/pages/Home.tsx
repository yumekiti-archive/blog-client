import { FC } from 'react';

import Introduce from '../components/Introduce';
import Categories from '../components/Categories';
import Tags from '../components/Tags';
import Reports from '../components/Reports';
import Knowledge from '../components/Knowledge';
import Search from '../components/Search';

import { getReportsMock } from '../libs/mocks/reports';
import { getCategoriesMock } from '../libs/mocks/categories';
import { getIntroduceMock } from '../libs/mocks/introduce';
import { getKnowledgeMock } from '../libs/mocks/knowledge';
import { getTagsMock } from '../libs/mocks/tags';

const Home: FC = () => {
  return (
    <>
      <div className='container mx-auto flex flex-wrap'>
        <div className='w-full lg:w-3/4 mx-auto'>
          <div className='my-12 mx-6'>
            <Reports reports={getReportsMock()} groupNum={4} findReports={{ category: 0, tag: 0, search: '' }} />
          </div>
          <div className='my-12 mx-6'>
            <Knowledge
              knowledge={getKnowledgeMock()}
              groupNum={5}
              findKnowledge={{ category: 0, tag: 0, search: '' }}
            />
          </div>
        </div>
        <div className='w-full lg:w-1/4 mx-auto'>
          <div className='my-12 mx-6'>
            <Introduce introduce={getIntroduceMock()} />
          </div>
          <div className='my-12 mx-6'>
            <Search />
          </div>
          <div className='my-12 mx-6'>
            <Categories categories={getCategoriesMock()} />
          </div>
          <div className='my-12 mx-6'>
            <Tags tags={getTagsMock()} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
