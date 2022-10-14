import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Knowledge from '../libs/interfaces/knowledge';

interface Props {
  data: Knowledge[];
  groupNum: number;
  findKnowledges: {
    search: string;
    category: number;
    tag: number;
  };
}

const KnowledgesComponent: FC<Props> = ({ data, groupNum, findKnowledges }) => {
  const [knowledges, setKnowledges] = useState<Knowledge[]>([]);

  useEffect(() => {
    // find
    if (findKnowledges.category !== 0)
      setKnowledges(data.filter((knowledge) => knowledge.attributes.category.data.id === findKnowledges.category));
    else if (findKnowledges.tag !== 0)
      setKnowledges(
        data.filter((knowledge) => knowledge.attributes.tags.data.some((tag) => tag.id === findKnowledges.tag)),
      );
    else if (findKnowledges.search !== '')
      setKnowledges(
        data.filter((knowledge) =>
          knowledge.attributes.title.toLowerCase().includes(findKnowledges.search.toLowerCase()),
        ),
      );
    else setKnowledges(data);

    // sort id desc
    setKnowledges((prev) => prev.sort((a, b) => (a.id > b.id ? -1 : 1)));

    // pseudo-element
    setKnowledges((prev) => {
      const knowledgesWithoutDummy = prev.filter((knowledge) => knowledge.id !== 0);
      if (knowledgesWithoutDummy.length % groupNum !== 0) {
        for (let i = 0; i < knowledgesWithoutDummy.length % groupNum; i++) {
          knowledgesWithoutDummy.push({
            id: 0,
            attributes: {
              title: `dummy${i}`,
              content: '',
              img: { data: { id: 1, attributes: { name: '', url: '' } } },
              path: '',
              category: { data: { id: 0, attributes: { name: '', createdAt: '', updatedAt: '', publishedAt: '' } } },
              tags: { data: [] },
              createdAt: '',
              updatedAt: '',
              publishedAt: '',
            },
          });
        }
      }
      return knowledgesWithoutDummy;
    });
  }, [data, findKnowledges, groupNum]);

  // gorup
  const knowledgeGroup = knowledges.reduce((acc, cur, i) => {
    if (i % groupNum === 0) acc.push([cur]);
    else acc[acc.length - 1].push(cur);
    return acc;
  }, [] as Knowledge[][]);

  // page
  const [page, setPage] = useState(1);
  const maxPage = knowledgeGroup.length;

  return (
    (knowledgeGroup.length > 0 && (
      <>
        <div className='card-color rounded'>
          <h1 className='text-xl text-center py-4'>
            <div className='flex justify-center items-center'>
              <i className='las la-paperclip'></i>
              <span className='mx-2'>新規知見</span>
            </div>
          </h1>
          <div className='flex items-center justify-center flex-wrap'>
            {knowledgeGroup[page - 1].map((knowledge) =>
              knowledge.id !== 0 ? (
                <div
                  key={knowledge.id}
                  className='bg-white w-full mx-6 mb-4 overflow-hidden rounded-lg animate-fade-in shadow-md hover:shadow-lg border-2 border-[#094067]'
                >
                  <a href={knowledge.attributes.path} target='_blank' rel='noreferrer'>
                    <br />
                    <div className='flex items-center'>
                      {knowledge.attributes.img.data ? (
                        <img
                          src={`${window.location.origin}${knowledge.attributes.img.data.attributes.url}`}
                          alt={knowledge.attributes.title}
                          className='w-16 h-16 object-cover mx-6'
                        />
                      ) : (
                        <div className='w-16 h-16 object-cover mx-6'></div>
                      )}
                      <div className='text-left truncate w-full'>
                        <p className='text-sm truncate'>
                          {knowledge.attributes.createdAt.split('T')[0].split('-').join('/')}
                        </p>
                        <p className='text-xl truncate'>{knowledge.attributes.title}</p>
                        <p className='text-md truncate'>{knowledge.attributes.content}</p>
                      </div>
                    </div>
                  </a>
                  <div className='flex justify-end items-center'>
                    <p className='text-sm px-3 py-1 bg-cyan-100 rounded-full mx-2 my-2 hover:bg-cyan-200 cursor-pointer whitespace-nowrap'>
                      {knowledge.attributes.category.data && (
                        <Link to={`/categories/${knowledge.attributes.category.data.id}`}>
                          {knowledge.attributes.category.data.attributes.name}
                        </Link>
                      )}
                    </p>
                    <div className='overflow-scroll overflow-hidden flex'>
                      {knowledge.attributes.tags.data &&
                        knowledge.attributes.tags.data.map((tag) => (
                          <p
                            className='text-sm bg-gray-200 inline-block rounded-full px-3 py-1 cursor-pointer mr-2 my-2 hover:underline whitespace-nowrap'
                            key={tag.id}
                          >
                            <Link to={'/tags/' + tag.id}>{tag.attributes.name}</Link>
                          </p>
                        ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div key={knowledge.attributes.title} className='w-full mx-6 mb-4 overflow-hidden'>
                  <br />
                  <div className='flex items-center'>
                    <div className='w-16 h-16' />
                    <div className='text-left'>
                      <p className='text-sm'>&nbsp;</p>
                      <p className='text-xl'>&nbsp;</p>
                      <p className='text-md'>&nbsp;</p>
                    </div>
                  </div>
                  <div className='flex justify-end items-center'>
                    <p className='text-sm px-3 py-1 mx-2 my-2'>&nbsp;</p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
        <div className='flex items-center justify-center mt-4'>
          {page > 1 ? (
            <button onClick={() => setPage(page - 1)} className='mr-2'>
              <p className='w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm hover:bg-cyan-100'>
                <div className='flex justify-center items-center'>
                  <i className='las la-angle-left'></i>
                </div>
              </p>
            </button>
          ) : (
            <p className='w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm mr-2' />
          )}
          <p className='text-md mr-2'>
            {page} / {maxPage}
          </p>
          {page < maxPage ? (
            <button onClick={() => setPage(page + 1)} className='mr-2'>
              <p className='w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm hover:bg-cyan-100'>
                <div className='flex justify-center items-center'>
                  <i className='las la-angle-right'></i>
                </div>
              </p>
            </button>
          ) : (
            <p className='w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm mr-2' />
          )}
        </div>
      </>
    )) ||
    null
  );
};

export default KnowledgesComponent;
