import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  header: {
    title: string;
    links: {
      name: string;
      path: string;
    }[];
  };
}

const Header: FC<Props> = ({ header }) => {
  return (
    <header>
      <div className="flex w-full items-center bg-white">
        <Link to='/' className='p-4'>
          {header.title}
        </Link>
        <nav className='flex-grow flex justify-end'>
          {header.links.map((link) => (
            <Link
              key={link.path}
              to={`/${link.path}`}
              className='p-4 hover:bg-gray-100'
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header;