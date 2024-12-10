import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard.jsx";
import { getPopularMovies, searchMovies } from "../services/api.js";
const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    try {
      setLoading(true);
      const searchResult = await searchMovies(searchQuery);
      setMovies(searchResult);
      setErrorMsg(null);
    } catch (err) {
      setErrorMsg(err);
      console.log("Failed to search movies");
    } finally {
      setLoading(false);
    }
    setSearchQuery("");
  };
  const loadPopularMovies = async () => {
    try {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    } catch (e) {
      errorMsg(e);
      console.log("Error Loading Movie ");
    }
  };
  useEffect(() => {
    loadPopularMovies();
  }, []);
  return (
    <div className="home">
      <div>
        <form
          onSubmit={handleSearch}
          className="flex justify-center mt-7 mx-5 "
        >
          <input
            type="text"
            placeholder="Type here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full input-sm md:input-md max-w-xs mr-3 rounded-lg input input-bordered input-ghost"
          />

          <button className="btn btn-outline btn-warning btn-sm md:btn-md">
            Search
          </button>
        </form>
      </div>
      {loading ? (
        <div className="flex justify-center mt-48">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 mt-10 movies-grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
