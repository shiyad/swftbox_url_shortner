import React from "react";

function Header() {
  return (
    <div className="sticky top-0 z-5 bg-amber-400 text-white flex items-center p-2 lg:px-5 shadow-md">
      Swftbox <span className="ml-2 mt-1 text-xs text-black">URL Shortner</span>
    </div>
  );
}

export default Header;
