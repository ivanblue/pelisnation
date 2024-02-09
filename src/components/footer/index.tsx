import { Link } from 'react-router-dom';
import { footer_links } from './constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex justify-between text-sm mt-16 px-6 pt-4 border-t border-lightgray">
      {footer_links.map((link) => (
        <Link key={link.name} to={link.url} className="hover:underline">
          {link.name}
        </Link>
      ))}
      <div>
        Copyright <span className="text-primary">Pelis</span>Nation &copy; {currentYear}
      </div>
    </div>
  );
};

export default Footer;
