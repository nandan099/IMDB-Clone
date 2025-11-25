import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./pagination";

function Movies() {
  
  const [movies, setMovies] = useState([])
  const [pageNo , setPageNo] = useState(1)

  const handlePrev = ()=>{
    if(pageNo==1){
      setPageNo(pageNo)  
    }
    else{
    setPageNo(pageNo-1)
    }
  }
  const handleNext = ()=>{
    setPageNo(pageNo+1)
  } 

  useEffect(() =>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=d7e7715979ce2ae62edda81db501ec11&language=en-US&page=${pageNo}`)
       .then(function (res) {
        setMovies(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [pageNo]);

  return (
    <div>
      <div className="text-2xl m-4 font-bold text-center text-black-500  ">
        Trending Movies
      </div>
      <div className="flex flex-row flex-wrap  justify-around ">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
            />
          );
        })}
      </div>
      <Pagination pageNo ={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>

    </div>
  );
}

export default Movies;

// https://api.themoviedb.org/3/movie/top_rated?api_key=d7e7715979ce2ae62edda81db501ec11&language=en-US&page=1
// https://api.themoviedb.org/3/movie/now_playing?api_key=d7e7715979ce2ae62edda81db501ec11&language=en-US&page=1
// https://api.themoviedb.org/3/movie/popular?api_key=d7e7715979ce2ae62edda81db501ec11&language=en-US&page=1