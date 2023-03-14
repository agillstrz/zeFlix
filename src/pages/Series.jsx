import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import zeflix from "../api/get.api";
import Card from "../componets/Card";
import GoToTop from "../componets/GoToTop";
import Pagination from "../componets/Pagination";
function Series() {
  const [data, setData] = useState("");
  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(1);

  const allSeries = () => {
    zeflix.getSeries(page).then((res) => setData(res.data.results));
  };

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      allSeries();
      setLoad(false);
    }, 700);
  }, [page]);

  return (
    <>
      <div className="content">
        <h2 className="lg:text-left text-center  lg:px-4 text-white font-bold text-3xl pb-3 lg:pb-9">
          All Series
        </h2>
        <div className="grid lg:grid-cols-5 grid-cols-2 place-items-center lg:gap-x-5 gap-y-3 lg:gap-y-5">
          {data && !load && data.map((m) => <Card key={m.id} data={m} />)}
          {load &&
            [1, 2, 3, 4, 5, 7, 8, 9, 10].map((m) => (
              <Skeleton key={m} width="14rem" height="18rem" />
            ))}
        </div>
        <Pagination setPage={setPage} page={page} />
        {/* <div className="w-full flex justify-center mt-5">
            <button
              onClick={loadMore}
              className="px-3 py-2 w-full a bg-text font-bold text-main"
            >
              LoadMore
            </button>
          </div> */}
      </div>
      <GoToTop page={page} />
    </>
  );
}

export default Series;
