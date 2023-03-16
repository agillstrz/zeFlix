import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllSeries from "../pages/AllSeries";
import ByGenre from "../pages/ByGenre";
import Detail from "../pages/Detail";
import Genre from "../pages/Genre";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Popular from "../pages/Popular";
import Movies from "../pages/Movies";
import TopRated from "../pages/TopRated";

export const SetUpRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="genre/:id" element={<ByGenre />} />
          <Route path="movies" element={<Movies />} />
          <Route path="genre" element={<Genre />} />
          <Route path="popular" element={<Popular />} />
          <Route path="rated" element={<TopRated />} />
          <Route path="search/:nama" element={<AllSeries />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
