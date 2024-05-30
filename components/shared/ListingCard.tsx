import { IListing } from "@/lib/database/models/listing.model";
import { formatDateTime } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type ListingCardProps = {
  listing: IListing;
};

const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <div className=" transtion-all group relative flex min-h-[300px] w-full  flex-col overflow-hidden rounded-xl py-2 shadow-md hover:shadow-lg md:min-h-[438px]">
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
          <div className="flex justify-between w-full">
            <p className="text-center">
              {formatDateTime(listing.datePosted).dateTime}
            </p>
            <p className="line-clamp-2 text-[16px]  md:text-[20px] ">
              £{listing.price}
            </p>
          </div>
          <p className="line-clamp-2 flex-1 text-[16px]  md:text-[20px]">
            {listing.title}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ListingCard;
