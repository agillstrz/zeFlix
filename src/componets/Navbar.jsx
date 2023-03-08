import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";
function Navbar() {
  const [nama, setNama] = useState("");
  const nav = [
    {
      nama: "Home",
      url: "/",
    },
    {
      nama: "Series",
      url: "series",
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
    <div className="absolute py-2 w-full">
      <div className=" px-14  flex justify-between gap-x-2  w-full items-center">
        <div className="w-full  items-center flex  gap-x-10  py-5">
          <div className="font-extrabold text-2xl lett tracking-widest text-text">
            zeFlix
          </div>
          <ul className="text-white flex gap-x-5 font-semibold text-xl">
            {nav.map((m, index) => (
              <li
                key={index}
                className={`cursor-pointer group relative capitalize`}
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
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <input
            className="bg-white/40  focus:bg-black text-white py-2 px-2 rounded-lg "
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
        {/* <div className="gap-x-1   flex items-center">
          <img
            className="rounded-full h-9 "
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt=""
          />
          <p className="text-white text-sm">Kuze</p>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
