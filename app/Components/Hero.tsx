import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col justify-between items-center max-w-screen-xl mx-auto py-4 xl:px-2 px-4">
      <div className="flex flex-col w-full  justify-center items-center ">
        <h1 className="">
          Discover elegant & affordable furniture for every room.
        </h1>
        <p>
          Transform your furniture with sophisticated and stylish pieces and
          create a serene and inviting home
        </p>
      </div>
      <div className="flex justify-between items-center w-full ">
        <Image
          src="/assets/rendering-elegant-interior .jpg"
          width={300}
          height={300}
          alt="hero"
        />
        <Image
          src="/assets/modern-styled-entryway.jpg"
          width={300}
          height={300}
          alt="hero"
        />
        <Image
          src="/assets/view-nordic-minimalism-japanese-wabi-sabi-interior-design-blend.jpg"
          width={300}
          height={300}
          alt="hero"
        />
      </div>

      <div className="flex justify-center items-center w-full ">
        <button>Shop now</button>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
            />
          </svg>
          <p>Free Delivery</p>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p>Always on-time</p>
        </span>
      </div>
    </div>
  );
};

export default Hero;
