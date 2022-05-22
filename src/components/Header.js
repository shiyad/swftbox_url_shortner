import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { MenuAlt1Icon } from "@heroicons/react/solid";

function Header() {
  const links = [
    { name: "Home", link: "/" },
    { name: "Statistics", link: "/statistics" },
    { name: "About", link: "/about" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav>
      {/* <div className="sticky top-0 z-5 bg-amber-400 text-white flex items-center p-2 lg:px-5 shadow-md">
        <Link to="/">
          Swftbox{" "}
          <span className="ml-2 mt-1 text-xs text-black">URL Shortner</span>
        </Link>
        <Link to="/Statistics" className="sticky top-0 text-white">
          Statistics
        </Link>
        <Link to="/About">About</Link>
      </div> */}
      <div className="flex flex-grow bg-amber-400 text-white justify-center sticky shadow-md w-full top-0 left-0">
        <div className="md:flex py-4 w-9/12 items-center justify-between">
          <Link to="/">
            Swftbox{" "}
            <span className="ml-2 mt-1 text-xs text-black">URL Shortner</span>
          </Link>
          <MenuAlt1Icon
            onClick={() => setOpen(!open)}
            className="h-6 text-3xl absolute right-8 top-6 cursor-pointer text-black md:hidden"
          />
          <ul
            className={`md:flex md:items-center text-black md:pb-0 pb-12 absolute md:static 
          md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all 
          duration-500 ease-in-out ${
            open
              ? "top-20 bg-white opacity-90"
              : "top-[-490px] md:opacity-90 opacity-0"
          }`}
          >
            {links.map((link) => (
              <li key={link.name} className="md:ml-8 text-sm md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-black hover:text-gray-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
