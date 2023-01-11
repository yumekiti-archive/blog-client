import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import Introduce from '../components/Introduce';
import Categories from '../components/Categories';
import Tags from '../components/Tags';
import Reports from '../components/Reports';
import Knowledges from '../components/Knowledges';
import Search from '../components/Search';

const Home: FC = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search') || '';

  return (
    <>
      <div className='container mx-auto flex flex-wrap'>
        <div className='w-full lg:w-3/4 mx-auto'>
          <div className='my-12 mx-6'>
            <Reports size={4} find={{ type: 3, value: search }} />
          </div>
          <div className='my-12 mx-6'>
            <Knowledges size={5} find={{ type: 3, value: search }} />
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
            <Categories size={10} find={{ type: 0, value: '' }} />
          </div>
          <div className='my-12 mx-6'>
            <Tags size={100} find={{ type: 0, value: '' }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
