import React from "react";
import numbers from "../assets/numbers.png";

function Timeline() {
  return (
    <div name="Timeline" className=" w-full py-10 flex flex-col bg-[#150E28] text-white">
      <div className="text-center w-[100%] m-auto mt-10">
        <h1 className="font-bold text-2xl">Timeline</h1>
        <p className="text-sm md:w-[30%] m-auto">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>

      {/* Mobile Timeline */}

      <div className="flex mt-10 ml-5 text-xs justify-between md:hidden">
        <div>
          <img src={numbers} alt="" className="h-full w-full" />
        </div>
        <div className="w-[90%] flex flex-col gap-5 h-full">
          <div className="p-2">
            <h1 className="text-[#D434FE] font-bold my-1">
              Hackathon Announcement
            </h1>
            <p className="py-2">
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
            <h1 className="text-[#D434FE] font-bold my-1">November 18, 2023</h1>
          </div>
          <div className="p-2">
            <h1 className="text-[#D434FE] font-bold my-1">
              Teams Registration begins
            </h1>
            <p>
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register
            </p>
            <h1 className="text-[#D434FE] font-bold mt-4">November 18, 2023</h1>
          </div>
          <div className="pt-5">
            <h1 className="text-[#D434FE] font-bold my-1">
              Teams Registration ends
            </h1>
            <p className="py-2">
              Interested Participants are no longer Allowed to register
            </p>
            <h1 className="text-[#D434FE] font-bold pt-4">November 18, 2023</h1>
          </div>
          <div className="p-2 mt-4">
            <h1 className="text-[#D434FE] font-bold mb-3">
              Announcement of the accepted teams and ideas
            </h1>
            <p className="">
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </p>
            <h1 className="text-[#D434FE] font-bold pt-5">November 18, 2023</h1>
          </div>
          <div className="p-2">
            <h1 className="text-[#D434FE] font-bold my-1">
              Getlinked Hackathon 1.0 Offically Begins
            </h1>
            <p className="py-2">
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions
            </p>
            <h1 className="text-[#D434FE] font-bold pt-3">November 18, 2023</h1>
          </div>
          <div className="p-2">
            <h1 className="text-[#D434FE] font-bold my-1">Demo Day</h1>
            <p>
              Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day
            </p>
            <h1 className="text-[#D434FE] font-bold pt-3">November 18, 2023</h1>
          </div>
        </div>
      </div>

      {/* Desktop Timeline*/}
      <div className="md:flex justify-between gap-10 hidden mt-16">
        <div className="mt-10 text-right">
          <div className="mt-5 h-[100px]">
            <h1 className="text-[#D434FE] font-bold mb-5 text-lg">Hackathon Announcement</h1>
            <p>
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </div>
          <div className="mt-36 h-[100px]">
            <h1 className="text-[#D434FE] font-bold mb-5 text-lg">November 18, 2023</h1>
          </div>
          <div className="mt-16 h-[100px]">
            <h1 className="text-[#D434FE] font-bold mb-5 text-lg">Teams Registration ends</h1>
            <p>Interested Participants are no longer Allowed to register</p>
          </div>
          <div className="mt-32 h-[100px]">
            <h1 className="text-[#D434FE] font-bold mb-5 text-lg">November 18, 2023</h1>
          </div>
          <div className="pt-8 h-[100px]">
            <h1 className="text-[#D434FE] font-bold mb-5 text-lg">Getlinked Hackathon 1.0 Offically Begins</h1>
            <p>
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions
            </p>
          </div>
          <div className="pt-40 h-[100px]">
            <h1 className="text-[#D434FE] font-bold text-lg">November 18, 2023</h1>
          </div>
        </div>
        <div>
          <img src={numbers} alt="" className="w-[40px] h-full" />
        </div>
        <div className="mt-10 text-left" >
          <div className="pt-20 h-[100px]">
            <h1 className="text-[#D434FE] font-bold text-lg">November 18, 2023</h1>
          </div>
          <div className="pt-32 h-[100px]">
            <h1 className="text-[#D434FE] font-bold text-lg">Teams Registration begins</h1>
            <p>
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register
            </p>
          </div>
          <div className="pt-52 h-[100px]">
            <h1 className="text-[#D434FE] font-bold text-lg">November 18, 2023</h1>
          </div>
          <div className="pt-48 h-[100px]">
            <h1 className="text-[#D434FE] font-bold text-lg">Announcement of the accepted teams and ideas</h1>
            <p>
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </p>
          </div>
          <div className="pt-52 h-[100px]">
            <h1 className="text-[#D434FE] font-bold text-lg">November 18, 2023</h1>
          </div>
          <div className="pt-36 h-[100px]">
            <h1 className="text-[#D434FE] font-bold text-lg">Demo Day</h1>
            <p>
              Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
