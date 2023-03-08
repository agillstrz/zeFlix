import React from "react";

function Pagination({ setPage, page }) {
  const data = ["prev", 1, , 2, 3, "Next"];
  return (
    <div className="flex justify-end w-full mt-9 px-4">
      <button
        onClick={() => setPage(page - 1)}
        className="bg-black hover:bg-text hover:text-black transition-all duration-100 ease-linear border py-2 px-5 border-white text-text"
      >
        Prev
      </button>

      <button
        onClick={() => setPage(page + 1)}
        className="bg-black hover:bg-text hover:text-black transition-all duration-100 ease-linear border py-2 px-5 border-white text-text"
      >
        Next
      </button>

      {/* {data.map((m, index) => (
        <button
          key={index}
          className="bg-black border py-2 px-5 border-white text-text"
        >
          {m}
        </button>
      ))} */}
    </div>
  );
}

export default Pagination;
