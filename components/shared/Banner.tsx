import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="my-8">
      <Image
        src="/assets/images/banner1.jpg"
        alt="gaming banner"
        height={500}
        width={1200}
        className="rounded-xl banner border-[1px]"
      />
    </div>
  );
};

export default Banner;
