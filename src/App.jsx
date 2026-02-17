import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import Movies from "./components/Movies";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  const [watchlist, setWatchList] = useState(() => {
    const savedMovies = localStorage.getItem("moviesApp");
    return savedMovies ? JSON.parse(savedMovies) : [];
  });

 
  useEffect(() => {
    localStorage.setItem("moviesApp", JSON.stringify(watchlist));
  }, [watchlist]);


  const handleAddtoWatchlist = (movieObj) => {
    const alreadyExists = watchlist.some(
      (movie) => movie.id === movieObj.id
    );

    if (!alreadyExists) {
      setWatchList((prev) => [...prev, movieObj]);
    }
  };


  const handleRemoveFromWatchList = (movieObj) => {
    setWatchList((prev) =>
      prev.filter((movie) => movie.id !== movieObj.id)
    );
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        

        <Navbar watchlist={watchlist} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  watchlist={watchlist}
                  handleAddtoWatchlist={handleAddtoWatchlist}
                  handleRemoveFromWatchlist={handleRemoveFromWatchList}
                />
              </>
            }
          />

          <Route
            path="/watchlist"
            element={
              <WatchList
                watchlist={watchlist}
                setWatchlist={setWatchList}
                handleRemoveFromWatchlist={handleRemoveFromWatchList}
              />
            }
          />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
