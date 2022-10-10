import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Knowledge from '../libs/interfaces/knowledge';

interface Props {
  knowledge: Knowledge[];
  groupNum: number;
  findKnowledge: {
    search: string;
    category: number;
    tag: number;
  };
}

const KnowledgesComponent: FC<Props> = ({ knowledge, groupNum, findKnowledge }) => {
  const [knowledges, setKnowledges] = useState<Knowledge[]>([]);

  useEffect(() => {
    // find
    if (findKnowledge.category !== 0)
      setKnowledges(knowledge.filter((knowledge) => knowledge.attributes.category.id === findKnowledge.category));
    else if (findKnowledge.tag !== 0)
      setKnowledges(
        knowledge.filter((knowledge) => knowledge.attributes.tags.some((tag) => tag.id === findKnowledge.tag)),
      );
    else if (findKnowledge.search !== '')
      setKnowledges(knowledge.filter((knowledge) => knowledge.attributes.title.includes(findKnowledge.search)));
    else setKnowledges(knowledge);

    // pseudo-element
    if (knowledges.length % groupNum !== 0) {
      for (let i = 0; i < knowledges.length % groupNum; i++) {
        knowledges.push({
          id: 0,
          attributes: {
            title: `dummy${i}`,
            content: '',
            img: '',
            path: '',
            category: { id: 0, attributes: { name: '', createdAt: '', updatedAt: '', publishedAt: '' } },
            tags: [],
            createdAt: '',
            updatedAt: '',
            publishedAt: '',
          },
        });
      }
    }
  }, [knowledge, findKnowledge]);

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
          <h1 className='text-xl text-center py-4'>新規知見</h1>
          <div className='flex items-center justify-center flex-wrap'>
            {knowledgeGroup[page - 1].map((knowledge) =>
              knowledge.id !== 0 ? (
                <div
                  key={knowledge.id}
                  className='bg-white w-full mx-6 mb-4 overflow-hidden rounded-lg animate-fade-in shadow-md hover:shadow-lg'
                >
                  <a href={knowledge.attributes.path} target='_blank' rel='noreferrer'>
                    <br />
                    <div className='flex items-center'>
                      <img
                        src={`http://192.168.11.58:1337${knowledge.attributes.img}`}
                        alt={knowledge.attributes.title}
                        className='w-16 h-16 object-cover mx-6'
                      />
                      <div className='text-left truncate w-full'>
                        <p className='text-sm'>{knowledge.attributes.createdAt}</p>
                        <p className='text-xl truncate'>{knowledge.attributes.title}</p>
                        <p className='text-md truncate'>{knowledge.attributes.content}</p>
                      </div>
                    </div>
                  </a>
                  <div className='flex justify-end items-center'>
                    <p className='text-sm px-3 py-1 bg-cyan-100 rounded-full mx-2 my-2 hover:bg-cyan-200 cursor-pointer whitespace-nowrap'>
                      {knowledge.attributes.category ? (
                        <Link to={`/category/${knowledge.attributes.category.id}`}>
                          {knowledge.attributes.category.attributes.name}
                        </Link>
                      ) : null}
                    </p>
                    <div className='overflow-scroll overflow-hidden flex'>
                      {knowledge.attributes.tags
                        ? knowledge.attributes.tags.map((tag) => (
                            <p
                              className='text-sm bg-gray-200 inline-block rounded-full px-3 py-1 cursor-pointer mr-2 my-2 hover:underline'
                              key={tag.id}
                            >
                              <Link to={'/tag/' + tag.id}>{tag.attributes.name}</Link>
                            </p>
                          ))
                        : null}
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
                {'<'}
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
                {'>'}
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
