import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="">
      <Image
        src="/assets/images/banner1.jpg"
        alt="gaming banner"
        height={500}
        width={1200}
      />
    </div>
  );
};

export default Banner;
