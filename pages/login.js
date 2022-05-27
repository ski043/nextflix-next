import Image from "next/image";
import React from "react";
import img from "../public/img.jpeg";

const login = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="absolute w-full h-full top-0 left-0 bg-black/50 z-[1] "></div>
      <Image src={img} alt="background image" layout="fill" objectFit="cover" />
      <div className="w-[350px] relative z-10 text-white flex flex-col items-center justify-center h-[450px] bg-black/70">
        <h1 className="absolute top-8 left-8 text-3xl font-bold">Log In</h1>
        <div className="flex flex-col w-3/4">
          <div className="flex flex-col">
            <label>Your Email</label>
            <input
              className="p-2 rounded-lg mt-2"
              type="email"
              autoComplete="email"
              placeholder="Your Email..."
            />
          </div>
          <div className="flex flex-col mt-6">
            <label>Password</label>
            <input
              className="p-2 rounded-lg mt-2"
              type="password"
              placeholder="Your Password..."
            />
          </div>
          <div className="mx-auto mt-6">
            <button className="bg-red-500 py-2 px-6 rounded-lg" type="button">
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
