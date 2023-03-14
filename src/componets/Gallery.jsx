import React, { useEffect, useState } from "react";
import zeflix from "../api/get.api";
import { SiSpinrilla } from "react-icons/si";
import CONSTANT from "../utils/constants";

function Gallery({ setBg, data }) {
  const [show, setShow] = useState(4);
  const [load, setLoad] = useState(false);
  const loadImage = () => {
    setLoad(true);
    setTimeout(() => {
      data?.backdrops.length <= show ? setShow(4) : setShow(show + 4);
      setLoad(false);
    }, 700);
  };
  console.log(data);
  return (
    <div className="px-14 bg-main">
      <div className=" pb-3  w-full  relative  ">
        <h2 className="text-2xl font-semibold my-3 text-center lg:text-start text-white">
          Gallery
        </h2>
        <div className="grid w-full lg:grid-cols-4 gap-x-3 gap-y-3 ">
          {data &&
            data.backdrops
              .slice(0, show)
              .map((m, index) => (
                <img
                  className="cursor-pointer"
                  key={index}
                  onClick={() => setBg(m.file_path)}
                  src={`${CONSTANT.foto}/w500/${m.file_path}`}
                  alt=""
                />
              ))}
        </div>
        <div className="flex justify-center flex-col items-center gap-y-2 w-full pt-3 ">
          <button
            onClick={loadImage}
            className={`${
              data.backdrops.length <= show ? "hidden" : ""
            } w-40 flex justify-center h-12 items-center active:scale-90 bg-text rounded-lg hover:bg-text/80 transition-all duration-150 ease-linear text-white font-bold`}
          >
            {load ? (
              <>
                <SiSpinrilla size={32} className="animate-spin" />
              </>
            ) : (
              "Load More"
            )}
          </button>
          {show > 4 ? (
            <button
              onClick={() => setShow(4)}
              className="w-20 flex justify-center h-12 items-center active:scale-90 bg-text rounded-lg hover:bg-text/80 transition-all duration-150 ease-linear text-white font-bold"
            >
              Close
            </button>
          ) : undefined}
        </div>
        {/* <span className="h-1  w-full absolute  bottom-0  px-14 bg-black"></span> */}
      </div>
    </div>
  );
}

export default Gallery;
