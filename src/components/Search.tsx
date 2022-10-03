import { FC, useState } from 'react';

const Search: FC = () => {
  const [search, setSearch] = useState('');

  return (
    <div className='bg-white rounded'>
      <h1 className='text-xl text-center py-4'>検索</h1>
      <div className='flex justify-center pb-4'>
        <input
          type='text'
          className='w-3/4 border-2 border-gray-300 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-cyan-50'
          placeholder='キーワードを入力'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              console.log(search);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Search;
