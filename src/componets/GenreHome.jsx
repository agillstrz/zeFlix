import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import Card from "./Card";

function GenreHome() {
  const genre = [
    {
      name: "Action",
    },
    {
      name: "adventure",
    },
    {
      name: "comedy",
    },
    {
      name: "crime",
    },
    {
      name: "drama",
    },
    {
      name: "sci-fi",
    },
    {
      name: "thiller",
    },
  ];
  return (
    <>
      <div className=" px-14 py-3  w-full   ">
        <ul className="flex gap-x-12  pb-3 items-center relative">
          {genre.map((m, index) => (
            <li
              key={index}
              className="text-xl capitalize hover:text-text group text-white flex justify-center relative cursor-pointer font-semibold"
            >
              {m.name}
              <span className="absolute -bottom-3 z-20  group-hover:w-full w-0    flex  transition-all duration-200 ease-in-out h-1 bg-text "></span>
            </li>
          ))}

          <span className="h-1  w-full absolute  bottom-0  px-14 bg-black"></span>
        </ul>
      </div>
      <div className=" bg-main px-14 py-5 flex  gap-x-4  ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <div className="w-44  hover:w-44 h-60 bg-white flex justify-center group items-center transition-all duration-250 ease-linear cursor-pointer">
          <h2 className="flex items-center font-semibold text-main  gap-x-1">
            view{" "}
            <span className="hidden   group-hover:block transition-all duration-100 ease-linear">
              more
            </span>
            <HiArrowSmRight className="hidden   group-hover:block text-main" />{" "}
          </h2>
        </div>
      </div>
    </>
  );
}

export default GenreHome;
