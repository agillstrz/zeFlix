import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Skeleton from "react-loading-skeleton";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import zeflix from "../api/get.api";
function Rated() {
  const [data, setData] = useState("");
  const [slide, setSlide] = useState(0);
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
    <div className="w-full  pt-4  overflow-hidden bg-main">
      <div className=" pb-3  w-full  relative  ">
        <h2 className="lg:text-2xl capitalize text-white  cursor-pointer font-semibold">
          Top Rated
        </h2>
        <span className="h-1  w-full absolute  bottom-0  px-14 bg-black"></span>
      </div>

      <Swiper
        autoHeight={true}
        slidesPerView={3}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          // when window width is >= 768px

          // when window width is >= 1024px
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        className="relative"
      >
        <div
          onClick={() => navigate("rated")}
          className="lg:hidden hover:black  z-[9999]  absolute  flex justify-end  right-0 top-[3px] mb-10 items-center rounded-sm text-[10px] px-[2px]  text-white hover:text-text"
        >
          Lebih banyak <MdArrowForwardIos className="text-[9px]" />
        </div>
        {!data &&
          [1, 2, 3, 4, 5, 6, 7].map((m) => (
            <SwiperSlide key={m} className="lg:py-10  pt-5">
              <Skeleton width="10rem" height="15rem" />
            </SwiperSlide>
          ))}

        {data &&
          data.results.slice(10, 20).map((m) => (
            <SwiperSlide key={m.id} className="lg:py-6 pt-6 lg:pt-6">
              <div
                onClick={() => navigate(`/detail/${m.id}`)}
                className="lg:w-[12rem] h-[11rem] w-[114px]  lg:h-[17rem] relative  lg:hover:scale-[1.15] rounded-lg  overflow-clip  group transition-all duration-150 ease-in "
              >
                <img
                  className=" h-full  w-full lg:group-hover:hidden"
                  src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
                  alt=""
                />
                <div className="absolute invisible top-0 z-[9999] lg:group-hover:visible cursor-pointer  bg-black text-white flex-col  h-full lg:flex  transition-all duration-150 ease-in ">
                  <div
                    className="w-full h-[40%] bg-cover bg-center "
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/w500/${m.backdrop_path})`,
                    }}
                  ></div>
                  <div className="flex w-full h-[60%] rounded-lg overflow-hidden    flex-col justify-between px-1">
                    <div className="">
                      <h2 className=" font-semibold capitalize hover:text-text lg:text-[14px] ">
                        {m.title ? m.title : m.name}
                      </h2>
                      <div className="flex gap-x-1 items-center">
                        <span className="flex items-center  text-[10px]">
                          <AiFillStar className="text-[10px] text-text" />
                          {Math.floor(m.vote_average * 10) / 10}
                        </span>
                        <span className="h-3 bg-text w-[1px]"></span>
                        <span className="flex items-center gap-x-1 text-[10px]">
                          12+
                        </span>
                        <span className="h-3 bg-text w-[1px]"></span>

                        <span className="flex items-center gap-x-1 text-[10px]">
                          {m.release_date}
                        </span>
                      </div>
                      <p className="text-[10px]">
                        {m.overview.slice(0, 150)}...
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

      {/* <div className="relative h-[18rem] mt-4   py-10  w-full">
        <span className="absolute top-1/2 -left-3   -translate-y-1/2 z-[9999]">
          <AiOutlineLeft
            onClick={() => setSlide(0)}
            className="text-5xl hover:text-white cursor-pointer text-white/50"
          />
        </span>
        <span className="absolute top-1/2 -right-3   -translate-y-1/2 z-[9999]">
          <AiOutlineRight
            onClick={nextSlide}
            className="text-5xl hover:text-white cursor-pointer text-white/50"
          />
        </span>
        <div
          className={`absolute  top-0  bg-main py-5 transition-all duration-500 ease-out flex justify-center  lg:gap-x-4 `}
          style={{ transform: `translateX(-${slide * 20}%)` }}
        >
          {!data &&
            [1, 2, 3, 4, 5, 6, 7].map((m) => (
              <Skeleton key={m} width="10rem" height="15rem" />
            ))}
          {data &&
            data.results
              .slice(0, 11)
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
      </div> */}
    </div>
  );
}

export default Rated;
