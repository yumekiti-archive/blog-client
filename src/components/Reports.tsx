import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Report } from '../libs/interfaces/report';

import { useGetReports } from '../libs/api';

interface Props {
  pageSize: number;
  find: {
    type: number;
    value: string;
  };
}

// 疑似要素
const generateReportsDummy = (prevReports: Report['data'], pageSize: number): Report['data'] => {
  const reportsWithoutDummy = prevReports.filter((report) => report.id !== 0);
  if (reportsWithoutDummy.length % pageSize !== 0) {
    for (let i = 0; i < reportsWithoutDummy.length % pageSize; i++) {
      reportsWithoutDummy.push({
        id: 0,
        attributes: {
          img: { data: { id: 0, attributes: { name: '', url: '' } } },
          title: `dummy${i}`,
          body: '',
          category: { data: { id: 0, attributes: { name: '', createdAt: '', updatedAt: '', publishedAt: '' } } },
          tags: { data: [] },
          createdAt: '',
          updatedAt: '',
          publishedAt: '',
        },
      });
    }
  }
  return reportsWithoutDummy;
};

const Reports: FC<Props> = ({ pageSize, find }) => {
  const [reports, setReports] = useState<Report['data']>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const { type, value } = find;
  const { data, meta } = useGetReports(page, pageSize, type, value);

  if (loading && data.length > 0) setLoading(false);

  useEffect(() => {
    setLoading(true);
    if (!data.length) return;

    setReports(data);
    setReports(generateReportsDummy(data, pageSize));
    setTotal(meta.pagination.pageCount);
  }, [find, loading, page]);

  return (
    <>
      <div className='card-color rounded'>
        <h1 className='text-xl text-center py-4'>
          <div className='flex justify-center items-center'>
            <i className='las la-file-alt'></i>
            <span className='mx-2'>新規記事</span>
          </div>
        </h1>
        { !loading ? (
          <div className='flex items-center justify-between flex-wrap'>
            {reports.map((report) =>
              report.id !== 0 ? (
                <div key={report.id} className='w-full lg:w-1/2 animate-fade-in'>
                  <Link to={'/report/' + report.id} className='hover:opacity-80'>
                    <div className='px-4 pb-6 relative'>
                      <div className='card-color rounded-lg shadow-md border-2 border-[#094067]'>
                        <div className='mt-2 ml-2'>
                          <div className='bg-cyan-100 text-xs px-2 py-1 rounded-full inline'>
                            {report.attributes.category.data && report.attributes.category.data.attributes.name}
                          </div>
                        </div>
                        {report.attributes.img.data ? (
                          <img
                            src={`${window.location.origin}${report.attributes.img.data.attributes.url}`}
                            alt={report.attributes.title}
                            className='w-full h-48 object-contain p-2'
                          />
                        ) : (
                          <div className='w-full h-48 bg-gray-200 p-2'></div>
                        )}
                        <div className='flex justify-start items-center px-6 py-2 h-20'>
                          <p className='text-md text-left line-clamp-2'>{report.attributes.title}</p>
                        </div>
                        <p className='text-sm text-right pr-2 pb-1'>
                          {report.attributes.createdAt.split('T')[0].split('-').join('/')}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ) : (
                <div key={report.attributes.title} className='w-full lg:w-1/2'>
                  <div className='px-4 pb-6'>
                    <div className='border-2 opacity-0'>
                      <div className='mt-2 ml-2'>
                        <div className='text-xs px-2 py-1'>&nbsp;</div>
                      </div>
                      <div className='h-48 p-2' />
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
        ) : (
          <div className='flex items-center justify-between flex-wrap'>
            {(
              [...Array(pageSize)].map((_, i) => (
                <div key={i} className='w-full lg:w-1/2 relative'>
                  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className='px-4 pb-6'>
                    <div className='border-2 opacity-0'>
                      <div className='mt-2 ml-2'>
                        <div className='text-xs px-2 py-1'>&nbsp;</div>
                      </div>
                      <div className='h-48 p-2' />
                      <div className='px-4 py-2 h-20'>
                        <p className='text-md'>&nbsp;</p>
                      </div>
                      <p className='text-sm pr-2 pb-1'>&nbsp;</p>
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
          {page} / {total}
        </p>
        {page < total ? (
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

export default Reports;
