"use client";

import { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Banner = () => {
  const plugin = useRef(Autoplay({ delay: 3000 }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
    >
      <CarouselContent className="flex items-center p-1 my-10">
        {/* {Array.from({ length: 5 }).map((_, index) => ( */}
        <CarouselItem>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/images/banner2.jpg"
              alt="gaming banner"
              height={500}
              width={1500}
              className="rounded-xl banner border-[1px] "
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/images/ps5.jpg"
              alt="gaming banner"
              height={500}
              width={1500}
              className="rounded-xl banner border-[1px] "
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/images/consoles1.jpg"
              alt="gaming banner"
              height={500}
              width={1500}
              className="rounded-xl banner border-[1px] "
            />
          </div>
        </CarouselItem>
        {/* ))} */}
      </CarouselContent>
    </Carousel>
    // <div className="my-10">

    // </div>
  );
};

export default Banner;
