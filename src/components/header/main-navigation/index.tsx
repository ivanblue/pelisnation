import { Link } from 'react-router-dom';
import { header_links } from '../constants';

const MainNavigation = () => {
  return (
    <nav className="hidden md:flex gap-10">
      {header_links.map((link) => (
        <Link key={link.name} to={link.url} className="hover:underline">
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default MainNavigation;
