import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  links: {
    name: string;
    path: string;
  }[];
}

const Header: FC<Props> = ({ title, links }) => {
  return (
    <header>
      <div className="flex w-full items-center bg-white">
        <Link to='/' className='p-4'>
          {title}
        </Link>
        <nav className='flex-grow flex justify-end'>
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className='p-4'
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