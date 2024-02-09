import { useCallback, useEffect, useState } from 'react';

import { MovieDetails, MovieSearchResult } from '@/models/movie.models';
import { OMDB_URL, OMDB_API_KEY } from '@/config/config';

const useOpenMovieDB = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const [movieSearch, setMovieSearch] = useState<MovieSearchResult>();
  const [movieDetails, setMovieDetails] = useState<MovieDetails>();

  const [search, setSearch] = useState<string | null>(null);
  const [year, setYear] = useState<string>('all');
  const [type, setType] = useState<string>('movie');

  const [selectedMovieID, setSelectedMovieID] = useState<string | null>(null);

  const getMoviesBySearch = useCallback(async () => {
    setLoading(true);

    if (!OMDB_URL) {
      throw new Error('OMDB_URL is not defined. Please provide the URL.');
    }

    if (!OMDB_API_KEY) {
      throw new Error('OMDB_API_KEY is missing. Please provide an API key.');
    }

    if (!search || search === '') {
      throw new Error('Search query cannot be empty.');
    }

    const queryParams = new URLSearchParams();

    queryParams.append('apikey', OMDB_API_KEY);
    queryParams.append('s', search);

    if (type !== 'all') queryParams.append('type', type);
    if (year !== 'all') queryParams.append('y', year);

    try {
      const response = await fetch(`${OMDB_URL}?${queryParams.toString()}`);
      const data: MovieSearchResult = await response.json();

      setMovieSearch(data);
    } catch (error) {
      console.error('Error fetching movie search data:', error);
    } finally {
      setLoading(false);
    }
  }, [search, type, year]);

  const getMovieById = useCallback(async () => {
    if (!OMDB_URL) {
      throw new Error('OMDB_URL is not defined. Please provide the URL.');
    }

    if (!OMDB_API_KEY) {
      throw new Error('OMDB_API_KEY is missing. Please provide an API key.');
    }

    if (!selectedMovieID) {
      throw new Error('ID cannot be empty.');
    }

    const queryParams = new URLSearchParams();

    queryParams.append('apikey', OMDB_API_KEY);
    queryParams.append('i', selectedMovieID);

    try {
      const response = await fetch(`${OMDB_URL}?${queryParams.toString()}`);
      const data: MovieDetails = await response.json();

      setMovieDetails(data);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  }, [selectedMovieID]);

  useEffect(() => {
    if (search) getMoviesBySearch();
  }, [search, type, year, getMoviesBySearch]);

  useEffect(() => {
    if (selectedMovieID) getMovieById();
  }, [getMovieById, selectedMovieID]);

  return {
    loading,
    movieSearch,
    movieDetails,
    getMoviesBySearch,
    getMovieById,
    search,
    setSearch,
    year,
    setYear,
    type,
    setType,
    selectedMovieID,
    setSelectedMovieID,
  };
};

export default useOpenMovieDB;
