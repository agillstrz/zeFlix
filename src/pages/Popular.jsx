import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import zeflix from "../api/get.api";
import Pagination from "../componets/Pagination";
import Card from "../componets/Card";
import GoToTop from "../componets/GoToTop";
function Popular() {
  const [data, setData] = useState("");
  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(1);

  const popular = () => {
    zeflix.getPopular(page).then((res) => setData(res.data.results));
  };
  const [first, setfirst] = useState("");
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
      popular();
    }, 700);
  }, [page]);
  return (
    <div className="content min-h-screen">
      <h2 className="lg:text-left text-center  lg:px-4 text-white font-bold text-3xl pb-3 lg:pb-9">
        Popular
      </h2>

      <div className="grid lg:grid-cols-5 grid-cols-2 place-items-center lg:gap-x-5 gap-y-3 lg:gap-y-5">
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

export default Popular;
