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
}

const Knowledge: FC<Props> = ({ knowledge }) => {
  useEffect(() => {
    if (knowledge.length % 5 !== 0) {
      for (let i = 0; i < knowledge.length % 5; i++) {
        knowledge.push({ id: 0, img: "", title: "", subtitle: "", date: "" });
      }
    }
  }, [knowledge]);

  const knowledgeGroup = knowledge.reduce((acc, cur, i) => {
    if (i % 5 === 0) {
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
      <div className="bg-cyan-100">
        <h1 className="text-md text-center py-4 font-bold">新規知見</h1>
        <div className="flex items-center justify-center flex-wrap">
          {knowledgeGroup[(page - 1)].map((knowledge, index) => (
            knowledge.id !== 0 ? (
              <Link
                key={knowledge.id}
                to={'knowledge/' + knowledge.id}
                className="bg-white w-full mx-6 mb-4"
              >
                <br />
                <div className="flex items-center">
                  <img src={knowledge.img} alt={knowledge.title}
                    className="w-16 h-16 object-cover rounded-full mx-6"
                  />
                  <div className="text-md text-left">
                    <p className="text-xl">
                      {knowledge.title}
                    </p>
                    <p className="text-md">
                      {knowledge.subtitle}
                    </p>
                  </div>
                </div>
                <div className="h-6">
                  <p className="text-sm text-right pr-2">{knowledge.date}</p>
                </div>
              </Link>
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