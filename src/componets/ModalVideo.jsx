import { Button, Modal } from "flowbite-react";
import React from "react";
import ReactPlayer from "react-player";

function ModalVideo({ show, setShow, video }) {
  return (
    <>
      <div
        className={`${
          show ? "" : "hidden"
        }fixed flex items-center justify-center  h-screen w-screen bg-black/30 backdrop-blur-sm z-[999]`}
      >
        <div className="relative w-full mx-20">
          <label
            onClick={() => setShow(!show)}
            className=" rounded-full absolute text-white text-[32px] lg:h-14 lg:w-14 flex items-center justify-center cursor-pointer hover:bg-text/80 bg-text  right-2 top-2"
          >
            ✕
          </label>
          {/* <YouTube wid className="" videoId="F5tSoaJ93ac" /> */}
          <ReactPlayer
            controls={true}
            playing={true}
            volume={0.3}
            height={500}
            width="100%"
            url={`https://www.youtube.com/watch?v=${video}`}
          />
        </div>
      </div>
    </>
  );
}

export default ModalVideo;
