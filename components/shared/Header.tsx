import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import SearchSection from "./SearchSection";

const Header = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex w-full items-center">
        <Image
          src="/assets/images/Folka-logos_transparentsmall.png"
          alt="Folka Logo"
          height={150}
          width={150}
        />
        <SearchSection />
      </div>
    </div>
  );
};

export default Header;
