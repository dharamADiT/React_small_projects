import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between ">
      <div>
        <img src=".\public\brand_logo.png" alt="nike offical logo" />
      </div>

      <ul className="flex uppercase gap-5 text-xs">
        <li>home</li>
        <li>contact</li>
        <li>location</li>
        <li>about</li>
      </ul>

      <button className="px-3 py-1 border bg-[#D01C28] text-sm text-white">
        login
      </button>
    </nav>
  );
};

export default Navbar;
