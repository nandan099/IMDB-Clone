import React, { useMemo } from "react";

function MovieCard({
  movieObj,
  handleAddtoWatchlist,
  handleRemoveFromWatchlist,
  watchlist = [],
}) {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`;

  const isInWatchlist = useMemo(() => {
    return watchlist?.some((movie) => movie.id === movieObj.id);
  }, [watchlist, movieObj.id]);

  const handleClick = () => {
    if (isInWatchlist) {
      handleRemoveFromWatchlist(movieObj);
    } else {
      handleAddtoWatchlist(movieObj);
    }
  };

  return (
    <div className="group relative h-[420px] w-[260px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer bg-gray-900">
      <img
        src={imageUrl}
        alt={movieObj.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>

      <div className="absolute bottom-0 p-4 text-white w-full">
        <h2 className="text-lg font-semibold truncate">{movieObj.title}</h2>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm bg-yellow-100 text-black px-2 py-1 rounded-md font-bold ">
            ⭐ {movieObj.vote_average?.toFixed(1)}
          </span>

          <button
            onClick={handleClick}
            className={`h-9 w-9 flex items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 ${
              isInWatchlist
                ? "bg-red-500/80 hover:bg-red-600"
                : "bg-emerald-500/80 hover:bg-emerald-600"
            }`}
          >
            <i
              className={`fa-solid ${
                isInWatchlist ? "fa-xmark" : "fa-plus"
              } text-white`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
