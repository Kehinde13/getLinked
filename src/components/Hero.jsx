import React from "react";
import glowBall from "../assets/glowBall.png";
import man from "../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import fire from "../assets/fire.png";
import chain from "../assets/chain.png";
import bub from "../assets/idea bub.png";
import dash from "../assets/dash.png";
import star from "../assets/star.png";
import flare from "../assets/Purple-Lens-Flare-PNG.png"
import Typewriter from "typewriter-effect";
import { Link as RouterLink } from "react-router-dom";

function Hero() {
  return (
    <div className="text-center md:text-left w-full h-full bg-[#150E28] text-white px-1 border-b border-[#903AFF]">
      <div className=" mx-auto">
        <div className="md:text-right md:text-3xl italic md:font-bold py-5 md:mr-20">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Igniting a Revolution in HR Innovation")
                .pauseFor(1000)
                .start();
            }}
          />
          <img
            src={dash}
            alt=""
            className="float-right mr-3 md:mt-10 md:w-[200px] md:absolute right-20 top-24"
          />
        </div>
        <img src={flare} alt="" className="absolute top-20 md:top-[-300px] " />
        <div className="md:flex justify-between mt-20 md:mt-26 gap-16">
          <div className="md:ml-28 my-5 md:mt-18">
            <div className="text-3xl md:text-6xl font-bold ">
              <div>
                <img
                  src={bub}
                  alt=""
                  className="w-[20px] mb-[-10px] h-[20px] ml-[240px] md:w-[50px] md:h-[50px] md:ml-96"
                />
                <h1>getlinked Tech</h1>
              </div>
              <div className="flex ml-5 md:ml-0 mt-3">
                Hackathon <span className="text-[#D434FE]">1.0</span>
                <img
                  src={chain}
                  alt=""
                  className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] md:mt-[16px] md:mx-1"
                />
                <img
                  src={fire}
                  alt=""
                  className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] md:mt-[16px] md:mx-1"
                />
              </div>
            </div>
            <p className="my-10">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <button>
              <RouterLink to={'/Register'}>
                Register
              </RouterLink>              
            </button>
            <div className="my-10 text-3xl md:text-5xl pt-10">00h 00m 00s</div>
          </div>
          <div className="md:mr-[-72px]">
            <img
              src={glowBall}
              alt=""
              className="absolute w-[90%] md:w-[40%]"
            />
            <img src={man} alt="" className="md:w-[90%]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
