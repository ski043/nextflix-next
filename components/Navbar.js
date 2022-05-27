import React from "react";

const Navbar = () => {
  return (
    <div className="w-full absolute top-0 z-10">
      <div className="container flex items-center w-full justify-between mx-auto px-6 py-5">
        <h1 className="font-bold text-3xl text-red-500">
          {"netflix".toUpperCase()}
        </h1>
        <div className="flex items-center">
          <button className="text-white border border-white py-2 px-5 mr-6 rounded-lg">
            Log In
          </button>
          <button className="text-white bg-red-500 px-5 py-2 rounded-lg">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
