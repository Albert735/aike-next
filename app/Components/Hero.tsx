import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col justify-between items-center max-w-screen-xl mx-auto py-4 xl:px-2 px-4 space-y-[4rem]">
      <div className="flex flex-col w-full justify-center items-center gap-5 ">
        <h1 className="xl:text-[4rem] text-[2rem] md:text-[2.5rem] text-center  Golanerounded leading-tight">
          Discover elegant & <br /> affordable furniture for <br /> every room.
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.0}
            stroke="currentColor"
            className="size-8 bg-green-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg> */}
        </h1>
        <p className="text-gray-500 leading-loose text-center  text-sm xl:text-lg">
          Transform your furniture with sophisticated{" "}
          <span className="CisalackSignature xl:text-[2rem] px-2">stylish</span>
          pieces <br /> and create a serene and inviting home
        </p>
      </div>

      {/* images  */}
      <div className="flex justify-center items-center w-full gap-10 pt-16 ">
        <div className="w-[20rem] h-[30rem] relative overflow-hidden rounded-lg">
          <Image
            src="/assets/rendering-elegant-interior .jpg"
            fill
            priority
            sizes="6"
            alt="hero"
            className="object-cover"
          />
        </div>

        <div className="w-[20rem]  h-[30rem] relative bottom-20  overflow-hidden rounded-lg">
          <Image
            src="/assets/modern-styled-entryway.jpg"
            fill
            priority
            sizes="6"
            alt="hero"
            className=" top-5 object-cover"
          />
        </div>

        <div className="w-[20rem] h-[30rem] relative overflow-hidden rounded-lg">
          <Image
            src="/assets/view-nordic-minimalism-japanese-wabi-sabi-interior-design-blend.jpg"
            fill
            priority
            sizes="6"
            alt="hero"
            className="object-cover"
          />
        </div>
      </div>

      {/* delivery   */}

      <div className="flex justify-center items-center w-full gap-2 xl:gap-5">
        <button className="bg-black text-[10px] xl:text-sm text-white px-3 py-2 rounded-md">
          Shop now
        </button>
        <span className="flex justify-start items-center gap-2 hover:bg-black/10 px-3 py-2 rounded-md">
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
          <p className="text-[10px] xl:text-sm">Free Delivery</p>
        </span>
        <span className="flex justify-start items-center gap-2  hover:bg-black/10 px-3 py-2 rounded-md">
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
          <p className="text-[10px] xl:text-sm">Always on-time</p>
        </span>
      </div>

      {/* profile  */}

      <div className="flex justify-center -space-x-3 items-center  ">
        <Image
          height={50}
          width={50}
          className="h-[3rem] w-[3rem] object-cover rounded-full"
          src="/assets/close-up-young-person-barbeque.jpg"
          alt=""
        />
        <Image
          height={50}
          width={50}
          className="h-[3rem] w-[3rem] object-cover rounded-full "
          src="/assets/front-view-smiley-man-outdoors-city.jpg"
          alt=""
        />
        <Image
          height={50}
          width={50}
          className="h-[3rem] w-[3rem] object-cover rounded-full "
          src="/assets/porait-cute-boy-cafe.jpg"
          alt=""
        />
        <Image
          height={50}
          width={50}
          className="h-[3rem] w-[3rem] object-cover rounded-full "
          src="/assets/portrait-upset-american-black-person.jpg"
          alt=""
        />
      </div>

      <div className="flex justify-center items-center">
        <div className="flex gap-7 leading-loose flex-wrap justify-center items-center">
          <p className="text-center ">
            <b>100%</b> <br />
            <span className="text-gray-500">Brand new</span>
          </p>
          <p className="text-center ">
            <b>120,000+</b> <br />
            <span className="text-gray-500">items sold out</span>
          </p>
          <div className="text-center ">
            <b>Ratings</b> <br />
            <div className="text-gray-500 flex justify-center items-center gap-2">
              4.8
              <Image
                src="/assets/icons8-star-100.png"
                alt=""
                height={18}
                width={18}
              />
              <Image
                src="/assets/icons8-star-100.png"
                alt=""
                height={18}
                width={18}
              />
              <Image
                src="/assets/icons8-star-100.png"
                alt=""
                height={18}
                width={18}
              />
              <Image
                src="/assets/icons8-star-100.png"
                alt=""
                height={18}
                width={18}
              />
              <Image
                src="/assets/icons8-star-half-empty-100.png"
                alt=""
                height={18}
                width={18}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
