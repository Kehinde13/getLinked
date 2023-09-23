import React from "react";
import logo from "../assets/getlinked.png";
import facebook from "../assets/Vector (1).png";
import Twitter from "../assets/Twitter.png";
import Instagram from "../assets/mdi_instagram.png";
import linkedIn from "../assets/ri_linkedin-fill.png";
import phone from "../assets/Vector (2).png";
import location from "../assets/Group.png";

function Footer() {
  return (
    <div className=" w-full pt-10 flex flex-col bg-[#100B20] text-white">
      <div className="px-7 md:flex gap-48 md:mt-10">
        <div className="">
          <img
            src={logo}
            alt=""
            className="w-[100px] md:w-[200px] self-center"
          />
          <p className="text-sm py-10 md:w-[500px]">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <p className="text-sm my-10">
            Terms of Use
            <span className="bg-[#D434FE] rounded-sm text-[#D434FE] w-5 h-3 mx-5">
              1
            </span>
            Privacy Policy
          </p>
        </div>

        <div className="md:flex md:flex-col">
          <div>
            <h1 className="text-[#D434FE] font-bold">Useful Links</h1>
            <ul className="flex flex-col gap-5 mt-5">
              <li>Overview</li>
              <li>Timeline</li>
              <li>FAQs</li>
              <li>Register</li>
            </ul>
          </div>

          <div className="flex gap-5 my-5">
            <h1 className="text-[#D434FE]">Follow us</h1>
            <ul className="flex gap-4 self-start mt-[-5]">
              <li>
                <img src={Instagram} alt="" />
              </li>
              <li>
                <img src={Twitter} alt="" className="mt-1" />
              </li>
              <li>
                <img src={facebook} alt="" />
              </li>
              <li>
                <img src={linkedIn} alt="" />
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h1 className="text-[#D434FE] mt-20 md:mt-0 font-bold">Contact Us</h1>
          <div className="flex gap-2 my-5">
            <img src={phone} alt="" className="self-center" />
            +234 6707653444
          </div>
          <div className="flex gap-2">
            <img src={location} alt="" className="self-start" />
            27,Alara Street <br />
            Yaba 100012 <br />
            Lagos State
          </div>
        </div>
      </div>
      <p className="text-sm text-center my-10">
        All rights reserved. © getlinked Ltd.
      </p>
    </div>
  );
}

export default Footer;
