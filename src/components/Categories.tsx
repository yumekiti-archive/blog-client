import { FC } from 'react';
import { Link } from 'react-router-dom';
import Category from '../libs/interfaces/category';

interface Props {
  categories: Category[];
}

const CategoriesComponent: FC<Props> = ({ categories }) => {
  return (
    (categories.length > 0 && (
      <div className='bg-white rounded'>
        <h1 className='text-xl text-center py-4'>カテゴリー</h1>
        <ul className='pb-2 px-2 flex flex-wrap items-center justify-start'>
          {categories.map((category) => (
            <li className='py-2 w-1/2 lg:w-full' key={category.id}>
              <div className='flex items-center justify-center'>
                <Link to={'/category/' + category.id} className='cursor-pointer hover:underline flex'>
                  <div className='flex items-center justify-center'>
                    <span className='w-3 h-3 bg-cyan-100 rounded-full mr-2' />
                  </div>
                  <span>{category.attributes.name}</span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )) ||
    null
  );
};

export default CategoriesComponent;
