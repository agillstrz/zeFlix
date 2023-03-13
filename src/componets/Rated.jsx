import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { HiArrowSmRight } from "react-icons/hi";
import Skeleton from "react-loading-skeleton";
import { Link, useNavigate } from "react-router-dom";
import zeflix from "../api/get.api";
import Card from "./Card";
import CardPopular from "./CardPopular";

function Rated() {
  const [data, setData] = useState("");
  let navigate = useNavigate();
  const rated = () => {
    zeflix.getRated().then((res) => setData(res.data));
  };
  useEffect(() => {
    setTimeout(() => {
      rated();
    }, 700);
  }, []);
  return (
    <div className="px-14 pt-4 bg-main">
      <div className=" pb-3  w-full  relative  ">
        <h2 className="text-2xl capitalize text-white  cursor-pointer font-semibold">
          Top Rated
        </h2>
        <span className="h-1  w-full absolute  bottom-0  px-14 bg-black"></span>
      </div>
      <div className=" bg-main py-5 flex  gap-x-4  ">
        {!data &&
          [1, 2, 3, 4, 5, 6, 7].map((m) => (
            <Skeleton key={m} width="10rem" height="15rem" />
          ))}
        {data &&
          data.results
            .slice(0, 6)
            .map((m) => <CardPopular key={m.id} data={m} />)}
        {data && (
          <div
            onClick={() => navigate("/rated")}
            className="w-44 bg-text hidden relative hover:brightness-125 hover:w-44 h-60 bg-blend-saturation overflow-hidden backdrop-blur  lg:flex justify-center group items-center transition-all duration-250 ease-linear cursor-pointer"
          >
            <div className="absolute translate-x-0 font-semibold text-main  group-hover:-translate-x-[200%] flex items-center gap-x-1  transition-all duration-300 ">
              <h2 className="  ">view more </h2>
            </div>
            <span className="absolute group-hover:translate-x-0 translate-x-[70%] flex justify-center items-center w-full h-full transition-all duration-300 ">
              <HiArrowSmRight size={80} className=" font-bold text-main" />{" "}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Rated;
