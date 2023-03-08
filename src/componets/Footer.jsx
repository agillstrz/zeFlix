import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
function Footer() {
  return (
    <div className="flex  justify-evenly px-20 border border-transparent border-t-text text-white bg-main/10 mt-20 py-10 ">
      <div>
        <h2 className="text-3xl font-bold pb-2 text-text">zeFlix</h2>
        <div className="flex gap-x-4 ">
          <BsFacebook className="text-lg" />
          <BsInstagram className="text-lg" />
          <BsTwitter className="text-lg" />
        </div>
      </div>
      <div className="flex flex-col leading-7  text-lg">
        <p>FAQ</p>
        <p>Investor Relations</p>
        <p>Ways to Watch</p>
        <p>Corporate Information</p>
        <p>Only on zeFlix</p>
      </div>
      <div className="flex flex-col leading-7 text-lg">
        <p>Help Center</p>
        <p>Jobs</p>
        <p>Terms of Use</p>
        <p>Contact Us</p>
      </div>
      <div className=" flex flex-col leading-7 text-lg">
        <p>Media Center</p>
        <p>Buy Gift Cards</p>
        <p>Cookie Preference</p>
        <p>Legal Notices</p>
      </div>
    </div>
  );
}

export default Footer;
