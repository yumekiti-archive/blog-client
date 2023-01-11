import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tag } from '../libs/interfaces/tag';

import { useGet } from '../libs/api';

interface Props {
  size: number;
  find: {
    type: number;
    value: string;
  };
}

const Tags: FC<Props> = ({ size, find }) => {
  const pageSize = size;
  const [tags, setTags] = useState<Tag['data']>([]);
  const { type, value } = find;
  const { data } = useGet('tags', 1, pageSize, type, value);

  useEffect(() => {
    if (!data) return;
    setTags(data.data);
  }, [data]);

  return (
    (tags.length > 0 && (
      <div className='card-color rounded'>
        <h1 className='text-xl text-center py-4'>
          <div className='flex justify-center items-center'>
            <i className='las la-tags'></i>
            <span className='mx-2'>タグ</span>
          </div>
        </h1>
        <div className='pb-2 px-4 flex flex-wrap items-center'>
          <ul className='flex flex-wrap items-center justify-between gap-2'>
            {tags.map((tag) => (
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
