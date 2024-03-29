import { Carousel } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { BsFillPlayCircleFill, BsPlayCircle } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import "swiper/css";
import { Swiper } from "swiper/react";
import zeFlix from "../api/get.api";
import ModalVideo from "./ModalVideo";
function Hero() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
  const [movies, setMovies] = useState(null);
  const getData = () => {
    zeFlix.getRated().then((res) => setData(res.data));
  };
  const getMovies = () => {
    zeFlix.getMovies().then((res) => setMovies(res.data));
  };
  let navigate = useNavigate();

  useEffect(() => {
    getData();
    getMovies();
  }, []);
  return (
    <>
      {show && <ModalVideo show={show} setShow={setShow} video="tcrNsIaQkb4" />}
      <Swiper spaceBetween={0} slidesPerView={1} style={{ zIndex: "0" }}>
        <div className="z-0 ">
          <Carousel
            indicators={false}
            slideInterval={3000}
            leftControl=" "
            rightControl=" "
            className="z-0"
          >
            {movies &&
              movies.results.slice(0, 4).map((m) => (
                <div
                  key={m.id}
                  className="   lg:h-screen relative h-[60vh] flex  w-full   items-center  bg-cover bg-center"
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${m?.backdrop_path})`,
                  }}
                >
                  <div className="bg-gradient-to-t   from-main/70 lg:from-main to-transparent absolute h-20 lg:h-36 w-full  bottom-0 "></div>
                  <div className="lg:w-[45%]  brightness-110 lg:brightness-100 lg:px-16  w-full flex flex-col gap-y-2 lg:justify-center justify-end lg:items-start  items-start     lg:bg-gradient-to-r from-main to-transparent     h-full ">
                    <h2
                      onClick={() => navigate(`/detail/${m.id}`)}
                      className=" text-text/80  pl-3 lg:pl-0 text-[20px] lg:w-full w-[60%]  lg:text-[4rem] text-left lg:text-left leading-none font-semibold tracking-wide"
                    >
                      {m.title ? m.title : m.name}
                    </h2>
                    <p className="text-white hidden lg:block lg:text-xl text-justify tracking-normal">
                      {m.overview.slice(0, 130)}...
                    </p>
                    <div
                      onClick={() => setShow(true)}
                      className="lg:flex  hidden  w-full gap-x-3 lg:text-[10px] text-[13px] "
                    >
                      <button className="hover:bg-text/80  flex items-center py-2 px-2  gap-x-1 bg-text rounded-lg lg:px-3 lg:text-xl font-semibold lg:py-2 t ransition-all duration-150 ease-in">
                        <BsPlayCircle /> Watch Trailer
                      </button>
                      <Link
                        to={`/detail/${m.id}`}
                        className="flex items-center gap-x-1 bg-main text-white px-2  hover:bg-main/80 rounded-lg lg:px-3 lg:text-xl font-semibold lg:py-2 transition-all duration-150 ease-in"
                      >
                        <IoMdInformationCircleOutline />
                        More information
                      </Link>
                    </div>

                    <div className="flex   lg:hidden pb-1 justify-end w-full pr-3  ">
                      <BsFillPlayCircleFill
                        className="text-text  active:scale-95 transition-all duration-150"
                        size={60}
                      />
                    </div>
                  </div>
                  <div className="lg:w-[55%] w-0  bg-gradient-to-l h-full  from-main/40 to-transparent "></div>
                </div>
              ))}
          </Carousel>
        </div>
      </Swiper>
    </>
  );
}

export default Hero;
