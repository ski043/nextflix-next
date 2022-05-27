import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full absolute top-0 z-30">
      <div className="container flex items-center w-full justify-between mx-auto px-6 py-5">
        <Link href="/">
          <a>
            <h1 className="font-bold text-3xl text-red-500">
              {"netflix".toUpperCase()}
            </h1>
          </a>
        </Link>
        <div className="flex items-center">
          <Link href="/login">
            <a>
              <button className="text-white border border-white py-2 px-5 mr-6 rounded-lg cursor-pointer">
                Log In
              </button>
            </a>
          </Link>

          <a href="/api/auth/login">
            <button className="text-white bg-red-500 px-5 py-2 rounded-lg cursor-pointer">
              Sign In
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
