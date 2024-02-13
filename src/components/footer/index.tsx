import { Link } from 'react-router-dom';
import { footer_links } from './constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-wrap md:flex-row justify-between px-6 text-sm mt-16 pt-4 border-t border-lightgray gap-y-2">
      {footer_links.map((link) => (
        <Link key={link.name} to={link.url} className="hover:underline">
          {link.name}
        </Link>
      ))}
      <div className="">
        Copyright <span className="text-primary">Pelis</span>Nation &copy; {currentYear}
      </div>
    </div>
  );
};

export default Footer;
