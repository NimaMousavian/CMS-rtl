import React from "react";
import { SlBell } from "react-icons/sl";
import { BsFillBrightnessHighFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start flex flex-row justify-between">
        <div>
          <a className="navbar-item">داشبورد ادمین</a>
        </div>
        <div className="flex flex-row justify-center items-center gap-x-2 ml-3">
          <input class="input input-primary" placeholder="جستجو کنید" />
          <button className="btn btn-primary ">جستجو</button>
          <button className="btn btn-primary btn-sm">
            <SlBell />
          </button>
          <button className="btn btn-primary btn-sm">
            <BsFillBrightnessHighFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
