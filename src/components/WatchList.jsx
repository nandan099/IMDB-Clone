import React, { useState, useMemo } from "react";
import genreids from "../utility/genre";

function WatchList({
  watchlist = [],
  setWatchlist,
  handleRemoveFromWatchlist,
}) {
  const [search, setSearch] = useState("");
  const [currGenre, setCurrGenre] = useState("All Genres");

  /* ----------- Genre List ----------- */
  const genreList = useMemo(() => {
    const temp = watchlist.map(
      (movie) => genreids[movie.genre_ids?.[0]]
    );
    const uniqueGenres = new Set(temp.filter(Boolean));
    return ["All Genres", ...Array.from(uniqueGenres)];
  }, [watchlist]);

  /* ----------- Sorting ----------- */
  const sortIncreasing = () => {
    const sorted = [...watchlist].sort(
      (a, b) => a.vote_average - b.vote_average
    );
    setWatchlist(sorted);
  };

  const sortDecreasing = () => {
    const sorted = [...watchlist].sort(
      (a, b) => b.vote_average - a.vote_average
    );
    setWatchlist(sorted);
  };

  /* ----------- Filtered Movies ----------- */
  const filteredMovies = watchlist
    .filter((movie) =>
      currGenre === "All Genres"
        ? true
        : genreids[movie.genre_ids?.[0]] === currGenre
    )
    .filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      {/* ---------- Genre Filter ---------- */}
      <div className="flex justify-center flex-wrap gap-4 mb-8">
        {genreList.map((genre) => (
          <button
            key={genre}
            onClick={() => setCurrGenre(genre)}
            className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
              currGenre === genre
                ? "bg-blue-600 text-white shadow-md"
                : "bg-blue-100 text-blue-700 hover:bg-blue-200"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>


      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search movies..."
          className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>


      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="w-full text-gray-700 text-center">
          
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="py-4">Movie</th>

              <th className="py-4">
                <div className="flex justify-center items-center gap-2">
                  <button onClick={sortIncreasing}>
                    <i className="fa-solid fa-arrow-up"></i>
                  </button>
                  <span>Rating</span>
                  <button onClick={sortDecreasing}>
                    <i className="fa-solid fa-arrow-down"></i>
                  </button>
                </div>
              </th>

              <th className="py-4">Popularity</th>
              <th className="py-4">Genre</th>
              <th className="py-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredMovies.length === 0 ? (
              <tr>
                <td colSpan="5" className="py-10 text-gray-400">
                  No movies found.
                </td>
              </tr>
            ) : (
              filteredMovies.map((movie) => (
                <tr
                  key={movie.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="flex items-center gap-4 px-6 py-4 text-left">
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                      alt={movie.title}
                      className="h-20 w-14 object-cover rounded-md"
                    />
                    <span className="font-semibold">
                      {movie.title}
                    </span>
                  </td>

                  <td>{movie.vote_average}</td>
                  <td>{movie.popularity}</td>
                  <td>{genreids[movie.genre_ids?.[0]]}</td>

                  <td>
                    <button
                      onClick={() =>
                        handleRemoveFromWatchlist(movie)
                      }
                      className="text-red-500 hover:text-red-700 font-medium transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default WatchList;
