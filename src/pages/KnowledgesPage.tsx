import { FC } from 'react';

import Knowledges from '../components/Knowledges';
import Introduce from '../components/Introduce';
import Categories from '../components/Categories';
import Tags from '../components/Tags';
import Search from '../components/Search';

const KnowledgesList: FC = () => {
  return (
    <>
      <div className='container mx-auto flex flex-wrap'>
        <div className='w-full lg:w-3/4 mx-auto'>
          <div className='my-12 mx-6'>
            <Knowledges pageSize={10} find={{ type: 0, value: '' }} />
          </div>
        </div>
        <div className='w-full lg:w-1/4 mx-auto'>
          <div className='my-12 mx-6'>
            <Introduce />
          </div>
          <div className='my-12 mx-6'>
            <Search />
          </div>
          <div className='my-12 mx-6'>
            <Categories pageSize={10} find={{ type: 0, value: '' }} />
          </div>
          <div className='my-12 mx-6'>
            <Tags pageSize={100} find={{ type: 0, value: '' }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default KnowledgesList;
