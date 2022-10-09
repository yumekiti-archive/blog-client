import { FC } from 'react';

import { getKnowledgeMock } from '../libs/mocks/knowledges';
import { getCategoriesMock } from '../libs/mocks/categories';
import { getIntroduceMock } from '../libs/mocks/introduce';
import { getTagsMock } from '../libs/mocks/tags';

import Knowledge from '../components/Knowledges';
import Introduce from '../components/Introduce';
import Categories from '../components/Categories';
import Tags from '../components/Tags';
import Search from '../components/Search';

const KnowledgeList: FC = () => {
  return (
    <>
      <div className='container mx-auto flex flex-wrap'>
        <div className='w-full lg:w-3/4 mx-auto'>
          <div className='my-12 mx-6'>
            <Knowledge
              knowledge={getKnowledgeMock()}
              groupNum={10}
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

export default KnowledgeList;
