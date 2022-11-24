import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Introduce from '../components/Introduce';
import Categories from '../components/Categories';
import Tags from '../components/Tags';
import Reports from '../components/Reports';
import Knowledges from '../components/Knowledges';
import Search from '../components/Search';

const TagsList: FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <div className='container mx-auto flex flex-wrap'>
        <div className='w-full lg:w-3/4 mx-auto'>
          <div className='my-12 mx-6'>
            <Reports pageSize={4} find={{ type: 2, value: String(id) }} />
          </div>
          <div className='my-12 mx-6'>
            <Knowledges pageSize={5} find={{ type: 2, value: String(id) }} />
          </div>
        </div>
        <div className='w-full lg:w-1/4 mx-auto'>
          <div className='my-12 mx-6'>
            <Introduce />
          </div>
          <div className='my-12 mx-6'>
            <Search />
          </div>
          <div className='my-12 mx-6'><Categories pageSize={10} find={{ type: 0, value: '' }} /></div>
          <div className='my-12 mx-6'><Tags pageSize={100} find={{ type: 0, value: '' }} /></div>
        </div>
      </div>
    </>
  );
};

export default TagsList;
