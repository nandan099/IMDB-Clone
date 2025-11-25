import React from 'react'


function Banner() {
  return (
    <div className='h-[20vh] md:h-[74vh] bg-cover bg-center flex items-end hover:cursor-pointer' style={{backgroundImage:'url(https://warnersallman.com/1280/19624-spider-man-brand-new-day-spiderman-movies-2026-movies.jpg)'}}>
         <div className='text-white text-xl w-full text-center bg-gray-900/60 p-4'>SpyderMan Brand New Day</div>
    </div>
  )
}

export default Banner