import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { HiArrowSmRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../componets/Card";
import Hero from "../componets/Hero";
import GenreHome from "../componets/GenreHome";
import Trend from "../componets/Trend";
import Rated from "../componets/Rated";
import Footer from "../componets/Footer";
function Home() {
  const [scroll, setScroll] = useState(false);
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <>
      <Hero />
      <div className="lg:px-14 px-2">
        <Rated />
        <Trend />
      </div>
    </>
  );
}

export default Home;
