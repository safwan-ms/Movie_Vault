import React from "react";
import { FaHeart } from "react-icons/fa";

const MovieCard = ({ movie }) => {
  return (
    <div className="hover:glass hover:-translate-y-2  ease-in-out duration-100 bg-black rounded-2xl w-[300px] sm:w-[200px] md:w-[200px] lg:w-[250px] lg:h-[500px] relative  ">
      <div className="card   ">
        <figure className="w-full">
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
        </figure>
        <div className="card-body px-5">
          <h2 className="card-title text-xs">{movie.title}</h2>
          <p className="text-xs">{movie.release_date.split("-")[0]}</p>
          <div className="justify-end card-actions">
            <button className="btn btn-white absolute top-2 right-2 ">
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
