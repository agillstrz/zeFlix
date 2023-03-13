import React, { useEffect, useState } from "react";
import { TfiSearch } from "react-icons/tfi";
import { useLocation, useParams } from "react-router-dom";
import zeflix from "../api/get.api";
import Card from "../componets/Card";
import Loading from "../componets/Loading";
function AllSeries() {
  let location = useLocation();
  //   const [nama, setNama] = useState(location.state);
  const { nama } = useParams();

  const [data, setData] = useState("");
  const [load, setLoad] = useState(false);
  const Search = () => {
    zeflix.getSearch(nama).then((res) => {
      setLoad(true);

      setData(res.data.results);
      setLoad(false);
    });
  };

  useEffect(() => {
    Search();
  }, [nama, location]);

  return (
    <div>
      {" "}
      {load && data !== "" && <Loading />}
      <div className="min-h-screen content">
        <div className="pb-9 ">
          <h2 className="text-left px-4  flex items-center gap-x-2 text-white font-semibold leading-none  text-3xl  ">
            {nama} <TfiSearch />
          </h2>
          {data == "" && (
            <>
              <p className="text-white px-4">{nama} tidak ditemukan...</p>
            </>
          )}
        </div>

        <div className="grid lg:grid-cols-5 grid-cols-2 place-items-center lg:gap-x-5 gap-y-3 lg:gap-y-5">
          {/* {load &&
              [1, 2, 3, 4, 5].map((m) => (
                <Skeleton key={m} height="18rem" width="14rem" />
              ))} */}
          {!load && data && data.map((m) => <Card key={m.id} data={m} />)}
        </div>
      </div>
    </div>
  );
}

export default AllSeries;
