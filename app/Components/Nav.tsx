"use client";

import React, { useState } from "react";
import ActionIcons from "./ActionIcons";
import Search from "./Search";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);

  const [category, setCategory] = useState(false);
  const toggleCategory = () => setCategory(!category);

  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center max-w-screen-xl mx-auto py-4 xl:px-2 px-4">
      <div className="flex flex-row justify-center items-center gap-5">
        <Link href="/">
          <h1
            className={`link font-bold xl:text-[2rem] text-[1.5rem]  ${
              pathname === "/" ? "bg-orange-500 " : ""
            }`}
          >
            AIKE
          </h1>
        </Link>
        <div></div>

        {/* Desktop Menu */}
        <div className="hidden xl:flex">
          <ul className=" flex justify-center items-center w-full gap-4">
            <Link
              href="/Category"
              className={`link ${
                pathname === "/Category" ? "text-black" : "text-gray-400"
              }`}
            >
              <span className="relative inline-block group">
                <span className="flex justify-center items-center gap-1">
                  <li>Category</li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>

                {/* <!-- Dropdown Menu--> */}
                <div className="absolute hidden group-hover:block bg-gray-50 text-gray-700 mt-2 py-2 w-[20rem] shadow-lg rounded">
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Living room
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Bed room
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Dining room
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Home office
                  </Link>
                </div>
              </span>
            </Link>

            <Link
              href="/Promo"
              className={`link ${
                pathname === "/Promo" ? "text-black" : "text-gray-400"
              }`}
            >
              <li>Promo</li>
            </Link>

            <Link
              href="/IntDesign"
              className={`link ${
                pathname === "/IntDesign" ? "text-black" : "text-gray-400"
              }`}
            >
              <li>Interior Design</li>
            </Link>

            <Link
              href="/ProductRecommendation"
              className={`link ${
                pathname === "/ProductRecommendation"
                  ? "text-black"
                  : "text-gray-400"
              }`}
            >
              <li>Product Recommendation</li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex xl:hidden">
        <svg
          onClick={toggleMenu}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="xl:hidden fixed inset-0 flex flex-col items-end bg-black/20 backdrop-blur z-10">
          <div className="bg-slate-50 h-screen w-[15rem] space-y-10">
            <div className="flex justify-end p-4">
              <svg
                onClick={toggleMenu}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            <ul className="flex flex-col items-start gap-4 pt-6 px-4 space-y-2">
              <Link
                href="/Category"
                className={`link ${
                  pathname === "/Category" ? "text-black" : "text-gray-400"
                }`}
              >
                <span
                  onClick={toggleCategory}
                  className="flex justify-center items-center gap-3"
                >
                  <li>Category</li>

                  {category ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5  rotate-180 transition-all duration-200 ease-in-out"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 transition-all duration-200 ease-in-out"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </span>
              </Link>

              {category && (
                <ul className="flex flex-col items-start gap-4 py-6 px-4 w-full space-y-2 bg-gray-200 rounded-md transition-all ease-in-out">
                  <li>Living room</li>
                  <li>Bed room</li>
                  <li>Dining room</li>
                  <li>Home office</li>
                </ul>
              )}

              <Link
                href="/Promo"
                className={`link ${
                  pathname === "/Promo" ? "text-black" : "text-gray-400"
                }`}
              >
                <li>Promo</li>
              </Link>
              <Link
                href="/IntDesign"
                className={`link ${
                  pathname === "/IntDesign" ? "text-black" : "text-gray-400"
                }`}
              >
                <li>Interior Design</li>
              </Link>
              <Link
                href="/ProductRecommendation"
                className={`link ${
                  pathname === "/ProductRecommendation"
                    ? "text-black"
                    : "text-gray-400"
                }`}
              >
                <li>Product Recommendation</li>
              </Link>
            </ul>
            <div className="mt-4 px-4">
              <Search />
              <ActionIcons />
            </div>
          </div>
        </div>
      )}

      {/* Desktop Search and Action Icons */}
      <div className="hidden xl:flex gap-4">
        <Search />
        <ActionIcons />
      </div>
    </div>
  );
};

export default Nav;
