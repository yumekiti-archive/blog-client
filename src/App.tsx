import { FC } from 'react';

import Header from './components/Header';
import Introduce from './components/Introduce';

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
        <Introduce
          name='ゆめきち'
          body='専門学校生です。\n主にインフラを勉強しています。'
          links={[
            { name: 'Twitter', path: 'https://twitter.com/yumekiti1204', img: 'https://img.icons8.com/ios-filled/50/000000/twitter.png' },
            { name: 'GitHub', path: 'https://github.com/yumekiti', img: 'https://img.icons8.com/ios-filled/50/000000/github.png' }
          ]}
        />
      </div>
    </>
  );
}

export default App;