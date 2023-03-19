import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
function Navbar() {
  const [nama, setNama] = useState("");
  const { pathname } = useLocation();
  const nav = [
    {
      nama: "Home",
      url: "/",
    },
    {
      nama: "movies",
      url: "movies",
    },
    {
      nama: "popular",
      url: "popular",
    },
    {
      nama: "top rated",
      url: "rated",
    },
    {
      nama: "Genre",
      url: "genre",
    },
  ];
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${nama}`, { state: nama });
  };
  return (
    <div
      className={` absolute z-[99] lg:pt-0 pt-3  flex flex-col lg:bg-gradient-to-b from-main to-transparent   lg:py-2 w-full`}
    >
      <div className="px-4  lg:px-14 flex lg:justify-between gap-x-2  w-full justify-center  items-center">
        <div className="lg:w-full  items-center  flex  gap-x-10  lg:py-5">
          <div
            onClick={() => navigate("/")}
            className="font-extrabold text-xl  lg:text-2xl leading-none lg:tracking-widest text-text"
          >
            zeFlix
          </div>
          <ul className="text-white hidden lg:flex gap-x-5 font-semibold lg:text-xl">
            {nav.map((m, index) => (
              <li
                key={index}
                className={`cursor-pointer group relative capitalize`}
              >
                <NavLink
                  to={`${m.url}`}
                  className={({ isActive }) => (isActive ? "text-text " : "")}
                >
                  {m.nama}
                  <span
                    className={`absolute bottom-0 group-hover:w-full w-0 transition-all duration-200 ease-in h-1 bg-text left-0`}
                  ></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <form
          onSubmit={handleSubmit}
          className="relative  w-full lg:w-[16%] flex items-center"
        >
          <input
            className="bg-white/40 w-full focus:ring-0 focus:outline-none  lg:focus:bg-black text-white lg:py-2 py-[2px] px-2 rounded-lg "
            type="text"
            name=""
            placeholder="Search..."
            id=""
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />

          <span className="absolute right-0 text-white px-2 text-2xl ">
            <BiSearchAlt />
          </span>
        </form>
      </div>
      <ul className="flex justify-center lg:hidden text-sm  py-2 text-white gap-x-5">
        {nav
          .filter((m) => m.nama !== "Home")
          .map((m, index) => (
            <li
              key={index}
              className={`cursor-pointer group font-semibold relative capitalize`}
            >
              <NavLink
                to={`${m.url}`}
                // to={`${m.url}`}
                className={({ isActive }) => (isActive ? "text-text " : "")}
              >
                {m.nama}
                <span
                  className={`absolute bottom-0 group-hover:w-full w-0 transition-all duration-200 ease-in h-1 bg-text left-0`}
                ></span>
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Navbar;
