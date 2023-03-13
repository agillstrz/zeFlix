import React, { useEffect, useState } from "react";
import { TfiSearch } from "react-icons/tfi";
import Skeleton from "react-loading-skeleton";
import { useLocation, useParams } from "react-router-dom";
import zeflix from "../api/get.api";
import Card from "../componets/Card";
import GoToTop from "../componets/GoToTop";
import Loading from "../componets/Loading";
import Pagination from "../componets/Pagination";

function ByGenre() {
  const { id } = useParams();
  const { state } = useLocation();

  const [data, setData] = useState("");
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);
  const genre = () => {
    zeflix.byGenre(id, page).then((res) => setData(res.data.results));
  };

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      genre();
      setLoad(false);
    }, 700);
  }, [page]);
  return (
    <>
      {" "}
      <div className="min-h-screen content">
        <div className="pb-9 ">
          <h2 className="text-left px-4  flex items-center gap-x-2 text-white font-semibold leading-none  text-3xl  ">
            {state.name}
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 grid-cols-2 place-items-center lg:gap-x-5 gap-y-3 lg:gap-y-5">
          {load &&
            [1, 2, 3, 4, 5].map((m) => (
              <Skeleton key={m} height="18rem" width="14rem" />
            ))}
          {!load && data && data.map((m) => <Card key={m.id} data={m} />)}
        </div>
        <Pagination setPage={setPage} page={page} />
        <GoToTop page={page} />
      </div>
    </>
  );
}

export default ByGenre;
