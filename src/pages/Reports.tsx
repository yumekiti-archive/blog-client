import { FC } from "react";

import { getReportsMock } from "../libs/mocks/reports";
import { getCategoriesMock } from "../libs/mocks/categories";
import { getIntroduceMock } from "../libs/mocks/introduce";


const Reports: FC = () => {
  return (
    <>
      <div className='container mx-auto flex flex-wrap'>
        <div className='w-full lg:w-3/4 mx-auto'>
          <div className='my-12 mx-6'>
            <Reports
              reports={getReportsMock().reports}
              groupNum={4}
            />
          </div>
        </div>
        <div className='w-full lg:w-1/4 mx-auto'>
          <div className='my-12 mx-6'>
            <Introduce
              introduce={getIntroduceMock().introduce}
            />
          </div>
          <div className='my-12 mx-6'>
            <Categories
              categories={getCategoriesMock().categories}
            />
          </div>
          <div className='my-12 mx-6'>
            <Tags
              tags={getTagsMock().tags}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Reports;