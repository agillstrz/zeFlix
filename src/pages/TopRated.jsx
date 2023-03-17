import React, { useEffect, useState } from "react";
import zeflix from "../api/get.api";
import Card from "../componets/Card";
import CardPopular from "../componets/CardPopular";
import GoToTop from "../componets/GoToTop";
import Skeleton from "../componets/Loader/Skeleton";
import Pagination from "../componets/Pagination";

function TopRated() {
  const [data, setData] = useState("");
  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      zeflix.getRated(page).then((res) => {
        setLoad(false);
        setData(res.data.results);
      });
    }, 700);
  }, [page]);

  return (
    <div className="content min-h-screen">
      <h2 className="lg:text-left text-center  lg:px-4 text-white font-bold text-3xl pb-3 lg:pb-9">
        Top Rating
      </h2>
      <div className="grid lg:grid-cols-5 grid-cols-3 place-items-center lg:gap-x-5 gap-y-3 lg:gap-y-5">
        {data && !load && data.map((m) => <Card key={m.id} data={m} />)}
        {load &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m) => (
            <Skeleton key={m} style="lg:w-[14rem] lg:h-72 w-[7rem] h-[9rem]" />
          ))}
      </div>
      <Pagination setPage={setPage} page={page} />
      <GoToTop page={page} />
    </div>
  );
}

export default TopRated;
