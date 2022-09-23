import { FC } from 'react';

import Header from './components/Header';
import Reports from './components/Reports';

const App: FC = () => {
  return (
    <>
      <Header
        title='ゆめきちのブログっぽいなにか'
        links={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' }
        ]}
      />
      <div className='w-8/12 mx-auto'>
        <Reports
          reports={[
            {
              img: 'https://source.unsplash.com/random/100x100',
              title: '記事タイトル記事タイトル記事タイトルほasdasdげほげほげほげほげほげほげ',
              category: 'カテゴリー',
              path: '/report/1',
              date: '2021/10/10',
            },
            {
              img: 'https://source.unsplash.com/random/100x100',
              title: '記事タイトル記事タイトル記事タイトルほげほげほげほげほげほげほげ',
              category: 'カテゴリー',
              path: '/report/1',
              date: '2021/10/10',
            },
            {
              img: 'https://source.unsplash.com/random/100x100',
              title: '記事タイトル記事タイトル記事タイトルほげほげほげほげほげほげほげ',
              category: 'カテゴリー',
              path: '/report/1',
              date: '2021/10/10',
            },
            {
              img: 'https://source.unsplash.com/random/100x100',
              title: '記事タイトル記事タイトル記事タイトルほげほげほげほげほげほげほげ',
              category: 'カテゴリー',
              path: '/report/1',
              date: '2021/10/10',
            },
            {
              img: 'https://source.unsplash.com/random/100x100',
              title: '記事タイトル記事タイトル記事タイトルほげほげほげほげほげほげほげ',
              category: 'カテゴリー',
              path: '/report/1',
              date: '2021/10/10',
            },
            {
              img: 'https://source.unsplash.com/random/100x100',
              title: '記事タイトル記事タイトル記事タイトルほげasdasdasdほげほげほげほげほげほげ',
              category: 'カテゴリー',
              path: '/report/1',
              date: '2021/10/10',
            },
            {
              img: 'https://source.unsplash.com/random/100x100',
              title: '記事タイトル記事タイトル記事タイトルほげほげほげほげほげほげほげ',
              category: 'カテゴリー',
              path: '/report/1',
              date: '2021/10/10',
            },
          ]}
        />
      </div>
    </>
  );
}

export default App;