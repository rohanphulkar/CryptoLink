import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 text-center"
          aria-label="Global"
        >
          <Link to="/">
            <p className="flex-none text-2xl border-b-2 border-black font-black">
              CRYPTOLINK
            </p>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
