import React from "react";
import ReactPlayer from "react-player";

function ModalVideo({ show, setShow, video }) {
  return (
    <>
      <input checked={show} type="checkbox" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box  min-h-[80%] p-0 min-w-[80%] relative">
          <label
            onClick={() => setShow(!show)}
            className="btn btn-sm btn-circle absolute right-2 top-2"
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
