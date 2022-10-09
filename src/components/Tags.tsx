import { FC } from 'react';
import { Link } from 'react-router-dom';
import Tag from '../libs/interfaces/tag';

interface Props {
  tags: Tag[];
}

const Tags: FC<Props> = ({ tags }) => {
  return (
    tags.length > 0 && (
      <div className='bg-white rounded'>
        <h1 className='text-xl text-center py-4'>タグ</h1>
        <div className='pb-2 px-4 flex flex-wrap items-center justify-between'>
          <ul className='flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <li key={tag.id}>
                <Link to={'/tag/' + tag.id}>
                  <p className='bg-gray-200 inline-block rounded-full px-3 py-1 text-sm hover:underline cursor-pointer'>
                    {tag.attributes.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ) || null
  );
};

export default Tags;
