import React, { useState } from "react";
import logo from "../assets/getlinked.png";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function NavBar() {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  return (
    <div className=" w-full h-20 flex justify-between items-center bg-[#150E28] text-white relative border-b border-[#903AFF]">
      <div>
        <img src={logo} alt="logo" className="w-[150px] p-5" />
      </div>

      <div className="hidden md:flex gap-20 mx-28 cursor-pointer ">
        <ul className="flex gap-10 py-7 nav-li">
          <li>
            <Link to="Timeline" smooth={true} duration={500}>
              Timeline
            </Link>
          </li>
          <li>
            <Link to="Overview" smooth={true} duration={500}>
              Overview
            </Link>
          </li>
          <li>
            <Link to="FAQs" smooth={true} duration={500}>
              FAQs
            </Link>
          </li>
          <li>
            <RouterLink to={"/Contact"} duration={500}>
              Contact
            </RouterLink>
          </li>
        </ul>

        <button>
          <RouterLink to={'/Register'}>
            Register
          </RouterLink> 
        </button>
      </div>

      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <img src={close} alt="close" className=" p-5" />
        ) : (
          <img src={menu} alt="menu" className=" p-5" />
        )}
      </div>

      {/* Mobile Menu */}

      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen flex flex-col justify-center pl-20 bg-[#1E1E1E] gap-8 text-md cursor-pointer"
            : "hidden"
        }
      >
        <li>
          <Link onClick={handleNav} to="home" smooth={true} duration={500}>
            Timeline
          </Link>
        </li>
        <li>
          {" "}
          <Link onClick={handleNav} to="about" smooth={true} duration={500}>
            Overview
          </Link>
        </li>
        <li>
          {" "}
          <Link onClick={handleNav} to="skills" smooth={true} duration={500}>
            FAQs
          </Link>
        </li>
        <li>
          {" "}
          <RouterLink to={'/Contact'} onClick={handleNav} smooth={true} duration={500}>
            Contact
          </RouterLink>
        </li>

        <button className="ml-[-140px]">
          <RouterLink to={'/Register'}>
            Register
          </RouterLink> 
        </button>
  
       </ul>
    </div>
  );
}

export default NavBar;
