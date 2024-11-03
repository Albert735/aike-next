"use client";

import React from "react";
import Image from "next/image";
import Rating from "../../Components/Rating";

const Details = ({
  params: paramsPromise,
}: {
  params: Promise<{ productId: string }>;
}) => {
  // Unwrap the promise with `React.use()`
  const params = React.use(paramsPromise);

  return (
    <div
      className="flex flex-col lg:flex-row justify-between items-start h-[100vh] max-w-screen-xl mx-auto pt-[5rem] xl:px-2 px-4 gap-[4rem]"
      id="productDetails"
    >
      <div className="flex flex-col gap-[2rem] w-full">
        <h1 className="Golanerounded text-3xl font-bold text-gray-900">
          Product Details
        </h1>
        <div className="flex gap-4">
          <div className="w-[30rem] h-[25rem] relative overflow-hidden rounded-md">
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
          <div className="flex gap-5">
            <span className="flex justify-center items-center bg-gray-200 rounded-full p-1 h-8 w-8 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            <span className="flex justify-center items-center bg-gray-200 rounded-full p-1 h-8 w-8 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
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

      <hr className="flex place-self-auto border-gray-100 border  h-[70dvh] w-[1px]" />

      <div className="flex flex-col gap-10 w-full">
        {/* product details  */}
        <span className="flex justify-between items-start">
          <span className="flex flex-col gap-2">
            <h2 className=" Golanerounded text-2xl font-bold text-gray-900">
              Maddonnut {params.productId}
            </h2>
            <p className="Golanerounded text-gray-500 text-base w-[25rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              expedita ducimus modi, est deleniti fuga commodi qui, quasi nulla
              atque recusandae velit a corporis fugiat eaque aperiam in officia
              sapiente!
            </p>
          </span>

          <span className="flex justify-center items-center bg-gray-100 rounded-full p-1 h-8 w-8 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </span>
        </span>
        {/* price and reviews */}
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-col gap-2">
            <p className="Golanerounded text-gray-500 text-sm">Price</p>
            <h2 className=" text-2xl font-bold text-gray-700">$200.00</h2>
            <span className="flex justify-between text-gray-500 text-[12px] w-[25rem] ">
              <Rating maxStars={5} />

              <p className="Golanerounded text-gray-500 text-base">
                441 reviews
              </p>
            </span>
          </div>
        </div>

        {/* color  */}
        <div className="flex flex-col justify-start items-start gap-4">
          <h2 className="Golanerounded text-2xl font-bold text-gray-700">
            Color
          </h2>
          <div className="flex justify-between items-center gap-4">
            <div
              className="flex justify-center items-center bg-[#F0AB5F] rounded-full  h-8
             w-8"
            ></div>
            <div
              className="flex justify-center items-center bg-[#97918A] rounded-full  h-8
             w-8"
            ></div>
            <div
              className="flex justify-center items-center bg-[#68778E] rounded-full  h-8
             w-8"
            ></div>
            <div
              className="flex justify-center items-center bg-[#6D704D] rounded-full  h-8
             w-8"
            ></div>

            <div
              className="flex justify-center items-center bg-[#273F55] rounded-full  h-8
             w-8"
            ></div>
          </div>
        </div>

        {/* purchasing  */}

        <div className="Golanerounded flex justify-start items-center gap-5">
          <button className="text-black py-2 px-4 rounded-md border border-gray-200 hover:bg-black/10 backdrop-blur-lg">
            Buy Now
          </button>
          <button className="bg-black text-white py-2 px-4 rounded-md">
            Add to Cart
          </button>
        </div>

        {/* delivery  */}
        <div className="flex flex-col justify-between items-center gap-[2rem]">
          <div className="flex flex-row justify-between items-center gap-2 border-b border-gray-200 rounded-md p-2 w-full">
            <span>
              <p className="Golanerounded text-gray-500 text-sm">
                Dispatch in 5-7 weeks
              </p>
              <p className="Golanerounded text-gray-500 text-sm">
                Why the longer lead time?
              </p>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div className="flex flex-row justify-between items-center gap-2 border-b border-gray-200 rounded-md p-2 w-full">
            <p className="Golanerounded text-gray-500 text-sm">
              Home Delivery - $10
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
