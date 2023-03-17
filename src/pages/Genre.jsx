import React from "react";
import { Link } from "react-router-dom";
import GoToTop from "../componets/GoToTop";
import Pagination from "../componets/Pagination";
import { genre } from "../mockups/genre";
function Genre() {
  return (
    <div className="content">
      <h2 className="lg:text-left text-center  lg:px-4 text-white font-bold text-3xl pb-3 lg:pb-9">
        Genre
      </h2>
      <div className="grid  lg:grid-cols-5 place-items-center grid-cols-3 gap-y-4">
        {genre.map((m) => (
          <Link
            key={m.id}
            to={`/genre/${m.id}`}
            state={{ name: m.name }}
            className="lg:h-72 lg:w-56 w-[7rem] h-[9rem] cursor-pointer hover:brightness-125  flex justify-center bg-cover bg-center items-center"
            style={{
              backgroundImage: `url(${m.foto})`,
            }}
          >
            <div className="w-full h-full bg-main/50 brightness-150  flex justify-center items-center">
              <p className="text-text tracking-widest text-center font-bold lg:text-2xl ">
                {m.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Genre;
