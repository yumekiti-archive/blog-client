import { FC } from "react";

import { getReportsMock } from "../libs/mocks/reports";
import { getCategoriesMock } from "../libs/mocks/categories";
import { getIntroduceMock } from "../libs/mocks/introduce";
import { getTagsMock } from "../libs/mocks/tags";

import Reports from "../components/Reports";
import Introduce from "../components/Introduce";
import Categories from "../components/Categories";
import Tags from "../components/Tags";
import Search from "../components/Search";

const ReportList: FC = () => {
  return (
    <>
      <div className='container mx-auto flex flex-wrap'>
        <div className='w-full lg:w-3/4 mx-auto'>
          <div className='my-12 mx-6'>
            <Reports
              reports={getReportsMock()}
              groupNum={8}
            />
          </div>
        </div>
        <div className='w-full lg:w-1/4 mx-auto'>
          <div className='my-12 mx-6'>
            <Introduce
              introduce={getIntroduceMock()}
            />
          </div>
          <div className='my-12 mx-6'>
            <Search />
          </div>
          <div className='my-12 mx-6'>
            <Categories
              categories={getCategoriesMock()}
            />
          </div>
          <div className='my-12 mx-6'>
            <Tags
              tags={getTagsMock()}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ReportList;