import { FC } from 'react';

import Introduce from '../components/Introduce';
import Categories from '../components/Categories';
import Tags from '../components/Tags';
import Reports from '../components/Reports';
import Knowledge from '../components/Knowledge';

const Home: FC = () => {
  return (
    <>
      <div className='container mx-auto flex flex-wrap'>
        <div className='w-full lg:w-3/4 mx-auto'>
          <div className='my-12 mx-6'>
            <Reports
              reports={[
                {
                  id: 1,
                  img: 'https://source.unsplash.com/random/100x100',
                  title: '記事タイトル記事タイトル記事タイトルほげほげほげほげほげほげほげ',
                  category: 'カテゴリー',
                  date: '2021/10/10',
                },
                {
                  id: 2,
                  img: 'https://source.unsplash.com/random/100x100',
                  title: '記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトルほげほげほげほげほげほげほげ',
                  category: 'カテゴリー',
                  date: '2021/10/10',
                },
                {
                  id: 3,
                  img: 'https://source.unsplash.com/random/100x100',
                  title: '記事タイトル記事タイトル記事タイトルほげほげほげほげほげほげほげ',
                  category: 'カテゴリー',
                  date: '2021/10/10',
                },
                {
                  id: 4,
                  img: 'https://source.unsplash.com/random/100x100',
                  title: '記事タイトル記事タイトル記事タイトルほげほげほげほげほげほげほげ',
                  category: 'カテゴリー',
                  date: '2021/10/10',
                },
                {
                  id: 5,
                  img: 'https://source.unsplash.com/random/100x100',
                  title: '記事タイトル記事タイトル記事タイトルほげほげほげほげほげほげほげ',
                  category: 'カテゴリー',
                  date: '2021/10/10',
                },
              ]}
            />
          </div>
          <div className='my-12 mx-6'>
            <Knowledge
              knowledge={[
                {id: 1, img: 'https://img.icons8.com/ios-filled/50/000000/twitter.png', title: 'title', subtitle: 'subtitle', date: '2021/01/01'},
                {id: 2, img: 'https://img.icons8.com/ios-filled/50/000000/twitter.png', title: 'title', subtitle: 'subtitle', date: '2021/01/01'},
                {id: 3, img: 'https://img.icons8.com/ios-filled/50/000000/twitter.png', title: 'title', subtitle: 'subtitle', date: '2021/01/01'},
                {id: 4, img: 'https://img.icons8.com/ios-filled/50/000000/twitter.png', title: 'title', subtitle: 'subtitle', date: '2021/01/01'},
                {id: 5, img: 'https://img.icons8.com/ios-filled/50/000000/twitter.png', title: 'title', subtitle: 'subtitle', date: '2021/01/01'},
                {id: 6, img: 'https://img.icons8.com/ios-filled/50/000000/twitter.png', title: 'title', subtitle: 'subtitle', date: '2021/01/01'},
              ]}
            />
          </div>
        </div>
        <div className='w-full lg:w-1/4 mx-auto'>
          <div className='my-12 mx-6'>
            <Introduce
              name='ゆめきち'
              body='専門学校生です。\n主にインフラを勉強しています。'
              links={[
                { name: 'Twitter', path: 'https://twitter.com/yumekiti1204', img: 'https://img.icons8.com/ios-filled/50/000000/twitter.png' },
                { name: 'GitHub', path: 'https://github.com/yumekiti', img: 'https://img.icons8.com/ios-filled/50/000000/github.png' }
              ]}
            />
          </div>
          <div className='my-12 mx-6'>
            <Categories
              categorys={[
                { id: 1, name: 'ここにカテゴリーが入ります。(999)' },
                { id: 2, name: 'ここにカテゴリーが入ります。(999)' },
                { id: 3, name: 'ここにカテゴリーが入ります。(999)' },
              ]}
            />
          </div>
          <div className='my-12 mx-6'>
            <Tags
              tags={[
                { name: 'React', path: '/tags/react' },
                { name: 'TypeScript', path: '/tags/typescript' },
                { name: 'Next.js', path: '/tags/next.js' },
                { name: 'Tailwind CSS', path: '/tags/tailwind-css' },
                { name: 'Vercel', path: '/tags/vercel' },
                { name: 'GitHub', path: '/tags/github' }
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;