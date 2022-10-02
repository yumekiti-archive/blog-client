import { FC } from "react";

import { getCategoriesMock } from "../libs/mocks/categories";
import { getIntroduceMock } from "../libs/mocks/introduce";
import { getTagsMock } from "../libs/mocks/tags";

import Introduce from "../components/Introduce";
import Categories from "../components/Categories";
import Tags from "../components/Tags";
import Search from "../components/Search";
import Report from "../components/Report";

const ReportList: FC = () => {
  return (
    <>
      <div className='container mx-auto flex flex-wrap'>
        <div className='w-full lg:w-3/4 mx-auto'>
          <div className='my-12 mx-6'>
            <Report
              report={{
                id: 1,
                img: 'https://source.unsplash.com/1600x900/?nature,water',
                title: "たいとるだよ",
                date: "2022/12/12",
                body: 'body',
                category: {
                  id: 1,
                  name: "this is category",
                },
                tags: [
                  {id: 1, name: "hoge"},
                  {id: 2, name: "hoge"},
                ]
              }}
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