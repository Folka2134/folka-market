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
    <div className="transtion-all group relative flex min-h-[300px] w-full min-w-[400px] flex-col overflow-hidden rounded-xl bg-white py-2 shadow-md hover:shadow-lg md:min-h-[438px]">
      <Link
        href={`/listings/${listing._id}`}
        style={{ backgroundImage: `url(${listing.imageUrl})` }}
        className="flex flex-grow justify-center bg-gray-50 bg-cover bg-center text-gray-500"
      />
      <Link
        href={`/listings/${listing._id}`}
        className="flex  flex-col gap-2 p-5 md:gap-4"
      >
        <div className="flex flex-col gap-2">
          <p className="text-gray-500">
            {formatDateTime(listing.datePosted).dateTime}
          </p>
          <p className="line-clamp-2 flex-1 text-[16px] text-black md:text-[20px]">
            {listing.title}
          </p>
          <p className="">
            by{" "}
            <span className="text-[#95A2F0]">
              {listing.user.firstName} {listing.user.lastName}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ListingCard;
