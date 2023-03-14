import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { HiArrowSmRight } from "react-icons/hi";
import Skeleton from "react-loading-skeleton";
import { Link, useNavigate } from "react-router-dom";
import zeflix from "../api/get.api";
import Card from "./Card";
import CardPopular from "./CardPopular";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
function Trend() {
  const [data, setData] = useState("");
  const [slide, setSlide] = useState(0);
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
    <div className="w-full  pt-4  overflow-hidden bg-main">
      <div className=" pb-3  w-full  relative  ">
        <h2 className="lg:text-2xl capitalize text-white  cursor-pointer font-semibold">
          Popular
        </h2>
        <span className="h-1  w-full absolute  bottom-0  px-14 bg-black"></span>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
          768: {
            width: 1000,
            slidesPerView: 5,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {!data &&
          [1, 2, 3, 4, 5, 6, 7].map((m) => (
            <SwiperSlide className="lg:py-10  pt-5">
              <Skeleton key={m} width="10rem" height="15rem" />
            </SwiperSlide>
          ))}
        {data &&
          data.results.map((m) => (
            <SwiperSlide className="lg:py-10 py-5 ">
              <div
                onClick={() => navigate(`/detail/${m.id}`)}
                className="lg:w-44  lg:h-60 h-[14rem] w-44  relative hover:z-[999] lg:hover:scale-125 rounded-lg  overflow-clip  group transition-all duration-200 ease-in "
              >
                <img
                  className="lg:w-44 lg:h-60 h-[15rem]  w-44 lg:group-hover:hidden"
                  src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
                  alt=""
                />
                <div className="absolute invisible top-0 group-hover:visible cursor-pointer  bg-black text-white flex-col  h-full lg:flex  transition-all duration-200 ease-in ">
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
                      <p className="text-[10px]">
                        {m.overview.slice(0, 120)}...
                      </p>
                    </div>
                    <span className="text-[10px] text-text hover:text-text/80 pb-3 text-right">
                      More information
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default Trend;
