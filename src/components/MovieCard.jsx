import React from "react";

function MovieCard({
  poster_path,
  handleAddtoWatchlist,
  movieObj,
  handleRemoveFromWatchlist,
  watchlist = [],
}) {
  function doesContain(movieObj) {
    if (!Array.isArray(watchlist)) return false;
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchlist(movieObj)}
          className="flex m-4 justify-center bg-gray-900/60 text-red-500 h-8 w-8 items-center rounded-lg"
        >
          <i className="fa-solid fa-xmark" />
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchlist(movieObj)}
          className="flex m-4 justify-center bg-gray-900/60 text-emerald-300 h-8 w-8 items-center rounded-lg"
        >
          <i className="fa-solid fa-plus" />
        </div>
      )}
    </div>
  );
}

export default MovieCard;