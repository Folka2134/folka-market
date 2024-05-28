import { IListing } from "@/lib/database/models/listing.model";
import React from "react";
import ListingCard from "./ListingCard";

type ListingListProps = {
  data: IListing[];
  emptyTitle: string;
  listTitle: string;
};

const ListingList = ({ data, emptyTitle, listTitle }: ListingListProps) => {
  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col item-center mt-10">
          <h3 className="font-bold">{listTitle}</h3>
          <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10">
            {data.map((listing) => (
              <li key={listing._id}>
                <ListingCard listing={listing} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <div className="flex w-full flex-col items-center justify-center gap-3 rounded-[14px] text-center">
            <h3 className="font-bold">{emptyTitle}</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default ListingList;
