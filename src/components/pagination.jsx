import React from "react";

function Pagination({ handlePrev, handleNext, pageNo }) {
  return (
    <div className="flex justify-center items-center mt-12">
      
      <div className="flex items-center gap-6 bg-white shadow-md rounded-xl px-6 py-3">
        
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          disabled={pageNo === 1}
          className={`px-4 py-2 rounded-lg transition duration-300 ${
            pageNo === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>

        {/* Page Number */}
        <span className="text-lg font-semibold text-gray-800">
          Page {pageNo}
        </span>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition duration-300"
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>

      </div>
    </div>
  );
}

export default Pagination;
