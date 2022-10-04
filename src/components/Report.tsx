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
            <h1 className='text-xl'>{report.title}</h1>
            <p className='text-xs'>{report.date}</p>
          </div>
          <div className='px-4 pb-4'>
            <div className='bg-white min-h-screen rounded'>
              <div className='w-full flex justify-end items-center p-2'>
                <p className='text-sm px-3 py-1 bg-cyan-100 rounded-full hover:bg-cyan-200 cursor-pointer'>
                  <Link to={`/category/${report.category.id}`}>{report.category.name}</Link>
                </p>
              </div>
              {/* markdown */}
              <div className='p-4 min-h-screen'>{report.body}</div>
              <ul className='p-2 flex justify-start items-center flex-wrap bg-white gap-2'>
                {report.tags.map((tag) => (
                  <li>
                    <Link to={'/tag/' + tag.id} key={tag.id}>
                      <p className='text-sm bg-gray-200 rounded-full px-3 py-1 cursor-pointer hover:underline'>
                        {tag.name}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReportComponent;
