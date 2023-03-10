import React from "react";
import { Link } from "react-router-dom";
import GoToTop from "../componets/GoToTop";
import Pagination from "../componets/Pagination";
import { genre } from "../mockups/genre";
function Genre() {
  return (
    <>
      <div className="grid content lg:grid-cols-5 place-items-center grid-cols-2 gap-y-4">
        {genre.map((m) => (
          <Link
            key={m.id}
            to={`/genre/${m.id}`}
            state={{ name: m.name }}
            className="lg:h-72 lg:w-56 h-60 w-44  cursor-pointer hover:brightness-125  flex justify-center bg-cover bg-center items-center"
            style={{
              backgroundImage: `url(${m.foto})`,
            }}
          >
            <div className="w-full h-full bg-main/50 brightness-150  flex justify-center items-center">
              <p className="text-text tracking-widest text-center font-bold text-2xl ">
                {m.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Genre;
