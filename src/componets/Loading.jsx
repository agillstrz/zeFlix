import React from "react";
import { ImSpinner2 } from "react-icons/im";
import GoToTop from "./GoToTop";
function Loading() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <ImSpinner2 className="text-7xl text-text animate-spin" />
      </div>
      <GoToTop />
    </>
  );
}

export default Loading;
