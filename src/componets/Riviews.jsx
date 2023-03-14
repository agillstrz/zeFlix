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
        <div className="lg:px-14 px-4 lg:pb-10">
          <h2 className="text-2xl font-semibold my-3 text-white">Riviews</h2>
          <div className="grid  lg:grid-cols-2 w-full gap-y-8   gap-x-3">
            {riview.results == "" ? (
              <h1 className="text-white">-</h1>
            ) : (
              riview.results.map((m) => (
                <div key={m.id} className="flex lg:block">
                  <div className="w-[30%] justify-center lg:justify-start items-center flex-col lg:flex-row gap-y-2 lg:gap-y-0 flex flex-wrap gap-x-2 ">
                    <div className="avatar">
                      <div className="lg:w-10 lg:h-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                          src={`https://spesialis1.orthopaedi.fk.unair.ac.id/wp-content/uploads/2021/02/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg}`}
                        />
                      </div>
                    </div>
                    <p className="text-white lg:text-[20px] text-[12px]">
                      {m.author}
                    </p>
                  </div>
                  <div className="w-[80%] pt-2">
                    <p className="text-[10px] lg:hidden  block text-white">
                      {m.content.slice(0, 300)}...
                      <a
                        className="hover:text-text"
                        target={"_blank"}
                        href={m.url}
                      >
                        More
                      </a>
                    </p>
                    <p className="text-[14px] hidden lg:block text-white">
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
