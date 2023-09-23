import React from "react";
import designer from "../assets/man and lady.png";

function Judging() {
  return (
    <div className=" w-full flex bg-[#150E28] text-white border-b border-[#903AFF]">
      <div className="md:grid grid-cols-2 justify-between gap-10 max-w-[1000px] mx-auto mt-10">
        <div className="mt-32">
          <img src={designer} alt="" className="mx-auto " />
        </div>
        <div className="md:ml-20 md:mt-24 text-center md:text-left my-10 p-1">
          <h1 className="text-xl md:text-1xl my-2 font-bold">
            Judging Criteria
            <br />
            <span className="text-[#D434FE]">Key attributes</span>
          </h1>
          <div className="px-5 md:px-0 text-sm flex flex-col gap-3">
            <p>
              <span className="text-[#FF26B9]">Innovation and Creativity:</span>
              Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or
              introduces innovative features.
            </p>
            <p >
              <span className="text-[#FF26B9]">Functionality:</span>
              Assess how well the solution works. Does it perform its intended
              functions effectively and without major issues? Judges would
              consider the completeness and robustness of the solution.
            </p>
            <p >
              <span className="text-[#FF26B9]">Impact and Relevance: </span>
              Determine the potential impact of the solution in the real world.
              Does it address a significant problem, and is it relevant to the
              target audience? Judges would assess the potential social,
              economic, or environmental benefits.
            </p>
            <p >
              <span className="text-[#FF26B9]">Technical Complexity: </span>
              Evaluate the technical sophistication of the solution. Judges
              would consider the complexity of the code, the use of advanced
              technologies or algorithms, and the scalability of the solution.
            </p>
            <p >
              <span className="text-[#FF26B9]">
                Adherence to Hackathon Rules:{" "}
              </span>
              Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Judging;
