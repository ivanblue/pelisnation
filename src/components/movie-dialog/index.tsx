import { Play } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { MovieDetails } from '@/models/movie.models';

type MovieDialogProps = {
  isOpen: boolean;
  setOpenMovieDialog: React.Dispatch<React.SetStateAction<boolean>>;
  movieDetails: MovieDetails | undefined;
};

const MovieDialog = ({ isOpen, setOpenMovieDialog, movieDetails }: MovieDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setOpenMovieDialog}>
      <DialogTrigger></DialogTrigger>
      <DialogContent className="max-w-[800px] bg-secondary border-none overflow-y-scroll md:overflow-auto max-h-screen">
        <DialogHeader>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="flex flex-col md:flex-row text-white">
          <div className="w-full md:w-[35%]">
            <img src={movieDetails?.Poster} className="w-full rounded-md" />
          </div>
          <div className="w-full md:w-[65%] px-0 md:px-6">
            <h2 className="text-xl font-bold text-left pt-4 md:py-0">{movieDetails?.Title}</h2>
            <div className="flex flex-row text-center md:text-left gap-4 pt-2 text-white/40 text-xs">
              <span className="text-left">{movieDetails?.Genre}</span>
              <span className="whitespace-nowrap">{movieDetails?.Runtime}</span>
              <span>{movieDetails?.Year}</span>
            </div>
            <div className="text-white/60 pt-5 text-md text-left">{movieDetails?.Plot}</div>
            <div className="w-20 h-[2px] bg-primary mt-7"></div>
            <div className="grid grid-cols-5 gap-1 text-white/60 py-6 text-sm">
              <div className="col-span-2 md:col-span-1 text-white/40 text-left">Director</div>
              <div className="col-span-3 md:col-span-4 text-left">{movieDetails?.Director}</div>
              <div className="col-span-2 md:col-span-1 text-white/40 text-left">Awards</div>
              <div className="col-span-3 md:col-span-4 text-left">{movieDetails?.Awards}</div>
              <div className="col-span-2 md:col-span-1 text-white/40 text-left">Writer</div>
              <div className="col-span-3 md:col-span-4 text-left">{movieDetails?.Writer}</div>
              <div className="col-span-2 md:col-span-1 text-white/40 text-left">Actors</div>
              <div className="col-span-3 md:col-span-4 text-left">{movieDetails?.Actors}</div>
              <div className="col-span-2 md:col-span-1 text-white/40 text-left">Rating</div>
              <div className="col-span-3 md:col-span-4 text-left">{movieDetails?.imdbRating}</div>
            </div>
            <Button
              className="flex gap-2 bg-primary hover:bg-primary/80 text-lightgray mt-5"
              onClick={() => setOpenMovieDialog(false)}
            >
              Watch Trailer <Play size={18} />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MovieDialog;
