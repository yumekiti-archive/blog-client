import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Knowledge from '../libs/interfaces/knowledge';

import { useGet } from '../libs/api';

interface Props {
  pageSize: number;
  find: {
    type: number;
    value: string;
  };
}

const generateKnowledgesDummy = (prevKnowledges: Knowledge['data'], pageSize: number): Knowledge['data'] => {
  const knowledgesWithoutDummy = prevKnowledges.filter((knowledge) => knowledge.id !== 0);

  if (prevKnowledges.length % pageSize === 0) return knowledgesWithoutDummy;
  for (let i = 0; i < pageSize - (prevKnowledges.length % pageSize); i++) {
    knowledgesWithoutDummy.push({
      id: 0,
      attributes: {
        title: `dummy${i}`,
        content: '',
        img: { data: { id: 0, attributes: { name: '', url: '' } } },
        path: '',
        category: { data: { id: 0, attributes: { name: '', createdAt: '', updatedAt: '', publishedAt: '' } } },
        tags: { data: [] },
        createdAt: '',
        updatedAt: '',
        publishedAt: '',
      },
    });
  }
  return knowledgesWithoutDummy;
};

const KnowledgesComponent: FC<Props> = ({ pageSize, find }) => {
  const [knowledges, setKnowledges] = useState<Knowledge['data']>([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const { type, value } = find;
  const { data, error, isLoading } = useGet('knowledges', page, pageSize, type, value);

  useEffect(() => {
    if (!data) return;
    setKnowledges(generateKnowledgesDummy(data.data, pageSize));
    setPageCount(data.meta.pagination.pageCount);
  }, [data]);

  return (
    <>
      <div className='card-color rounded'>
        <h1 className='text-xl text-center py-4'>
          <div className='flex justify-center items-center'>
            <i className='las la-paperclip'></i>
            <span className='mx-2'>新規知見</span>
          </div>
        </h1>
        { !isLoading ? (
          <div className='flex items-center justify-center flex-wrap'>
            {knowledges.map((knowledge) =>
              knowledge.id !== 0 ? (
                <div
                  key={knowledge.id}
                  className='bg-white w-full mx-6 mb-4 overflow-hidden rounded-lg animate-fade-in shadow-md hover:shadow-lg border-2 border-[#094067]'
                >
                  <a href={knowledge.attributes.path} target='_blank' rel='noreferrer'>
                    <br />
                    <div className='flex items-center'>
                      {knowledge.attributes.img.data ? (
                        <div className='mx-6'>
                          <img
                            src={`${window.location.origin}${knowledge.attributes.img.data.attributes.url}`}
                            alt={knowledge.attributes.title}
                            className='w-16 h-16 object-contain'
                          />
                        </div>
                      ) : (
                        <div className='mx-6'>
                          <div className='w-16 h-16 object-contain bg-gray-200 rounded-full' />
                        </div>
                      )}
                      <div className='text-left truncate w-full'>
                        <p className='text-sm overflow-scroll overflow-hidden'>
                          {knowledge.attributes.createdAt.split('T')[0].split('-').join('/')}
                        </p>
                        <div className='overflow-scroll overflow-hidden'>
                          <p className='text-xl'>{knowledge.attributes.title}</p> 
                          {knowledge.attributes.content ? (
                            <p className='text-sm'>{knowledge.attributes.content}</p>
                          ) : (
                            <p className='text-sm'>未開拓</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className='flex justify-end items-center'>
                    <div className='text-sm px-3 py-1 bg-cyan-100 rounded-full mx-2 my-2 hover:bg-cyan-200 cursor-pointer whitespace-nowrap'>
                      {knowledge.attributes.category.data ? (
                        <Link to={`/categories/${knowledge.attributes.category.data.id}`}>
                          {knowledge.attributes.category.data.attributes.name}
                        </Link>
                      ) : (
                        <p>未分類</p>
                      )}
                    </div>
                    <div className='overflow-scroll overflow-hidden flex'>
                      {knowledge.attributes.tags.data &&
                        knowledge.attributes.tags.data.map((tag) => (
                          <Link to={'/tags/' + tag.id} key={tag.id}>
                            <p
                              className='text-sm bg-gray-200 inline-block rounded-full px-3 py-1 cursor-pointer mr-2 my-2 hover:underline whitespace-nowrap'
                            >
                              {tag.attributes.name}
                            </p>
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div key={knowledge.attributes.title} className='w-full mx-6 mb-4 overflow-hidden border-2 opacity-0'>
                  <br />
                  <div className='flex items-center'>
                    <div className='w-16 h-16 mx-6' />
                    <div className='text-left'>
                      <p className='text-sm'>&nbsp;</p>
                      <p className='text-xl'>&nbsp;</p>
                      <p className='text-sm'>&nbsp;</p>
                    </div>
                  </div>
                  <div className='flex justify-end items-center'>
                    <p className='text-sm px-3 py-1 mx-2 my-2'>&nbsp;</p>
                  </div>
                </div>
              ),
            )}
          </div>
        ) : (
          <div className='flex items-center justify-center flex-wrap'>
            {(
              [...Array(pageSize)].map((_, i) => (
                <div key={i} className='animate-pulse w-full mx-6 mb-4 overflow-hidden border-2 relative'>
                  <div className='opacity-0'>
                    <br />
                    <div className='flex items-center'>
                      <div className='w-16 h-16 mx-6' />
                      <div className='text-left'>
                        <p className='text-sm'>&nbsp;</p>
                        <p className='text-xl'>&nbsp;</p>
                        <p className='text-sm'>&nbsp;</p>
                      </div>
                    </div>
                    <div className='flex justify-end items-center'>
                      <p className='text-sm px-3 py-1 mx-2 my-2'>&nbsp;</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
      <div className='flex items-center justify-center mt-4'>
        {page > 1 ? (
          <button onClick={() => setPage(page - 1)} className='mr-2'>
            <p className='w-8 h-8 card-color rounded-full flex items-center justify-center text-sm hover:bg-cyan-100'>
              <span className='flex justify-center items-center'>
                <i className='las la-angle-left'></i>
              </span>
            </p>
          </button>
        ) : (
          <p className='w-8 h-8 card-color rounded-full flex items-center justify-center text-sm mr-2' />
        )}
        <p className='text-md mr-2'>
          {page} / {pageCount}
        </p>
        {page < pageCount ? (
          <button onClick={() => setPage(page + 1)} className='mr-2'>
            <p className='w-8 h-8 card-color rounded-full flex items-center justify-center text-sm hover:bg-cyan-100'>
              <span className='flex justify-center items-center'>
                <i className='las la-angle-right'></i>
              </span>
            </p>
          </button>
        ) : (
          <p className='w-8 h-8 card-color rounded-full flex items-center justify-center text-sm mr-2' />
        )}
      </div>
    </>
  );
};

export default KnowledgesComponent;
