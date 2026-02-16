import React from "react";

function Banner() {
  return (
    <div className="relative h-[40vh] md:h-[75vh] w-full overflow-hidden group cursor-pointer">
      <img
        src="https://warnersallman.com/1280/19624-spider-man-brand-new-day-spiderman-movies-2026-movies.jpg"
        alt="Spider-Man Brand New Day"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

      <div className="absolute bottom-0 left-0 p-6 md:p-12 text-white max-w-2xl">
        <h1 className="text-3xl md:text-6xl font-bold drop-shadow-lg">
          Spider-Man: Brand New Day
        </h1>

        <p className="mt-4 text-sm md:text-lg text-gray-200 line-clamp-3">
          Peter Parker faces a new chapter in his life as Spider-Man, balancing
          responsibility and identity in a world that no longer remembers him.
        </p>

        <div className="flex gap-4 mt-6">
          <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition duration-300">
            <i className="fa-solid fa-play"></i>
            Play
          </button>
          <button className="flex items-center gap-2 bg-gray-800/70 backdrop-blur-md px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition duration-300">
            <i className="fa-solid fa-plus"></i>
            Watchlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
