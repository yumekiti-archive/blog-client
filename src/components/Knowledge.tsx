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

const KnowledgeComponent: FC<Props> = ({ knowledge, groupNum, findKnowledge }) => {
  const [knowledgeData, setKnowledgeData] = useState(knowledge);

  useEffect(() => {
    // find
    if (findKnowledge.category !== 0)
      setKnowledgeData(knowledge.filter((knowledge) => knowledge.category.id === findKnowledge.category));
    else if (findKnowledge.tag !== 0)
      setKnowledgeData(knowledge.filter((knowledge) => knowledge.tags.some((tag) => tag.id === findKnowledge.tag)));
    else if (findKnowledge.search !== '')
      setKnowledgeData(knowledge.filter((knowledge) => knowledge.title.includes(findKnowledge.search)));
    else setKnowledgeData(knowledge);

    // pseudo-element
    if (knowledgeData.length % groupNum !== 0) {
      for (let i = 0; i < knowledgeData.length % groupNum; i++) {
        knowledgeData.push({
          id: 0,
          title: '',
          content: '',
          img: '',
          date: '',
          path: '',
          category: { id: 0, name: '' },
          tags: [],
        });
      }
    }
  }, [knowledge, findKnowledge]);

  // gorup
  const knowledgeGroup = knowledgeData.reduce((acc, cur, i) => {
    if (i % groupNum === 0) acc.push([cur]);
    else acc[acc.length - 1].push(cur);
    return acc;
  }, [] as Knowledge[][]);

  // page
  const [page, setPage] = useState(1);
  const maxPage = knowledgeGroup.length;

  return (
    <>
      <div className='bg-cyan-100 rounded'>
        <h1 className='text-xl text-center py-4'>新規知見</h1>
        <div className='flex items-center justify-center flex-wrap'>
          {knowledgeGroup[page - 1].map((knowledge, index) =>
            knowledge.title.length !== 0 ? (
              <div
                key={knowledge.id}
                className='bg-white w-full mx-6 mb-4 overflow-hidden hover:shadow-lg rounded-lg animate-slide-in-elliptic-top-fwd'
              >
                <a href={knowledge.path} target='_blank' rel='noreferrer'>
                  <br />
                  <div className='flex items-center'>
                    <img
                      src={knowledge.img}
                      alt={knowledge.title}
                      className='w-16 h-16 object-cover rounded-full mx-6'
                    />
                    <div className='text-left truncate w-full'>
                      <p className='text-sm'>{knowledge.date}</p>
                      <p className='text-xl truncate'>{knowledge.title}</p>
                      <p className='text-md truncate'>{knowledge.content}</p>
                    </div>
                  </div>
                </a>
                <div className='flex justify-end items-center'>
                  <p className='text-sm px-3 py-1 bg-cyan-100 rounded-full mx-2 my-2 hover:bg-cyan-200 cursor-pointer'>
                    <Link to={`/category/${knowledge.category.id}`}>{knowledge.category.name}</Link>
                  </p>
                  <div className='overflow-hidden flex'>
                    {knowledge.tags.map((tag) => (
                      <p
                        className='text-sm bg-gray-200 inline-block rounded-full px-3 py-1 cursor-pointer mr-2 my-2 hover:underline'
                        key={tag.id}
                      >
                        <Link to={'/tag/' + tag.id}>{tag.name}</Link>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div key={index} className='w-full mx-6 mb-4 overflow-hidden'>
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
  );
};

export default KnowledgeComponent;
