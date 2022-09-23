import { FC } from 'react';

import Header from './components/Header';
import Tags from './components/Tags';

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
    </>
  );
}

export default App;