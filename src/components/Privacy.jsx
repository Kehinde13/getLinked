import React from "react";
import vector from "../assets/Vector.png";
import manOnLock from "../assets/man on lock.png";
import check from "../assets/list terms.png";

function Privacy() {
  return (
    <div className=" w-full flex py-24 flex-col bg-[#150E28] text-white border-b border-[#903AFF]">
      <div className="md:flex gap-52 justify-between px-10 text-center md:mx-auto">
        <div className="md:text-left">
          <h1 className="font-bold md:text-2xl">
            Privacy Policy and <br />
            <span className="text-[#D434FE] font-bold">Terms</span>
          </h1>

          <p className="text-xs py-5">Last updated on September 12, 2023</p>

          <p className="text-xs py-5 md:w-[400px]">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
          <div className="border border-[#D434FE] p-2 md:w-[400px] md:h-[400px] md:p-5">
            <p className="text-xs py-5">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <h1 className="text-[#D434FE] text-xs font-bold text-left">Licensing Policy</h1>
            <p className="text-xs text-left">Here are terms of our Standard License:</p>
            <ul className="my-5">
              <li className="flex text-xs text-left gap-2 mb-2">
                <img src={check} alt="" className="self-start"/>
                <p>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </li>
              <li className="flex text-xs text-left gap-2">
                <img src={check} alt="" className="self-start"/>
                <p>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </li>
            </ul>
            <button className="mx-auto md:ml-24">
                Read More
            </button>
          </div>
        </div>
        <div className="relative mt-10 md:mt-[-16px]">
            <img src={vector} alt="" className="absolute md:w-[70%]"/>
            <img src={manOnLock} alt="" className="pt-20 md:pt-40 md:w-[65%]"/>
          </div>
      </div>
    </div>
  );
}

export default Privacy;
