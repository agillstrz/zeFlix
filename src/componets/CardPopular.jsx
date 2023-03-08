import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

function CardPopular({ data: m }) {
  return (
    <>
      <Link
        to={`/detail/${m.id}`}
        key={m.id}
        className="w-44 h-60 hover:scale-125 hover:z-[9999] rounded-lg relative overflow-hidden group transition-all duration-200 ease-linear "
      >
        <img
          className="absolute group-hover:invisible h-full bottom-0 top-0 left-0 right-0  "
          src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
          alt=""
        />
        <div className="invisible cursor-pointer  bg-black text-white flex-col  h-full group-hover:visible  transition-all duration-300 ease-in">
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
                <span className="flex items-center gap-x-1 text-[8px]">
                  12+
                </span>
                <span className="h-3 bg-text w-[1px]"></span>

                <span className="flex items-center gap-x-1 text-[8px]">
                  {m.release_date}
                </span>
              </div>
              {/* <div className="flex gap-x-1 py-1">
                      <span className="bg-black/60 borders px-1 text-[8px]">
                        actions
                      </span>
                      <span className="bg-black/60 borders px-1 text-[8px]">
                        actions
                      </span>
                      <span className="bg-black/60 borders px-1 text-[8px]">
                        actions
                      </span>
                    </div> */}
              <p className="text-[10px]">{m.overview.slice(0, 120)}...</p>
            </div>
            <span className="text-[10px] text-text hover:text-text/80 pb-3 text-right">
              More information
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}

export default CardPopular;
