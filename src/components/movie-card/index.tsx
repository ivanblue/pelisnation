type MovieCardProps = {
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
  onClick: () => void;
};

const MovieCard = ({ Title, Year, Type, Poster, onClick }: MovieCardProps) => {
  return (
    <article className="flex flex-col cursor-pointer group" onClick={onClick}>
      <img
        src={Poster}
        alt={Title}
        className="rounded-xl w-full lg:h-[430px] transition-transform duration-300 group-hover:translate-y-[-3px]"
      />
      <div className="flex justify-between pt-2">
        <span className="text-md sm:text-lg font-bold">{Title}</span>
      </div>
      <div className="flex gap-2 text-xs sm:text-sm text-white/30">
        <span>{Type}</span>
        <span>{Year}</span>
      </div>
    </article>
  );
};

export default MovieCard;
