import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import SearchSection from "./SearchSection";
import Link from "next/link";

const Header = () => {
  return (
    <div className="mb-10">
      <Navbar />
      <div className="border-b-2">
        <Link href="/">
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/assets/images/Folka-logos_building.png"
              alt="Folka Logo"
              height={100}
              width={100}
              className="bg-black bg-opacity-80 p-2 rounded-xl"
            />
            <h1 className="text-4xl text-[#FF5E00] bg-black bg-opacity-80 rounded-xl px-2 mb-3">
              Folka Market
            </h1>
          </div>
        </Link>
        <SearchSection />
      </div>
    </div>
  );
};

export default Header;
