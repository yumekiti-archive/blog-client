import { FC } from 'react';
import { Link } from 'react-router-dom';
import Report from '../libs/interfaces/report';

interface Props {
  report: Report | undefined;
}

const ReportComponent: FC<Props> = ({ report }) => {
  return (
    <>
      {report && (
        <div className='bg-cyan-100 rounded'>
          <div className='block p-4 text-center'>
            <h1 className='text-xl'>{report.attributes.title}</h1>
            <p className='text-xs'>{report.attributes.createdAt}</p>
          </div>
          <div className='px-4 pb-4'>
            <div className='bg-white min-h-screen rounded'>
              <div className='w-full flex justify-end items-center p-2'>
                <p className='text-sm px-3 py-1 bg-cyan-100 rounded-full hover:bg-cyan-200 cursor-pointer'>
                  {
                    report.attributes.category && (
                      <Link to={`/category/${report.attributes.category.id}`}>{report.attributes.category.attributes.name}</Link>
                    ) || null
                  }
                </p>
              </div>
              {/* markdown */}
              <div className='p-4 min-h-screen'>{report.attributes.body}</div>
              <ul className='p-2 flex justify-start items-center flex-wrap bg-white gap-2'>
                {
                  report.attributes.tags && (
                    report.attributes.tags.map((tag) => (
                      <li>
                        <Link to={'/tag/' + tag.id} key={tag.id}>
                          <p className='text-sm bg-gray-200 rounded-full px-3 py-1 cursor-pointer hover:underline'>
                            {tag.attributes.name}
                          </p>
                        </Link>
                      </li>
                    ))
                  ) || null
                }
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReportComponent;
