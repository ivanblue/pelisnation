import { Play } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader } from '@/components/ui/dialog';
import { MovieDetails } from '@/models/movie.models';

type MovieDialogProps = {
  isOpen: boolean;
  setOpenMovieDialog: React.Dispatch<React.SetStateAction<boolean>>;
  movieDetails: MovieDetails | undefined;
};

const MovieDialog = ({ isOpen, setOpenMovieDialog, movieDetails }: MovieDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setOpenMovieDialog}>
      <DialogContent className="max-w-[800px] bg-secondary border-none">
        <DialogHeader>
          <DialogDescription className="flex text-white">
            <div className="w-[35%]">
              <img src={movieDetails?.Poster} className="w-full" />
            </div>
            <div className="w-[65%] px-6">
              <h2 className="text-xl font-bold">{movieDetails?.Title}</h2>
              <div className="flex gap-4 pt-1 text-white/40 text-xs">
                <span>{movieDetails?.Genre}</span>
                <span>{movieDetails?.Runtime}</span>
                <span>{movieDetails?.Year}</span>
              </div>
              <div className="text-white/60 pt-5 text-md">{movieDetails?.Plot}</div>
              <div className="w-20 h-[2px] bg-primary mt-7"></div>
              <div className="grid grid-cols-5 gap-1 text-white/60 py-6 text-sm">
                <div className="col-span-1 text-white/40">Director</div>
                <div className="col-span-4">{movieDetails?.Director}</div>
                <div className="col-span-1 text-white/40">Producer</div>
                <div className="col-span-4">{movieDetails?.Production}</div>
                <div className="col-span-1 text-white/40">Writer</div>
                <div className="col-span-4">{movieDetails?.Writer}</div>
                <div className="col-span-1 text-white/40">Starring</div>
                <div className="col-span-4">{movieDetails?.Actors}</div>
                <div className="col-span-1 text-white/40">Rating</div>
                <div className="col-span-4">{movieDetails?.imdbRating}</div>
              </div>
              <Button className="flex gap-2 bg-primary hover:bg-primary/80 text-lightgray mt-5">
                Watch Trailer <Play size={18} />
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default MovieDialog;
