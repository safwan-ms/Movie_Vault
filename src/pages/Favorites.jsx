import React from "react";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard.jsx";

const Favorites = () => {
  const { favorites } = useMovieContext();

  return (
    <div>
      {favorites.length > 0 ? (
        <div>
          <div className="py-5 m-10 bg-black hover:glass rounded-2xl">
            <h2 className="text-4xl font-bold text-center text-red-700">
              Your Favorites
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-10 movies-grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 place-items-center">
            {favorites.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-40 m-10 bg-black glass rounded-2xl">
          <h2 className="m-4 text-4xl font-bold text-red-700">
            No Favorite Movies Yet
          </h2>
          <p className="font-bold">
            Start adding movies to your favorites and they will appear here.
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
