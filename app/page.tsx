// import Image from "next/image";
// import Nav from "./Components/Nav";

import Category from "./Components/Category";
import Furniture from "./Components/Furniture";
import Hero from "./Components/Hero";
import Inspo from "./Components/Inspo";

export default function Home() {
  return (
    <div className="space-y-[5rem]">
      <Hero />
      <Furniture />
      <Category />
      <Inspo />
    </div>
  );
}
