import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  reports: {
    id: number;
    img: string;
    title: string;
    category: string;
    date: string;
  }[];
}

const Reports: FC<Props> = ({ reports }) => {
  useEffect(() => {
    if(reports.length % 4 !== 0) {
      for(let i = 0; i < reports.length % 4; i++) {
        reports.push({ id: 0, img: "", title: "", category: "", date: "" });
      }
    }
  }, [reports]);

  const reportsGroup = reports.reduce((acc, cur, i) => {
    if (i % 4 === 0) {
      acc.push([cur]);
    } else {
      acc[acc.length - 1].push(cur);
    }
    return acc;
  }, [] as { id: number; img: string; title: string; category: string; date: string }[][]);

  const [page, setPage] = useState(1);
  const maxPage = reportsGroup.length;

  return (
    <>
      <div className="bg-cyan-100">
        <h1 className="text-md text-center py-4 font-bold">最新の記事</h1>
        <div className="flex items-center justify-between flex-wrap">
          {reportsGroup[(page - 1)].map((report, index) => (
            report.id !== 0 ? (
              <div key={report.id} className="w-1/2 hover:opacity-80">
                <Link
                  to={'report/' + report.id}
                >
                  <div className="p-4 relative">
                    <div className="bg-white">
                      <img src={report.img} alt={report.title} className="w-full h-48 object-cover" />
                      <div className="flex justify-center items-start px-4 py-2 h-20">
                        <p className="text-md text-left line-clamp-2">
                          {report.title}
                        </p>
                      </div>
                      <p className="h-6 text-sm text-right pr-2">{report.date}</p>
                      <span className="top-6 left-6 absolute bg-cyan-100 text-xs px-2 py-1 rounded-full">{report.category}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ) : (
              <div key={index} className="w-1/2">
                <div className="p-4">
                  <div className="w-full h-48"></div>
                  <div className="h-20"></div>
                  <div className="h-6"></div>
                </div>
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

export default Reports;