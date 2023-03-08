import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import zeflix from "../api/get.api";
import Card from "../componets/Card";
import CardPopular from "../componets/CardPopular";
import GoToTop from "../componets/GoToTop";
import Pagination from "../componets/Pagination";

function TopRated() {
  const [data, setData] = useState("");
  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(1);

  const rated = () => {
    zeflix.getRated(page).then((res) => setData(res.data.results));
  };
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
      rated();
    }, 700);
  }, [page]);
  return (
    <div className="content">
      <h2 className="text-left px-4 text-white font-bold text-3xl pb-9">
        Top Rating
      </h2>
      <div className="grid grid-cols-5 place-items-center gap-x-5 gap-y-5">
        {data && !load && data.map((m) => <Card key={m.id} data={m} />)}
        {load &&
          [1, 2, 3, 4, 5, 7, 8, 9, 10].map((m) => (
            <Skeleton key={m} width="14rem" height="18rem" />
          ))}
      </div>
      <Pagination setPage={setPage} page={page} />
      <GoToTop page={page} />
    </div>
  );
}

export default TopRated;
