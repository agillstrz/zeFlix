import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { HiArrowSmRight } from "react-icons/hi";
import Skeleton from "react-loading-skeleton";
import { Link, useNavigate } from "react-router-dom";
import zeflix from "../api/get.api";
import Card from "./Card";
import CardPopular from "./CardPopular";

function Trend() {
  const [data, setData] = useState("");
  let navigate = useNavigate();
  const trending = () => {
    zeflix.getPopular().then((res) => setData(res.data));
  };
  useEffect(() => {
    setTimeout(() => {
      trending();
    }, 700);
  }, []);
  return (
    <div className="px-14 bg-main">
      <div className=" pb-3  w-full  relative  ">
        <h2 className="text-2xl capitalize text-white  cursor-pointer font-semibold">
          Popular
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
            onClick={() => navigate("/popular")}
            className="w-44  hover:w-44 h-60 bg-white flex justify-center group items-center transition-all duration-250 ease-linear cursor-pointer"
          >
            <h2 className="flex items-center font-semibold text-main  gap-x-1">
              view{" "}
              <span className="hidden   group-hover:block transition-all duration-100 ease-linear">
                more
              </span>
              <HiArrowSmRight className="hidden   group-hover:block text-main" />{" "}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Trend;
