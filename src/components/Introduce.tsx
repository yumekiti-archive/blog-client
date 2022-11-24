import { FC } from 'react';
import Introduce from '../libs/interfaces/introduce';
import { getIntroduceMock } from '../libs/mocks/introduce';

const IntroduceComponent: FC = () => {
  const introduce: Introduce = getIntroduceMock();

  return (
    <div className='card-color rounded'>
      <h1 className='text-xl text-center py-4'>
        <i className='las la-user'></i>
        <span className='mx-2'>自己紹介</span>
      </h1>
      <img
        src='https://pbs.twimg.com/profile_images/1492151996857860097/MRnAqw5h_400x400.png'
        alt='アイコン'
        className='w-32 h-32 mx-auto rounded-full object-cover'
      />
      <p className='text-lg text-center'>{introduce.name}</p>
      <p className='text-center text-sm p-4'>
        {introduce.body.split('\n').map((line) => (
          <span key={line}>
            {line}
            <br />
          </span>
        ))}
      </p>
      <ul className='flex items-center justify-end'>
        {introduce.links.map((link, index) => (
          <a href={link.path} target='_blank' rel='noreferrer' key={index}>
            <li className='mx-2 hover:opacity-50'>
              <div className='flex justify-center items-center'>
                <i className={`${link.icon} text-4xl`}></i>
              </div>
              <p className='text-xs text-center'>{link.name}</p>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default IntroduceComponent;
