import { IListing } from "@/lib/database/models/listing.model";
import { formatDateTime } from "@/lib/utils";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

type ListingCardProps = {
  listing: IListing;
};

const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <div className="card transtion-all group relative flex min-h-[300px] w-full  flex-col overflow-hidden rounded-xl py-2 shadow-md hover:shadow-lg md:min-h-[438px]">
      <Link
        href={`/listings/${listing._id}`}
        style={{ backgroundImage: `url(${listing.imageUrl})` }}
        className="flex flex-grow justify-center bg-cover bg-center m-2"
      />
      <Link
        href={`/listings/${listing._id}`}
        className="flex  flex-col gap-2 p-5 md:gap-4"
      >
        <div className="flex flex-col gap-2">
          <p className="">{formatDateTime(listing.datePosted).dateTime}</p>
          <p className="line-clamp-2 flex-1 text-[16px]  md:text-[20px]">
            {listing.title}
          </p>
          <p className="line-clamp-2 flex-1 text-[16px]  md:text-[20px] ">
            £<span className="font-medium">{listing.price}</span>
          </p>
          <p className="">
            by{" "}
            <span className="text-[#B5B0FF]">
              {listing.user.firstName} {listing.user.lastName}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ListingCard;
