import { FC, useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  reports: {
    img: string;
    title: string;
    category: string;
    path: string;
    date: string;
  }[];
}

const Reports: FC<Props> = ({ reports }) => {
  const reportsGroup = reports.reduce((acc, cur, i) => {
    if (i % 4 === 0) {
      acc.push([cur]);
    } else {
      acc[acc.length - 1].push(cur);
    }
    return acc;
  }, [] as { img: string; title: string; category: string; path: string; date: string; }[][]);

  const [page, setPage] = useState(1);
  const maxPage = reportsGroup.length;

  return (
    <>
      <div className="bg-cyan-100">
        <h1 className="text-md text-center py-4 font-bold">最新の記事</h1>
        <div className="flex items-center justify-between flex-wrap">
          {reportsGroup[(page - 1)].map((report) => (
            <div className="w-1/2">
              <Link
                key={report.path}
                to={report.path}
              >
                <div className="p-4 relative">
                  <div className="bg-white">
                    <img src={report.img} alt={report.title} className="w-full h-48 object-cover" />
                    <p className="text-md text-center py-4 px-2">
                      {report.title}
                    </p>
                    <p className="text-sm text-right pr-2">{report.date}</p>
                    <span className="top-6 left-6 absolute bg-cyan-100 text-xs px-2 py-1 rounded-full">{report.category}</span>
                  </div>
                </div>
              </Link>
            </div>
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

export default Reports;