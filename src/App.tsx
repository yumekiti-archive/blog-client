import { FC } from 'react';

import Header from './components/Header';
import Category from './components/Category';

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
      <div className='w-3/12 mx-auto'>
        <Category
          categorys={[
            { name: 'ここにカテゴリーが入ります。(999)', path: '/category/infra' },
            { name: 'ここにカテゴリーが入ります。(999)', path: '/category/infra' },
            { name: 'ここにカテゴリーが入ります。(999)', path: '/category/infra' },
            { name: 'ここにカテゴリーが入ります。(999)', path: '/category/infra' },
          ]}
        />
      </div>
    </>
  );
}

export default App;