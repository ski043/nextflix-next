import Image from "next/image";
import React from "react";
import img from "../public/img.jpeg";

const Main = () => {
  return (
    <div className="w-screen h-screen">
      <div className="absolute w-full h-full top-0 left-0 bg-black/50 z-[1] "></div>
      <Image src={img} alt="background image" layout="fill" objectFit="cover" />
      <div className="text-white relative z-10 flex flex-col items-center justify-center h-full text-center container mx-auto px-4">
        <h1 className="text-4xl font-bold">
          Unlimited movies, TV shows, and more.
        </h1>
        <h3 className="text-xl font-medium pt-2">
          Watch anywhere. Cancel anytime.
        </h3>
        <p className="font-normal text-lg pt-2">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex flex-col w-full mt-8">
          <input
            className="p-4 rounded-lg w-3/4 mx-auto "
            type="text"
            placeholder="Email address..."
          />
          <div className="mt-4">
            <button className="bg-red-500 px-4 py-2 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
