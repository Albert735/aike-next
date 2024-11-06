"use client";

import React from "react";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="h-[80dvh] w-full flex flex-col justify-center items-center">
      <Image
        src="/assets/404 error with people holding the numbers-bro.svg"
        alt="Page not found"
        className="h-[40rem] w-[40rem] object-contain"
        priority
        width={500}
        height={500}
      />
    </div>
  );
};

export default NotFound;
