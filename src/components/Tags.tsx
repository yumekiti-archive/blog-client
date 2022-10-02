import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  tags: {
    id: number;
    name: string;
  }[];
}

const Tags: FC<Props> = ({ tags }) => {
  return (
    <div className='bg-white rounded'>
      <h1 className='text-xl text-center py-4'>タグ</h1>
      <div className='px-4 flex flex-wrap items-center justify-between'>
        {tags.map((tag) => (
          <div className='p-2' key={tag.id}>
            <Link to={'/tag/' + tag.id}>
              <p className='bg-gray-200 inline-block rounded-full px-3 py-1 text-sm hover:underline cursor-pointer'>
                {tag.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;
