"use client";

import React from "react";
import Image from "next/image";

const Details = ({
  params: paramsPromise,
}: {
  params: Promise<{ productId: string }>;
}) => {
  // Unwrap the promise with `React.use()`
  const params = React.use(paramsPromise);
  return (
    <div
      className="flex flex-col lg:flex-row justify-between h-[100vh] items-center max-w-screen-xl mx-auto py-4 xl:px-2 px-4 gap-[2rem] bg-sky-400"
      id="productDetails"
    >
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold text-gray-900">Product Details</h1>
        <div className="flex gap-4">
          <div className="w-[30rem] h-[25rem] relative overflow-hidden rounded-lg">
            <Image
              src="/assets/3d-modern-lamp-design.jpg"
              alt=""
              className="hover:scale-110 transition-all ease-in-out delay-150 duration-150"
              fill
              sizes="6"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-[5rem] h-[5rem] relative overflow-hidden rounded-lg hover:border-2">
              <Image
                src="/assets/3d-modern-lamp-design.jpg"
                alt=""
                className="object-fit block"
                fill
                sizes="6"
              />
            </div>
            <div className="w-[5rem] h-[5rem] relative overflow-hidden rounded-lg">
              <Image
                src="/assets/3d-modern-lamp-design.jpg"
                alt=""
                className="object-fit"
                fill
                sizes="6"
              />
            </div>
            <div className="w-[5rem] h-[5rem] relative overflow-hidden rounded-lg">
              <Image
                src="/assets/3d-modern-lamp-design.jpg"
                alt=""
                className="object-fit"
                fill
                sizes="6"
              />
            </div>
            <div className="w-[5rem] h-[5rem] relative overflow-hidden rounded-lg">
              <Image
                src="/assets/3d-modern-lamp-design.jpg"
                alt=""
                className="object-fit"
                fill
                sizes="6"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center gap-4">
          <h2 className=" ">Recently Viewed</h2>
          <div className="flex gap-2">
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
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center w-full gap-4">
          <div>
            <div className="w-[10rem] h-[10rem] relative overflow-hidden rounded-lg">
              <Image
                src="/assets/3d-modern-lamp-design.jpg"
                alt=""
                className="hover:scale-110 transition-all ease-in-out delay-150 duration-150"
                fill
                sizes="6"
              />
            </div>{" "}
            <span className="flex justify-between items-center">
              <p>Madonnut</p>
              <p>$200</p>
            </span>
          </div>
          <div>
            <div className="w-[10rem] h-[10rem] relative overflow-hidden rounded-lg">
              <Image
                src="/assets/3d-modern-lamp-design.jpg"
                alt=""
                className="hover:scale-110 transition-all ease-in-out delay-150 duration-150"
                fill
                sizes="6"
              />
            </div>{" "}
            <span className="flex justify-between items-center">
              <p>Madonnut</p>
              <p>$200</p>
            </span>
          </div>
          <div>
            <div className="w-[10rem] h-[10rem] relative overflow-hidden rounded-lg">
              <Image
                src="/assets/3d-modern-lamp-design.jpg"
                alt=""
                className="hover:scale-110 transition-all ease-in-out delay-150 duration-150"
                fill
                sizes="6"
              />
            </div>{" "}
            <span className="flex justify-between items-center">
              <p>Madonnut</p>
              <p>$200</p>
            </span>
          </div>
        </div>
      </div>

      <hr className="border-gray-100 border  h-[100dvh] w-[1px]" />

      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Product Name {params.productId}
        </h2>
      </div>
    </div>
  );
};

export default Details;
