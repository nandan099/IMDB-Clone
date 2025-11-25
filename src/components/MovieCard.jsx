import React from 'react'

function MovieCard({poster_path }) {
  return (
    <div className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>

      <div className="flex m-4 justify-center bg-gray-900/60 text-emerald-300 h-8 w-8 items-center arounded-lg "><i class="fa-solid fa-plus"></i></div>




    </div>
  )
}

export default MovieCard