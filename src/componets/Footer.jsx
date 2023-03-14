import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
function Footer() {
  return (
    <div className="flex lg:flex-row flex-col items-center w-full lg:items-start lg:justify-evenly lg:px-20 border border-transparent border-t-text text-white bg-main/10 mt-20 py-10 ">
      <div className="grid lg:text-lg text-sm lg:grid-cols-4 gap-x-10 px-5 grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold pb-2 text-text">zeFlix</h2>
          <div className="flex gap-x-4 ">
            <BsFacebook />
            <BsInstagram />
            <BsTwitter />
          </div>
        </div>
        <div className="flex flex-col leading-7 ">
          <p>FAQ</p>
          <p>Investor Relations</p>
          <p>Ways to Watch</p>
          <p>Corporate Information</p>
          <p>Only on zeFlix</p>
        </div>
        <div className="flex flex-col leading-7">
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Terms of Use</p>
          <p>Contact Us</p>
        </div>
        <div className=" flex flex-col leading-7">
          <p>Media Center</p>
          <p>Buy Gift Cards</p>
          <p>Cookie Preference</p>
          <p>Legal Notices</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
