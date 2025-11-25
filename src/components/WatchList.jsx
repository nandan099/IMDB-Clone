import React from "react";

function WatchList() {
  return (
    <>

    <div className='flex justify-center flex-wrap m-4'>
      <div className='flex justify-center items-center h-12 w-36 bg-blue-400 rounded-xl text-white font-bold mx-4'>Action</div>
      <div className='flex justify-center items-center h-12 w-36 bg-gray-400/50  rounded-xl text-white font-bold mx-4'>Drama</div>
      <div className='flex justify-center items-center h-12 w-36 bg-gray-400/50 rounded-xl text-white font-bold'>All categories</div>
    </div>
      <div className="flex justify-center my-4  ">
        <input
          type="text"
          placeholder=" Search Movies.."
          className="h-9 w-[18rem] bg-gray-200 outline-non px-4"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-700 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b-2">
              <td className="flex items-center px-2 py-4">
                <img className='h-24 w-40 ' src={`https://i.etsystatic.com/37166133/r/il/60f034/4087791906/il_570xN.4087791906_jcbj.jpg`}/>
                <div className="mx-10 text-xl font-bold">Avengers infinity War</div>
              </td>
              <td>8.4</td>
              <td>9</td>
              <td>Action</td>
              <td className="text-red-800">Delete</td>

            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
