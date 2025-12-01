import React, { useState } from "react";
import genreids from "../utility/genre";

function WatchList({ watchlist = [], setWatchlist, handleRemoveFromWatchlist }) {
  const [search, setSearch] = useState("");
  const [currGenre, setCurrGenre] = useState("All Genres");

  const genreList = (() => {
    const temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids?.[0]];
    });
    const uniqueGenres = new Set(temp.filter(Boolean));
    return ["All Genres", ...Array.from(uniqueGenres)];
  })();

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };
  let handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  let sortIncreasing = () => {
    let sortedIncreasing = [...watchlist].sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });

    setWatchlist(sortedIncreasing);
  };

  let sortDecreasing = () => {
     let sortedDecreasing = [...watchlist].sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });

    setWatchlist(sortedDecreasing);
  };

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre) => {
          return (
            <div
              key={genre}
              onClick={() => handleFilter(genre)}
              className={
                currGenre === genre
                  ? "flex justify-center items-center h-12 w-36 bg-blue-600 rounded-xl text-white font-bold mx-4"
                  : "flex justify-center items-center h-12 w-36 bg-blue-400 rounded-xl text-white font-bold mx-4 "
              }
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder=" Search Movies.."
          className="h-9 w-[18rem] bg-gray-200 outline-none px-4"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-700 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div onClick={sortIncreasing} className="p-2">
                  <i className="fa-solid fa-arrow-up" />
                </div>
                <div className="p-2">Ratings</div>
                <div onClick={sortDecreasing} className="p-2">
                  <i className="fa-solid fa-arrow-down" />
                </div>
              </th>

              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currGenre === "All Genres") {
                  return true;
                } else {
                  return genreids[movieObj.genre_ids?.[0]] === currGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title.toLowerCase().includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr key={movieObj.id} className="border-b-2">
                    <td className="flex items-center px-2 py-4">
                      <img
                        alt={movieObj.title}
                        className="h-24 w-40"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      />
                      <div className="mx-10 text-xl font-bold">{movieObj.title}</div>
                      </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids?.[0]]}</td>
                    <td
                      onClick={() => handleRemoveFromWatchlist(movieObj)}
                      className="text-red-800 cursor-pointer"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;