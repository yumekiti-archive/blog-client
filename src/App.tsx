import { FC } from 'react';

import Header from './components/Header';
import Knowledge from './components/Knowledge';

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
        <Knowledge
          knowledge={[
            {img: 'https://img.icons8.com/ios-filled/50/000000/twitter.png', title: 'title', subtitle: 'subtitle', path: 'https://twitter.com/yumekiti1204', date: '2021/01/01'},
            {img: 'https://img.icons8.com/ios-filled/50/000000/twitter.png', title: 'title', subtitle: 'subtitle', path: 'https://twitter.com/yumekiti1204', date: '2021/01/01'},
            {img: 'https://img.icons8.com/ios-filled/50/000000/twitter.png', title: 'title', subtitle: 'subtitle', path: 'https://twitter.com/yumekiti1204', date: '2021/01/01'},
            {img: 'https://img.icons8.com/ios-filled/50/000000/twitter.png', title: 'title', subtitle: 'subtitle', path: 'https://twitter.com/yumekiti1204', date: '2021/01/01'},
            {img: 'https://img.icons8.com/ios-filled/50/000000/twitter.png', title: 'title', subtitle: 'subtitle', path: 'https://twitter.com/yumekiti1204', date: '2021/01/01'},
            {img: 'https://img.icons8.com/ios-filled/50/000000/twitter.png', title: 'title', subtitle: 'subtitle', path: 'https://twitter.com/yumekiti1204', date: '2021/01/01'},
            {img: 'https://img.icons8.com/ios-filled/50/000000/twitter.png', title: 'title', subtitle: 'subtitle', path: 'https://twitter.com/yumekiti1204', date: '2021/01/01'},
            {img: 'https://img.icons8.com/ios-filled/50/000000/twitter.png', title: 'title', subtitle: 'subtitle', path: 'https://twitter.com/yumekiti1204', date: '2021/01/01'},
          ]}
        />
      </div>
    </>
  );
}

export default App;