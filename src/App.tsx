import { FC } from 'react';

import Header from './components/Header';
import Home from './pages/Home';

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
      <Home />
    </>
  );
}

export default App;