"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PopularArrays } from "../../public/Arrays/PopularFurnture";

const Furniture = () => {
  const [liked, setLiked] = useState<Record<number, boolean>>({});

  const handleLiked = (index: number) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [index]: !prevLiked[index], // Removed the space here
    }));
  };
  return (
    <div className="flex flex-col justify-between items-center max-w-screen-xl mx-auto py-4 xl:px-2 px-4 space-y-[2rem] mt-[5rem]">
      <div className="flex flex-col justify-center items-center  py-5">
        <h1 className="CisalackSignature text-[2rem]">Popular</h1>
        <h1 className="Golanerounded text-[2rem]">Furniture Sale Now On!</h1>
      </div>

      <div className="flex flex-col flex-wrap justify-center items-center xl:flex-row gap-x-5 gap-y-5 ">
        {PopularArrays.map((item, index) => (
          <div
            key={index}
            className="p-2 gap-4 bg-gray-100 rounded-lg backdrop-blur hover:scale-105 transition-all ease-in-out duration-150 border border-gray-200"
          >
            <div className="w-[15rem] h-[20rem] relative overflow-hidden rounded-lg">
              <Image
                src={item.image} // Ensure this points to the correct path or URL
                alt={item.name || "Furniture Item"} // Improved alt text for accessibility
                fill // This will let the image fill its parent container
                className="object-cover"
              />
            </div>
            <div className="Golanerounded flex justify-between py-3">
              <span>
                <h2 className="font-bold">{item.name}</h2>
                <p className="text-gray-600">{item.description}</p>
              </span>
              <svg
                onClick={() => handleLiked(index)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-700"
                style={{
                  fill: liked[index] ? "red" : "none", // Toggle the fill color
                  color: liked[index] ? "red" : "gray", // Toggle the stroke color
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Furniture;
