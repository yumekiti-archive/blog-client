import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  categorys: {
    name: string;
    path: string;
  }[];
}

const Categories: FC<Props> = ({ categorys }) => {
  return (
    <div className='bg-white'>
      <h1 className='text-md text-center py-4 font-bold'>
        カテゴリー
      </h1>
      <div className='px-4'>
        {categorys.map((category) => (
          <Link
            key={category.path}
            to={category.path}
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