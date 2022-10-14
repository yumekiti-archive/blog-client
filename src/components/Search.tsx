import { FC, useState } from 'react';

const Search: FC = () => {
  const [search, setSearch] = useState('');

  return (
    <div className='card-color rounded'>
      <h1 className='text-xl text-center py-4'>
        <i className='las la-search w-6 h-6 text-4xl text-center'></i>検索
      </h1>
      <div className='flex justify-center pb-4'>
        <input
          type='text'
          className='w-3/4 border-2 rounded py-2 px-4 text-gray-700 leading-tight focus:border-[#094067] focus:border-2'
          placeholder='キーワードを入力'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              // /serch 検索ページに遷移
              // /serch?search=検索ワード
              window.location.href = '/search?search=' + search;
            }
          }}
        />
      </div>
    </div>
  );
};

export default Search;
