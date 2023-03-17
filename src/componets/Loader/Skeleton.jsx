import React from "react";
import "../Loader/skeleton.css";
export default function Skeleton({ style }) {
  return <div className={`skeleton rounded-lg  ${style}`}></div>;
}
