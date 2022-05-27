import Image from "next/image";
import React from "react";
import img from "../public/img.jpeg";

const Main = () => {
  return (
    <div className="w-screen h-screen">
      <div className="absolute w-full h-full top-0 left-0 bg-black/50 z-[1] "></div>
      <Image src={img} alt="background image" layout="fill" objectFit="cover" />
      <div className="text-white relative z-10 flex flex-col items-center justify-center h-full text-center container mx-auto px-4">
        <h1 className="text-4xl font-bold lg:text-5xl">
          Unlimited movies, TV shows, and more.
        </h1>
        <h3 className="text-xl font-medium pt-2 lg:text-2xl">
          Watch anywhere. Cancel anytime.
        </h3>
        <p className="font-normal text-lg pt-2 lg:text-lg">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex flex-col w-full mt-8 sm:flex-row lg:w-[800px]">
          <input
            className="h-16 px-6 rounded-lg w-3/4 mx-auto sm:mx-0 sm:rounded-none"
            type="text"
            placeholder="Email address..."
          />
          <div className="mt-4 sm:mt-0 sm:w-1/4 bg-red-500 ">
            <button className=" rounded-lg sm:h-16">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
