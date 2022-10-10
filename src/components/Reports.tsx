import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Report from '../libs/interfaces/report';

interface Props {
  reports: Report[];
  groupNum: number;
  findReports: {
    search: string;
    category: number;
    tag: number;
  };
}

const Reports: FC<Props> = ({ reports, groupNum, findReports }) => {
  const [reportsData, setReportsData] = useState(reports);

  useEffect(() => {
    // find
    if (findReports.category !== 0)
      setReportsData(reports.filter((report) => report.attributes.category.id === findReports.category));
    else if (findReports.tag !== 0)
      setReportsData(reports.filter((report) => report.attributes.tags.some((tag) => tag.id === findReports.tag)));
    else if (findReports.search !== '')
      setReportsData(reports.filter((report) => report.attributes.title.includes(findReports.search)));
    else setReportsData(reports);

    // pseudo-element
    if (reportsData.length % groupNum !== 0) {
      for (let i = 0; i < reportsData.length % groupNum; i++) {
        reportsData.push({
          id: 0,
          attributes: {
            img: '',
            title: `dummy${i}`,
            body: '',
            category: { id: 0, attributes: { name: '', createdAt: '', updatedAt: '', publishedAt: '' } },
            tags: [],
            createdAt: '',
            updatedAt: '',
            publishedAt: '',
          },
        });
      }
    }
  }, [reports, findReports]);

  // group
  const reportsGroup = reportsData.reduce((acc, cur, i) => {
    if (i % groupNum === 0) {
      acc.push([cur]);
    } else {
      acc[acc.length - 1].push(cur);
    }
    return acc;
  }, [] as Report[][]);

  // page
  const [page, setPage] = useState(1);
  const maxPage = reportsGroup.length;

  return (
    (reportsGroup.length > 0 && (
      <>
        <div className='card-color rounded'>
          <h1 className='text-xl text-center py-4'>新規記事</h1>
          <div className='flex items-center justify-between flex-wrap'>
            {reportsGroup[page - 1].map((report) =>
              report.id !== 0 ? (
                <div key={report.id} className='w-full lg:w-1/2 animate-fade-in'>
                  <Link to={'/report/' + report.id} className='hover:opacity-80'>
                    <div className='px-4 pb-6 relative'>
                      <div className='card-color rounded-lg shadow-md border-2 border-[#094067]'>
                        <img
                          src={`http://192.168.11.58:1337${report.attributes.img}`}
                          alt={report.attributes.title}
                          className='w-full h-48 object-cover'
                        />
                        <div className='flex justify-start items-center px-6 py-2 h-20'>
                          <p className='text-md text-left line-clamp-2'>{report.attributes.title}</p>
                        </div>
                        <p className='text-sm text-right pr-2 pb-1'>{report.attributes.createdAt}</p>
                        <span className='top-2 left-6 absolute bg-cyan-100 text-xs px-2 py-1 rounded-full'>
                          {report.attributes.category && report.attributes.category.attributes.name}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ) : (
                <div key={report.attributes.title} className='w-full lg:w-1/2'>
                  <div className='px-4 pb-6'>
                    <div>
                      <div className='h-48' />
                      <div className='px-4 py-2 h-20'>
                        <p className='text-md'>&nbsp;</p>
                      </div>
                      <p className='text-sm pr-2 pb-1'>&nbsp;</p>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
        <div className='flex items-center justify-center mt-4'>
          {page > 1 ? (
            <button onClick={() => setPage(page - 1)} className='mr-2'>
              <p className='w-8 h-8 card-color rounded-full flex items-center justify-center text-sm hover:bg-cyan-100'>
                {'<'}
              </p>
            </button>
          ) : (
            <p className='w-8 h-8 card-color rounded-full flex items-center justify-center text-sm mr-2' />
          )}
          <p className='text-md mr-2'>
            {page} / {maxPage}
          </p>
          {page < maxPage ? (
            <button onClick={() => setPage(page + 1)} className='mr-2'>
              <p className='w-8 h-8 card-color rounded-full flex items-center justify-center text-sm hover:bg-cyan-100'>
                {'>'}
              </p>
            </button>
          ) : (
            <p className='w-8 h-8 card-color rounded-full flex items-center justify-center text-sm mr-2' />
          )}
        </div>
      </>
    )) ||
    null
  );
};

export default Reports;
