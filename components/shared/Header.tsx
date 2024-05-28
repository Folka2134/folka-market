import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import SearchSection from "./SearchSection";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-5 items-center">
        <Link href="/">
          <Image
            src="/assets/images/Folka-logos_transparentsmall.png"
            alt="Folka Logo"
            height={150}
            width={150}
          />
        </Link>
        <SearchSection />
      </div>
    </div>
  );
};

export default Header;
