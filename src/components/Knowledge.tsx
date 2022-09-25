import { FC, useState, useEffect } from "react";

interface Props {
  knowledge: {
    id: number;
    title: string;
    subtitle: string;
    img: string;
    date: string;
    path: string;
    category: string;
    tags: {
      id: number;
      name: string;
    }[];
  }[];
  groupNum: number;
}

const Knowledge: FC<Props> = ({ knowledge, groupNum }) => {
  useEffect(() => {
    if (knowledge.length % groupNum !== 0) {
      for (let i = 0; i < knowledge.length % groupNum; i++) {
        knowledge.push({ id: 0, title: "", subtitle: "", img: "", date: "", path: "", category: "", tags: [] });
      }
    }
  }, [knowledge, groupNum]);

  const knowledgeGroup = knowledge.reduce((acc, cur, i) => {
    if (i % groupNum === 0) {
      acc.push([cur]);
    } else {
      acc[acc.length - 1].push(cur);
    }
    return acc;
  }, [] as { id: number; title: string; subtitle: string; img: string; date: string; path: string; category: string; tags: { id: number; name: string; }[]; }[][]);

  const [page, setPage] = useState(1);
  const maxPage = knowledgeGroup.length;

  return (
    <>
      <div className="bg-cyan-100 rounded">
        <h1 className="text-xl text-center py-4">新規知見</h1>
        <div className="flex items-center justify-center flex-wrap">
          {knowledgeGroup[(page - 1)].map((knowledge, index) => (
            knowledge.title.length !== 0 ? (
              <div key={knowledge.id} className="bg-white w-full mx-6 mb-4 overflow-hidden hover:shadow-lg rounded-lg animate-slide-in-elliptic-top-fwd">
                <a href={knowledge.path} target="_blank" rel="noreferrer">
                  <br />
                  <div className="flex items-center">
                    <img src={knowledge.img} alt={knowledge.title}
                      className="w-16 h-16 object-cover rounded-full mx-6"
                    />
                    <div className="text-md text-left truncate w-full">
                      <p className="text-sm">{knowledge.date}</p>
                      <p className="text-xl truncate">
                        {knowledge.title}
                      </p>
                      <p className="text-md truncate">
                        {knowledge.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end items-center text-sm">
                    <p className="px-3 py-1 bg-cyan-100 rounded-full mx-2 my-2">
                      {knowledge.category}
                    </p>
                    <div className="overflow-hidden flex">
                      {knowledge.tags.map((tag) => (
                        <p className='bg-gray-200 inline-block rounded-full px-3 py-1 cursor-pointer mr-2 my-2' key={tag.id}>
                          {tag.name}
                        </p>
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            ) : (
              <div key={index} className="w-full mx-6 mb-4">
                <br />
                <div className="h-16" />
                <div className="h-6" />
              </div>
            )
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        {
          page > 1 ?
          <button
            onClick={() => setPage(page - 1)}
          >
            <p className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm mr-2 hover:bg-cyan-100">
              {'<'}
            </p>
          </button>
          :
          <p className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm mr-2"></p>
        }
          <p className="text-md mr-2">{page} / {maxPage}</p>
        {
          page < maxPage ?
          <button
            onClick={() => setPage(page + 1)}
          >
            <p className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm mr-2 hover:bg-cyan-100">
              {'>'}
            </p>
          </button>
          :
          <p className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm mr-2"></p>
        }
      </div>
    </>
  );
}

export default Knowledge;