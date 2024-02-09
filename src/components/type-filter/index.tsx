import { cn } from '@/lib/utils';
import { movieTypes } from './constants';

type TypeFilterProps = {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
};

const TypeFilter = ({ type, setType }: TypeFilterProps) => {
  return (
    <div className="flex gap-2">
      {movieTypes.map((movieType) => (
        <div
          key={movieType.value}
          className={cn(
            'rounded-full bg-lightgray text-white/40 hover:bg-primary hover:text-secondary px-3 pt-[5px] cursor-pointer transition-colors text-sm',
            movieType.value === type ? 'bg-primary text-secondary' : 'bg-lightgray text-white/40'
          )}
          onClick={() => setType(movieType.value)}
        >
          {movieType.name}
        </div>
      ))}
    </div>
  );
};

export default TypeFilter;
