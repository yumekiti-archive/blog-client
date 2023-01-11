import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search: FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  return (
    <div className='card-color rounded'>
      <h1 className='text-xl text-center py-4'>
        <div className='flex justify-center items-center'>
          <i className='las la-search'></i>
          <span className='mx-2'>検索</span>
        </div>
      </h1>
      <div className='flex justify-center pb-4'>
        <input
          type='text'
          className='w-3/4 border-2 rounded py-2 px-4 text-gray-700 leading-tight focus:border-[#094067] focus:border-2'
          placeholder='キーワードを入力'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              navigate(`/?search=${search}`);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Search;
