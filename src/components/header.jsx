import logo from "../image/logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaRegCopyright,
} from "react-icons/fa";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header className="container p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <img src={logo} alt="logo" style={{ width: "40px" }} />
          <span className="text-[12px] text-white w-full">
            digital currency
          </span>
        </div>
        <span
          onClick={() => setMenu(!menu)}
          className="relative z-20 text-white cursor-pointer md:hidden"
        >
          {menu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </span>

        <div className="hidden md:block">
          <ul className="flex text-sm text-white gap-x-5">
            <NavLink to="/">
              <li className="pl-2 cursor-pointer">Home</li>
            </NavLink>

            <NavLink to="/exchangRate">
              <li className="pl-2 cursor-pointer">Exchange rate</li>
            </NavLink>

            <NavLink to="/about">
              <li className="pl-2 cursor-pointer">about app</li>
            </NavLink>
          </ul>
        </div>
      </div>

      <div className="md:hidden">
        <div
          className={
            menu
              ? "w-[100%] top-0 h-full right-0 fixed  bg-black  bg-opacity-50  transition-all ease-linear duration-100 z-10 backdrop-blur-[30px]"
              : "w-[100%] top-0 right-0 h-full fixed bg-black  bg-opacity-0 transition-all ease-linear duration-100 z-10 hidden"
          }
        >
          <div
            className={
              menu
                ? "bg-white w-[70%] h-full  transition-all ease-linear duration-100 relative right-0 z-90"
                : "bg-white w-[70%]  h-full  transition-all ease-linear duration-100 relative right-[350px]"
            }
          >
            <div className="flex items-center justify-center">
              <div className="w-[80%] p-2">
                <div className="flex items-center mt-[30px] gap-x-3">
                  <img src={logo} alt="logo" style={{ width: "40px" }} />
                  <span className="text-[12px] text-slate-800 w-full font-bold">
                    digital currency
                  </span>
                </div>

                <ul onClick={() => setMenu(false)} className="mt-10">
                  <NavLink to="/" exact activeClassName="text-purple-500">
                    <li className="pl-2 mb-4 border-l-[3px] border-slate-900">
                      Home
                    </li>
                  </NavLink>

                  <NavLink to="/exchangRate" activeClassName="text-purple-500">
                    <li className="pl-2 border-l-[3px] border-slate-900 mb-4">
                      Exchange rate
                    </li>
                  </NavLink>

                  <NavLink to="/about" activeClassName="text-purple-500">
                    <li className="pl-2 border-l-[3px] border-slate-900 mb-4">
                      about app
                    </li>
                  </NavLink>
                </ul>

                <div className="flex items-center justify-center mt-[400px]" >
                  <div className="flex items-center gap-x-2">
                    <FaRegCopyright />
                    <span className="text-sm">Copy right</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
