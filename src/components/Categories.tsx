import { FC } from 'react';
import { Link } from 'react-router-dom';
import Category from '../libs/interfaces/category';

interface Props {
  data: Category[];
}

const CategoriesComponent: FC<Props> = ({ data }) => {
  return (
    (data.length > 0 && (
      <div className='card-color rounded'>
        <h1 className='text-xl text-center py-4'>
          <span className='flex justify-center items-center'>
            <i className="las la-bars"></i>カテゴリー
          </span>
        </h1>
        <ul className='pb-2 px-2 flex flex-wrap items-center justify-start'>
          {data.map((category) => (
            <li className='py-2 w-1/2 lg:w-full' key={category.id}>
              <div className='flex items-center justify-center'>
                <Link
                  to={'/categories/' + category.id}
                  className='cursor-pointer hover:underline flex whitespace-nowrap'
                >
                  <div className='flex items-center justify-center'>
                    <span className='w-3 h-3 bg-[#3da9fc] rounded-full mr-2' />
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
