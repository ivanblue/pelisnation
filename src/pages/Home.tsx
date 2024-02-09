import { useState } from 'react';

import MovieCard from '@/components/movie-card';
import MovieDialog from '@/components/movie-dialog';
import Searchbar from '@/components/search-bar';
import TypeFilter from '@/components/type-filter';
import useOpenMovieDB from '@/hooks/useOpenMovieDB';
import YearFilter from '@/components/year-filter';

const HomePage = () => {
  const { loading, movieSearch, search, setSearch, year, setYear, type, setType, movieDetails, setSelectedMovieID } =
    useOpenMovieDB();
  const [openMovieDialog, setOpenMovieDialog] = useState(false);

  return (
    <div className="">
      <h1 className="text-4xl font-bold mt-14">Search for Movies{search && `: ${search}`}</h1>

      <section className="flex justify-between my-4">
        <TypeFilter type={type} setType={setType} />
        <div className="flex flex-row gap-4">
          <Searchbar setSearch={setSearch} />
          <YearFilter year={year} setYear={setYear} />
        </div>
      </section>

      <section className="grid grid-cols-4 gap-6 pt-10">
        {loading ? (
          <p>Loading...</p>
        ) : (
          movieSearch?.Response === 'True' &&
          movieSearch?.Search.length &&
          movieSearch?.Search.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              {...movie}
              onClick={() => {
                setSelectedMovieID(movie.imdbID);
                setOpenMovieDialog(true);
              }}
            />
          ))
        )}
        {movieSearch?.Response === 'False' && movieSearch.Error}
      </section>

      <MovieDialog isOpen={openMovieDialog} setOpenMovieDialog={setOpenMovieDialog} movieDetails={movieDetails} />
    </div>
  );
};

export default HomePage;
