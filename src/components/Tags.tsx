import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  tags: {
    name: string;
    path: string;
  }[];
}

const Tags: FC<Props> = ({ tags }) => {
  return (
    <div className='bg-white'>
      <h1 className='text-md text-center py-4 font-bold'>
        タグ
      </h1>
      <div className='px-4 flex flex-wrap items-center justify-start'>
        {tags.map((tag) => (
          <Link
            key={tag.path}
            to={tag.path}
          >
            <p className='bg-gray-200 inline-block rounded-full px-3 py-1 text-sm mr-2 mb-2 hover:underline cursor-pointer'>
              {tag.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Tags;