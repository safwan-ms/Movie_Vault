import React from "react";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard.jsx";
const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="grid grid-cols-1 gap-6 mt-10 movies-grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorite and they will appear here.</p>
    </div>
  );
};

export default Favorites;
