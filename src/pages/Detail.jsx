import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsPlayCircle } from "react-icons/bs";
import { useParams } from "react-router-dom";
import zeflix from "../api/get.api";
import Gallery from "../componets/Gallery";
import GoToTop from "../componets/GoToTop";
import Loading from "../componets/Loading";
import ModalVideo from "../componets/ModalVideo";
import Riviews from "../componets/Riviews";

function Detail() {
  const [data, setData] = useState("");
  const [gallery, setGallery] = useState("");
  const [video, setVideo] = useState("");
  const [show, setShow] = useState(false);
  const [bg, setBg] = useState("");
  // const { fav, handleAddList } = useContext(myFav);
  const { id } = useParams();
  const details = () => {
    zeflix.getDetails(id).then((res) => setData(res.data));
  };
  const foto = () => {
    zeflix.getGallery(id).then((res) => setGallery(res.data));
  };
  const getVideo = () => {
    zeflix.getVideo(id).then((res) => setVideo(res.data.results));
  };
  useEffect(() => {
    setTimeout(() => {
      foto();
      details();
      getVideo();
    }, 700);
  }, []);
  console.log(data);
  return (
    <>
      {!data && <Loading />}
      {data && gallery && (
        <>
          {show && video && (
            <ModalVideo show={show} setShow={setShow} video={video[0]?.key} />
          )}
          <div
            className=" flex flex-col  min-h-screen  items-center w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                bg == "" ? data.backdrop_path : bg
              })`,
            }}
          >
            <div className=" px-5  lg:bg-transparent bg-black/20 lg:pt-32 lg:px-14  pt-20   pb-20   w-full flex flex-col  justify-center  bg-gradient-to-r from-black to-transparent   min-h-screen   ">
              <p className="lg:text-2xl  text-[20px] text-white/80 uppercase lg:mt-0 pt-10">
                Movies
              </p>
              <h2 className=" text-white lg:text-[4rem] text-[19px] leading-tight font-semibold tracking-wide">
                {data.title ? data.title : data.name} ({data?.release_date})
              </h2>
              <div className="flex gap-x-1 py-4">
                {data.genres.map((m) => (
                  <span
                    key={m.id}
                    className="lg:px-2 px-1 py-1 border text-[10px] lg:text-[18px] border-text rounded-lg text-white"
                  >
                    {m.name}
                  </span>
                ))}
              </div>
              <div className="flex gap-x-2">
                <button
                  // onClick={(e) => handleAddList(e, data.id)}
                  className="px-2 py-1 text-sm lg:w-56 text-text rounded-lg lg:text-xl border border-text"
                >
                  Add to watchlist
                </button>
                <div className="px-2 flex items-center gap-x-2 py-1 w-56 text-text rounded-lg text-xl ">
                  {data.networks?.slice(0, 3).map((m) => (
                    <img
                      className="lg:h-10 h-3"
                      src={`https://image.tmdb.org/t/p/w500/${m.logo_path}`}
                      alt=""
                    />
                  ))}
                </div>
              </div>
              <span className="w-full py-[1px] my-5 bg-black"></span>
              <div className="flex flex-col lg:gap-y-0 gap-y-3 lg:flex-row  gap-x-2 ">
                <div className="w-[16%] hidden lg:block  ">
                  <div
                    className="lg:w-48 h-32 w-24 lg:h-60  rounded-lg relative overflow-hidden  bg-cover bg-center "
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.poster_path})`,
                    }}
                  ></div>
                </div>
                <div className="lg:w-[40%] ">
                  <p className="text-white text-[13px] lg:text-lg">
                    {data.overview}
                  </p>
                </div>
                <div>
                  <div className="hidden lg:block  h-20 w-20 bg-main border-text rounded-full">
                    <div className="h-20 w-20 flex justify-center items-center text-text border-[7px] border-text rounded-full">
                      <AiFillStar />
                      {Math.floor(data.vote_average * 10) / 10}
                    </div>
                  </div>
                </div>
                <div className="lg:w-[16%] flex justify-center lg:block w-full  ">
                  <div
                    className="lg:w-64 w-full h-52 lg:h-36 flex items-center justify-center saturate-50 hover:saturate-150 rounded-lg relative overflow-hidden  bg-cover bg-center "
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/w500/${
                        gallery.backdrops.length <= 1
                          ? gallery.backdrops[0]?.file_path
                          : gallery.backdrops[2]?.file_path
                      })`,
                    }}
                  >
                    <BsPlayCircle
                      onClick={() => setShow(true)}
                      className="text-[4rem] cursor-pointer active:scale-90 transition-all duration-100 ease-linear hover:text-text"
                    />
                  </div>
                  {/* <YouTube className="w-64 h-36" videoId="F5tSoaJ93ac" /> */}
                </div>
              </div>
            </div>
          </div>
          {gallery && <Gallery data={gallery} setBg={setBg} />}
          <Riviews id={data.id} />
          <GoToTop />
        </>
      )}
    </>
  );
}

export default Detail;
