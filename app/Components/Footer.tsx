"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Footer() {
  const pathname = usePathname();
  return (
    <div className="logo flex flex-col w-[100%] max-w-screen-xl mx-auto justify-between items-start py-5 px-5 md:px-10 gap-10">
      <div className="flex xl:flex-row flex-col flex-wrap justify-between w-full gap-10">
        <div>
          <h1
            className={`link CisalackSignature font-bold xl:text-[2rem] text-[1.5rem]  ${
              pathname === "/" ? " " : ""
            }`}
          >
            <Link href="/">AIKE </Link>
          </h1>
        </div>
        <div className="Golanerounded flex flex-wrap   justify-between items-start xl:w-[50rem]">
          <span>
            <h1 className="text-[1.3rem] py-2">Company</h1>
            <ul className="space-y-3 text-gray-500 ">
              <li className="transition-all hover:scale-105 delay-100 duration-100 ease-in-out cursor-pointer">
                About Us
              </li>
              <li className="transition-all hover:scale-105 delay-100 duration-100 ease-in-out cursor-pointer">
                Shop
              </li>
              <li className="transition-all hover:scale-105 delay-100 duration-100 ease-in-out cursor-pointer">
                Careers
              </li>
              <li className="transition-all hover:scale-105 delay-100 duration-100 ease-in-out cursor-pointer">
                FAQ
              </li>
            </ul>
          </span>
          <span>
            <Link
              href="/Category"
              className={`link text-[1.3rem] py-2 hover:text-black/60  ${
                pathname === "/Category" ? "text-black" : "text-black"
              }`}
            >
              Category
            </Link>
            <ul className="space-y-3 text-gray-500">
              <li className="transition-all hover:scale-105 delay-100 duration-100 ease-in-out cursor-pointer">
                Living Room
              </li>
              <li className="transition-all hover:scale-105 delay-100 duration-100 ease-in-out cursor-pointer">
                Dining Room
              </li>
              <li className="transition-all hover:scale-105 delay-100 duration-100 ease-in-out cursor-pointer">
                Home Office
              </li>
              <li className="transition-all hover:scale-105 delay-100 duration-100 ease-in-out cursor-pointer">
                Bed Room
              </li>
              <li className="transition-all hover:scale-105 delay-100 duration-100 ease-in-out cursor-pointer">
                Outdoor
              </li>
            </ul>
          </span>
          <span>
            <h1 className="text-[1.3rem] py-2">Join Our Newsletter</h1>
            <div className="flex items-center border rounded-md px-2 py-1 bg-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <input
                type="text"
                placeholder="Join Now"
                className="ml-2 outline-none w-full bg-transparent"
              />
            </div>
          </span>
        </div>
      </div>

      <hr className="h-1 w-full my-5" />
      <div className="Golanerounded flex flex-wrap  justify-between items-start w-full gap-5 ">
        <span>
          <p className="text-gray-500 Golanerounded">
            © 2023 AIKE. All rights reserved.
          </p>
          <p className="text-gray-500 Golanerounded">Powered by AIKE</p>
          <p className="text-gray-500 Golanerounded">Designed by AIKE</p>
        </span>
        <span>
          <p>Terms and Conditions</p>
        </span>
        <span>
          <p>Privacy Policy</p>
        </span>
      </div>
    </div>
  );
}

export default Footer;
