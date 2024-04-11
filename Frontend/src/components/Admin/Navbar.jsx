import React from "react";
import { BsPerson, BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-20">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-black rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-black dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <Link to="/" className="flex ms-2 md:me-24">
                {/* <img
                  src="https://ik.imagekit.io/gokulnathk/PartyEvent/GoldenGlitz(1).svg"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                /> */}
              <p className="text-[25px] font-title ml-4"> Golden Glitz</p>
              </Link>
            </div>
            <div className="pr-10">
                <button >
                  <div className="flex flex-row">
                    <div className="px-4">
                    <BsPersonCircle size={25}/>
                    </div>
                    <div className="">
                    <p className="font-bold">Profile</p>
                    </div>
                  </div>
                </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
