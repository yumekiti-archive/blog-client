import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  report: {
    title: string,
    date: string,
    body: string,
    category: {
      id: number,
      name: string,
    },
    tags: {
      id: number,
      name: string,
    }[]
  },
}

const Report: FC<Props> = ({ report }) => {
  return (
    <>
      <div className="bg-cyan-100 rounded">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-xl text-left mt-8 mx-10">{report.title}</h1>
          <p className="text-sm text-center p-4">{report.date}</p>
        </div>
        <div className="p-4">
          <div className="bg-white min-h-screen rounded">
            <div className="w-full flex justify-end items-center">
              <p className="text-sm px-3 py-1 bg-cyan-100 rounded-full mx-2 my-2 hover:bg-cyan-200 cursor-pointer">
                <Link to={`/category/${report.category.id}`}>
                  {report.category.name}
                </Link>
              </p>
            </div>
            {/* markdown */}
            <div className="p-4 min-h-screen">
              {report.body}
            </div>
            <div className="flex justify-start items-center flex-wrap bg-white rounded">
              {report.tags.map((tag) => (
                <Link
                  key={tag.id}
                  to={'/tag/' + tag.id}
                >
                  <p className='text-sm bg-gray-200 inline-block rounded-full px-3 py-1 cursor-pointer ml-2 my-2 hover:underline'>
                    {tag.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Report;