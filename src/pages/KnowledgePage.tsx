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

import { useGetCategories, useGetTags, useGetKnowledge } from '../libs/api';

const KnowledgeList: FC = () => {
  return (
    <>
      <div className='container mx-auto flex flex-wrap'>
        <div className='w-full lg:w-3/4 mx-auto'>
          <div className='my-12 mx-6'>
            <Knowledge
              data={useGetKnowledge()}
              groupNum={10}
              findKnowledge={{ category: 0, tag: 0, search: '' }}
            />
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
    </>
  );
};

export default KnowledgeList;
