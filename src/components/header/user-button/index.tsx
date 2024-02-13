import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

type UserButtonProps = {
  onClick?: () => void;
};

const UserButton = ({ onClick }: UserButtonProps) => {
  return (
    <Link to="/userprofile" onClick={onClick} className="flex items-center gap-2">
      <User className="bg-lightgray rounded-full p-1 h-6 w-6 peer" />
      <span className="peer-hover:underline hover:underline">IvanBlue</span>
    </Link>
  );
};

export default UserButton;
