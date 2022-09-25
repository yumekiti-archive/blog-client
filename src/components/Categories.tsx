import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  categories: {
    id: number;
    name: string;
  }[];
}

const Categories: FC<Props> = ({ categories }) => {
  return (
    <div className='bg-white rounded'>
      <h1 className='text-xl text-center py-4'>
        カテゴリー
      </h1>
      <div className='px-4'>
        {categories.map((category) => (
          <Link
            key={category.id}
            to={'/category/' + category.id}
            className='block pb-4'
          >
            <p className='text-sm text-center cursor-pointer hover:underline flex items-center justify-center'>
              <span className='flex items-center justify-center'>
                <span className='w-3 h-3 bg-cyan-100 rounded-full mr-2'></span>
              </span>
              {category.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;