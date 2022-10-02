import { FC } from 'react';
import { Link } from 'react-router-dom';
import Category from '../libs/interfaces/category';

interface Props {
  categories: Category[];
}

const CategoriesComponent: FC<Props> = ({ categories }) => {
  return (
    <div className='bg-white rounded'>
      <h1 className='text-xl text-center py-4'>
        カテゴリー
      </h1>
      <div className='px-4 flex flex-wrap items-center justify-center'>
        {categories.map((category) => (
          <Link
            key={category.id}
            to={'/category/' + category.id}
            className='py-2 w-1/3 lg:w-full'
          >
            <div className='cursor-pointer hover:underline flex items-center justify-center'>
              <div className='flex items-center justify-center'>
                <span className='w-3 h-3 bg-cyan-100 rounded-full mr-2' />
              </div>
              <span>{category.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoriesComponent;