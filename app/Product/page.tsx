import React from "react";
import Image from "next/image";
import inspo1 from "../../public/assets/inspo1.jpg";
// import inspo2 from "../../public/assets/inspo2.jpg";
import Link from "next/link";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../Components/ui/table";
import { useAppContext } from "../contexts/AppContext";

const CartItems = ({product}) => {
  const { cartItems } = useAppContext();
  return (
    <div
      className="flex flex-col justify-start h-[100vh] items-center max-w-screen-xl mx-auto py-4 xl:px-2 px-4 gap-[2rem]"
      id="cart"
    >
      <div className="flex flex-col justify-center items-center w-full space-y-3">
        <h1 className="CisalackSignature text-[3rem]">Cart</h1>
        <h1 className="Golanerounded text-gray-400">
          Shop for $34 more to enjoy{" "}
          <span className="text-black">FREE shipping</span>{" "}
        </h1>
        <span className="relative flex justify-center items-center gap-2">
          <span className="h-2   w-[30rem] bg-green-300 rounded-lg"></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 z-20 bg-white rounded-full absolute right-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
            />
          </svg>
        </span>
      </div>

      {/* cart items */}

      <div className="flex flex-col justify-start items-start w-full gap-5 ">
        {/* <div className="w-[10rem] h-[15rem] relative overflow-hidden rounded-lg">
            <Image fill sizes="6" src={inspo1} alt="" />
          </div>

        <div>
          */}
        <Table className="w-full">
          <TableCaption>A list of your recent orders.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>

          {/* cart items */}
          <TableBody>
            <TableRow>
              <Link href="/Product/productId">
                <TableCell className="font-medium flex gap-5">
                  <div className="w-[10rem] h-[15rem] relative overflow-hidden rounded-lg">
                    <Image
                      fill
                      sizes="6"
                      src={product.image}
                      alt=""
                      className="hover:scale-110 transition-all ease-in-out delay-150 duration-150"
                    />
                  </div>
                  <div className="flex flex-col gap-3 px-3">
                    <p className="Golanerounded text-[1.5rem]">Orammmut</p>
                    <p className="text-gray-400">Sofa</p>
                    <button className="text-red-400 border hover:border-red-300 hover:bg-red-200 hover:text-red-500 w-full transition-all ease-in-out duration-150 rounded-md py-2 px-3 ">
                      Remove
                    </button>
                  </div>
                </TableCell>
              </Link>

              <TableCell>
                <div className="flex justify-between items-center gap-3 border p-2 rounded-lg w-[6rem]">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 hover:bg-gray-200"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </span>
                  <p className="text-black">1</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 hover:bg-gray-200"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                  </span>
                </div>
              </TableCell>
              <TableCell>$250.00</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>

            {/* <TableRow>
              <Link href="/Product/productId">
                <TableCell className="font-medium flex gap-5">
                  <div className="w-[10rem] h-[15rem] relative overflow-hidden rounded-lg">
                    <Image
                      fill
                      sizes="6"
                      src={inspo2}
                      alt=""
                      className="hover:scale-110 transition-all ease-in-out delay-150 duration-150"
                    />
                  </div>
                  <div className="flex flex-col gap-3 px-3">
                    <p className="Golanerounded text-[1.5rem]">Orammmut</p>
                    <p className="text-gray-400">Sofa</p>
                    <button className="text-red-400 border hover:border-red-300 hover:bg-red-200 hover:text-red-500 w-full transition-all ease-in-out duration-150 rounded-md py-2 px-3 ">
                      Remove
                    </button>
                  </div>
                </TableCell>
              </Link>
              <TableCell>
                <div className="flex justify-between items-center gap-3 border p-2 rounded-lg w-[6rem]">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 hover:bg-gray-200"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </span>
                  <p className="text-black">1</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 hover:bg-gray-200"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                  </span>
                </div>
              </TableCell>
              <TableCell>$250.00</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CartItems;
