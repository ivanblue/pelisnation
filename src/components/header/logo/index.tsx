import { Link } from 'react-router-dom';
import LogoSVG from '/pelisnation-ico.svg';

type LogoProps = {
  onClick?: () => void;
};

const Logo = ({ onClick }: LogoProps) => {
  return (
    <Link to="/" onClick={onClick}>
      <div className="flex font-bold">
        <img src={LogoSVG} className="h-[24px] w-[24px] mr-1" />
        <span className="text-primary">Pelis</span>
        <span className="text-white">Nation</span>
      </div>
    </Link>
  );
};

export default Logo;
