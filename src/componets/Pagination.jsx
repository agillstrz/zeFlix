import React from "react";

function Pagination({ setPage, page }) {
  const data = ["prev", 1, , 2, 3, "Next"];
  return (
    <div className="flex lg:text-lg text-xl justify-center lg:justify-end w-full my-5 mt-9 px-4">
      <button
        onClick={() => setPage(page - 1)}
        className="bg-black lg:w-28 w-1/2 hover:bg-text hover:text-black transition-all duration-100 ease-linear border py-2 px-5 border-white text-text"
      >
        Prev
      </button>

      <button
        onClick={() => setPage(page + 1)}
        className="bg-black lg:w-28 w-1/2 hover:bg-text hover:text-black transition-all duration-100 ease-linear border py-2 px-5 border-white text-text"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
