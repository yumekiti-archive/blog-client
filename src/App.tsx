import { FC } from 'react';

import Header from './components/Header';


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

      </div>
    </>
  );
}

export default App;