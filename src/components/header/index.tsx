import { Link } from 'react-router-dom';
import Logo from './logo';
import { header_links } from './constants';
import UserButton from './user-button';

const Header = () => {
  return (
    <div className="flex justify-between px-6 pb-5 border-b border-lightgray">
      <nav className="flex gap-10">
        <Logo />
        {header_links.map((link) => (
          <Link key={link.name} to={link.url} className="hover:underline">
            {link.name}
          </Link>
        ))}
      </nav>
      <UserButton />
    </div>
  );
};

export default Header;
