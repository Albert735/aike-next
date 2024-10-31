import React from "react";
import Image from "next/image";

const Category = () => {
  return (
    <div className="flex flex-col justify-between items-center max-w-screen-xl mx-auto py-4  px-4 space-y-[5rem] mt-[5rem]">
      <div className="flex flex-col justify-start items-start w-full">
        <h1 className="CisalackSignature text-[3rem] text-red-500">Category</h1>
        <p className="Golanerounded text-[2rem]">Design Your Perfect Home</p>
      </div>
      <div className="flex flex-wrap  justify-center xl:justify-between items-center xl:gap-5 md:gap-2 w-full  ">
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col w-[16rem] h-[17rem] relative overflow-hidden rounded-lg">
            <Image
              src="/assets/3d-modern-lamp-design.jpg"
              fill
              sizes="6"
              alt=""
              className="object-cover"
            />
          </div>

          <p className="Golanerounded">Dining room</p>
        </div>

        <div className="flex flex-col space-y-3">
          <div className="flex flex-col w-[16rem] h-[17rem] relative overflow-hidden rounded-lg">
            <Image
              src="/assets/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv.jpg"
              fill
              sizes="6"
              alt=""
              className="object-cover"
            />
          </div>

          <p className="Golanerounded">Bed room</p>
        </div>

        <div className="flex flex-col space-y-3">
          <div className="w-[16rem] h-[17rem] relative overflow-hidden rounded-lg">
            <Image
              src="/assets/interior-design-with-photoframes-couch.jpg"
              fill
              sizes="6"
              alt=""
              className="object-cover"
            />
          </div>

          <p className="Golanerounded">Living room</p>
        </div>

        <div className="flex flex-col space-y-3">
          <div className="w-[16rem] h-[17rem] relative overflow-hidden rounded-lg">
            <Image
              src="/assets/michael-soledad-B4GwdlgTh5Y-unsplash.jpg"
              fill
              sizes="6"
              alt=""
              className="object-cover"
            />
          </div>

          <p className="Golanerounded">Home office</p>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row justify-center items-center bg-gray-100 p-[3rem] rounded-xl w-full border border-gray-300">
        <div className="xl:w-[45rem] text-center xl:text-start space-y-3">
          <h1 className="CisalackSignature text-[3rem] text-center xl:text-start">
            Our Ambitions
          </h1>
          <h2 className="Golanerounded py-2 xl:text-[2.4rem] text-[1.7rem] text-center xl:text-start text-gray-400">
            Pioneering innovation and <br />
            <div className="flex justify-center xl:justify-start items-center gap-2">
              excellence in furniture
              <span className="bg-black rounded-2xl px-3 py-2 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="white"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </span>
            </div>
          </h2>
          <button className="Golanerounded bg-black text-white px-3 py-2 rounded-md">
            Explore Now
          </button>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex xl:w-[35rem] xl:h-[18rem] w-[18rem] h-[10rem] my-5 xl:mt-0 relative overflow-hidden rounded-lg">
            <Image
              src="/assets/sofa-living-room-decorated-with-brazilian-folklore-design.jpg"
              fill
              sizes="50vw"
              alt=""
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
