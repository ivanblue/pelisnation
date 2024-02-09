import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex font-bold">
        <span className="text-primary">Pelis</span>
        <span className="text-white">Nation</span>
      </div>
    </Link>
  );
};

export default Logo;
