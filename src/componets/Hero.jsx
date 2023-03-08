import React, { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { BsPlayCircle } from "react-icons/bs";
import ModalVideo from "./ModalVideo";
import { Link } from "react-router-dom";
function Hero() {
  const [show, setShow] = useState(false);
  return (
    <>
      {show && <ModalVideo show={show} setShow={setShow} video="tcrNsIaQkb4" />}
      <div
        className=" h-screen flex    items-center  bg-cover bg-center"
        style={{
          backgroundImage: `url('https://www.themoviedb.org/t/p/original/iVhJ23akvDuB9yVjcKxfowFc8zv.jpg')`,
        }}
      >
        <div className="lg:w-[45%] px-16 w-full flex flex-col gap-y-2 justify-center bg-gradient-to-r from-main to-transparent     h-full ">
          <h2 className=" text-text/80 text-[4rem] leading-none font-semibold tracking-wide">
            The Boys (2019)
          </h2>
          <p className="text-white text-xl text-justify tracking-normal">
            A group of vigilantes known informally as “The Boys” set out to take
            down corrupt superheroes with no more than blue-collar grit and a
            willingness to fight dirty.
          </p>
          <div onClick={() => setShow(true)} className="flex gap-x-3">
            <button className="hover:bg-text/80 flex items-center gap-x-1 bg-text rounded-lg px-3 text-xl font-semibold py-2 transition-all duration-150 ease-in">
              <BsPlayCircle /> Watch Trailer
            </button>
            <Link
              to={`/detail/76479`}
              className="flex items-center gap-x-1 bg-main text-white hover:bg-main/80 rounded-lg px-3 text-xl font-semibold py-2 transition-all duration-150 ease-in"
            >
              <IoMdInformationCircleOutline />
              More information
            </Link>
          </div>
        </div>
        <div className="w-[55%]  bg-gradient-to-l h-full  from-main/40 to-transparent "></div>
      </div>
    </>
  );
}

export default Hero;
