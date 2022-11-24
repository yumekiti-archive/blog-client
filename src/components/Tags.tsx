import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tag } from '../libs/interfaces/tag';

import { useGetTags } from '../libs/api';

interface Props {
  pageSize: number;
  find: {
    type: number;
    value: string;
  };
}

const Tags: FC<Props> = ({ pageSize, find }) => {
  const [tags, setTags] = useState<Tag['data']>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const { type, value } = find;
  const { data, meta } = useGetTags(page, pageSize, type, value);

  if (loading && data.length > 0) setLoading(false);

  useEffect(() => {
    setLoading(true);
    if (!data) return;
    setTags(data);
    setTotal(meta.pagination.pageCount);
  }, [loading, page]);

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
