import React, { useEffect, useState } from "react";
import zeflix from "../api/get.api";

function Riviews({ id }) {
  const [riview, setRiview] = useState("");
  const getRiview = () => {
    zeflix.getRiview(id).then((res) => setRiview(res.data));
  };
  useEffect(() => {
    getRiview();
  }, []);
  console.log(riview.results == "");
  return (
    <>
      {riview && (
        <div className="px-14 pb-10">
          <h2 className="text-2xl font-semibold my-3 text-white">Riviews</h2>
          <div className="grid grid-cols-2 w-full gap-y-8   gap-x-3">
            {riview.results == "" ? (
              <h1 className="text-white">-</h1>
            ) : (
              riview.results.map((m) => (
                <div key={m.id} className=" ">
                  <div className="w-[30%] flex flex-wrap gap-x-2 ">
                    <div className="avatar">
                      <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                          src={`https://spesialis1.orthopaedi.fk.unair.ac.id/wp-content/uploads/2021/02/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg}`}
                        />
                      </div>
                    </div>
                    <p className="text-white">{m.author}</p>
                  </div>
                  <div className="w-[80%] pt-2">
                    <p className="text-[14px] text-white">
                      {m.content.slice(0, 300)}...
                      <a
                        className="hover:text-text"
                        target={"_blank"}
                        href={m.url}
                      >
                        More
                      </a>
                    </p>
                  </div>
                </div>
              ))
            )}

            {/* <div className="w-1/2"></div> */}
          </div>
        </div>
      )}
    </>
  );
}

export default Riviews;
