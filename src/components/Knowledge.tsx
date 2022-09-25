import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Props {
  knowledge: {
    id: number;
    img: string;
    title: string;
    subtitle: string;
    date: string;
  }[];
  groupNum: number;
}

const Knowledge: FC<Props> = ({ knowledge, groupNum }) => {
  useEffect(() => {
    if (knowledge.length % groupNum !== 0) {
      for (let i = 0; i < knowledge.length % groupNum; i++) {
        knowledge.push({ id: 0, img: "", title: "", subtitle: "", date: "" });
      }
    }
  }, [knowledge]);

  const knowledgeGroup = knowledge.reduce((acc, cur, i) => {
    if (i % groupNum === 0) {
      acc.push([cur]);
    } else {
      acc[acc.length - 1].push(cur);
    }
    return acc;
  }, [] as { id: number; img: string; title: string; subtitle: string; date: string }[][]);

  const [page, setPage] = useState(1);
  const maxPage = knowledgeGroup.length;

  return (
    <>
      <div className="bg-cyan-100 rounded">
        <h1 className="text-xl text-center py-4">新規知見</h1>
        <div className="flex items-center justify-center flex-wrap">
          {knowledgeGroup[(page - 1)].map((knowledge, index) => (
            knowledge.id !== 0 ? (
              <div key={knowledge.id} className="bg-white w-full mx-6 mb-4 overflow-hidden hover:shadow-lg rounded-lg animate-slide-in-elliptic-top-fwd">
                <Link
                  to={'knowledge/' + knowledge.id}
                >
                  <br />
                  <div className="flex items-center">
                    <img src={knowledge.img} alt={knowledge.title}
                      className="w-16 h-16 object-cover rounded-full mx-6"
                    />
                    <div className="text-md text-left truncate">
                      <p className="text-xl truncate">
                        {knowledge.title}
                      </p>
                      <p className="text-md truncate">
                        {knowledge.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="h-6">
                    <p className="text-sm text-right pr-2">{knowledge.date}</p>
                  </div>
                </Link>
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