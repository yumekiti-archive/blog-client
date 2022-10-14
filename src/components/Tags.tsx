import { FC } from 'react';
import { Link } from 'react-router-dom';
import Tag from '../libs/interfaces/tag';

interface Props {
  data: Tag[];
}

const Tags: FC<Props> = ({ data }) => {
  return (
    (data.length > 0 && (
      <div className='card-color rounded'>
        <h1 className='text-xl text-center py-4'>
          <div className='flex justify-center items-center'>
            <i className='las la-tags'></i>
            <span className='mx-2'>タグ</span>
          </div>
        </h1>
        <div className='pb-2 px-4 flex flex-wrap items-center justify-between'>
          <ul className='flex flex-wrap gap-2'>
            {data.map((tag) => (
              <li key={tag.id}>
                <Link to={'/tags/' + tag.id}>
                  <p className='bg-gray-200 inline-block rounded-full px-3 py-1 text-sm hover:underline cursor-pointer whitespace-nowrap'>
                    {tag.attributes.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )) ||
    null
  );
};

export default Tags;
