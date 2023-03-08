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

  return (
    <>
      {!data && <Loading />}
      {data && gallery && (
        <>
          {show && (
            <ModalVideo show={show} setShow={setShow} video={video[0].key} />
          )}
          <div
            className="  flex flex-col  items-center w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                bg == "" ? data.backdrop_path : bg
              })`,
            }}
          >
            <div className="content pb-20  w-full flex flex-col justify-center  bg-gradient-to-r from-black to-transparent  h-full ">
              <p className="text-2xl text-white/80 uppercase">Tv series</p>
              <h2 className=" text-white text-[4rem] leading-tight font-semibold tracking-wide">
                {data.name} ({data.first_air_date.slice(0, 4)})
              </h2>
              <div className="flex gap-x-1 py-4">
                {data.genres.map((m) => (
                  <span
                    key={m.id}
                    className="px-2 py-1 border border-text rounded-lg text-white"
                  >
                    {m.name}
                  </span>
                ))}
              </div>
              <div className="flex gap-x-2">
                <button
                  // onClick={(e) => handleAddList(e, data.id)}
                  className="px-2 py-1 w-56 text-text rounded-lg text-xl border border-text"
                >
                  Add to watchlist
                </button>
                <div className="px-2 flex items-center gap-x-2 py-1 w-56 text-text rounded-lg text-xl ">
                  {data.networks.slice(0, 3).map((m) => (
                    <img
                      className="h-10"
                      src={`https://image.tmdb.org/t/p/w500/${m.logo_path}`}
                      alt=""
                    />
                  ))}
                </div>
              </div>
              <span className="w-full py-[1px] my-5 bg-black"></span>
              <div className="flex gap-x-2 ">
                <div className="w-[16%]  ">
                  <div
                    className="w-48 h-60  rounded-lg relative overflow-hidden  bg-cover bg-center "
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.poster_path})`,
                    }}
                  ></div>
                </div>
                <div className="w-[40%] ">
                  <p className="text-white text-lg">{data.overview}</p>
                </div>
                <div>
                  <div
                    className="radial-progress text-text bg-main text-2xl flex items-center"
                    style={{ "--value": 93, "--size": "9rem" }}
                  >
                    <AiFillStar />
                    {Math.floor(data.vote_average * 10) / 10}
                  </div>
                </div>
                <div className="w-[16%]  ">
                  <div
                    className="w-64 h-36 flex items-center justify-center saturate-50 hover:saturate-150 rounded-lg relative overflow-hidden  bg-cover bg-center "
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/w500/${
                        gallery.backdrops.length <= 1
                          ? gallery.backdrops[0].file_path
                          : gallery.backdrops[2].file_path
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
