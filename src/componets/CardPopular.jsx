import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

function CardPopular({ data: m }) {
  return (
    <Link
      to={`/detail/${m.id}`}
      key={m.id}
      className="lg:w-44  lg:h-60 h-[14rem] w-44  relative hover:z-[999] hover:scale-125 rounded-lg  overflow-clip  group transition-all duration-200 ease-in "
    >
      <img
        className="lg:w-44 lg:h-60 h-[14rem] w-44 group-hover:hidden"
        src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
        alt=""
      />
      <div className="absolute invisible top-0 group-hover:visible cursor-pointer  bg-black text-white flex-col  h-full group-hover:flex  transition-all duration-200 ease-in ">
        <div
          className="w-full h-[40%] bg-cover bg-center "
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${m.backdrop_path})`,
          }}
        ></div>
        <div className="flex w-full h-[60%] rounded-lg overflow-hidden z-[9999]   flex-col justify-between px-3">
          <div className="">
            <h2 className=" font-semibold capitalize hover:text-text text-[11px] ">
              {m.title ? m.title : m.name}
            </h2>
            <div className="flex gap-x-1 items-center">
              <span className="flex items-center  text-[8px]">
                <AiFillStar className="text-[8px] text-text" />
                {Math.floor(m.vote_average * 10) / 10}
              </span>
              <span className="h-3 bg-text w-[1px]"></span>
              <span className="flex items-center gap-x-1 text-[8px]">12+</span>
              <span className="h-3 bg-text w-[1px]"></span>

              <span className="flex items-center gap-x-1 text-[8px]">
                {m.release_date}
              </span>
            </div>
            <p className="text-[10px]">{m.overview.slice(0, 120)}...</p>
          </div>
          <span className="text-[10px] text-text hover:text-text/80 pb-3 text-right">
            More information
          </span>
        </div>
      </div>
    </Link>
  );
}

export default CardPopular;
