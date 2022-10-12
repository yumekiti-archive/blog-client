import { FC } from 'react';
import { Link } from 'react-router-dom';
import Report from '../libs/interfaces/report';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
  report: Report | undefined;
}

const ReportDetailComponent: FC<Props> = ({ report }) => {
  return (
    <>
      {report && (
        <div className='card-color rounded'>
          <div className='block p-4 text-center'>
            <h1 className='text-2xl'>{report.attributes.title}</h1>
            <p className='text-xs'>{report.attributes.createdAt.split('T')[0].split('-').join('/')}</p>
          </div>
          <div className='px-4 pb-4'>
            <div className='min-h-screen rounded'>
              <div className='w-full flex justify-end items-center p-2'>
                <p className='text-sm px-3 py-1 bg-cyan-100 rounded-full hover:bg-cyan-200 cursor-pointer whitespace-nowrap'>
                  {(report.attributes.category.data && (
                    <Link to={`/categories/${report.attributes.category.data.id}`}>
                      {report.attributes.category.data.attributes.name}
                    </Link>
                  )) ||
                    null}
                </p>
              </div>
              {/* markdown */}
              <div className='markdown p-4 min-h-screen'>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{report.attributes.body}</ReactMarkdown>
              </div>
              <ul className='p-2 flex justify-start items-center flex-wrap gap-2'>
                {(report.attributes.tags.data &&
                  report.attributes.tags.data.map((tag) => (
                    <li key={tag.id}>
                      <Link to={'/tags/' + tag.id}>
                        <p className='text-sm bg-gray-200 rounded-full px-3 py-1 cursor-pointer hover:underline whitespace-nowrap'>
                          {tag.attributes.name}
                        </p>
                      </Link>
                    </li>
                  ))) ||
                  null}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReportDetailComponent;
