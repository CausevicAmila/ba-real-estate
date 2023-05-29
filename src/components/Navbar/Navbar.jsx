import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/balogo.png";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-lightgray border-b border-gray-200">
      <div className="flex items-center font-semibold font-inter text-primary text-2xl leading-8 ">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
        <a href="/">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-15 m-5" />
          </a>
          <div className="md:hidden font-semibold font-inter text-primary text-3xl mt-8" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden items-center font-semibold font-inter text-primary text-2xl leading-8 mt-10 gap-3">
        <NavLinks />
          <li>
            <Link to="/aboutus" className="py-7 px-3 inline-block">
              ABOUT US
            </Link>
          </li>

          <li>
            <Link to="/form" className="py-7 px-3 inline-block">
              SELL
            </Link>
          </li>
          <li>
            <Link to="/login" className="py-7 px-3 inline-block">
              LOG IN
            </Link>
          </li>
        </ul>    
        
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-28 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
        <NavLinks />
          <li>
            <Link to="/aboutus" className="py-7 px-3 inline-block">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="/sellform" className="py-7 px-3 inline-block">
              SELL
            </Link>
          </li>
          <li>
          <Link to="/login" className="py-7 px-3 inline-block">
            LOG IN 
          </Link>
        </li>
          <div className="py-5">
            
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
