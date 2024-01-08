import { getAllListings, getListingById } from "@/lib/actions/listing.actions";
import { SearchParamProps } from "@/types";
import React from "react";
import Image from "next/image";
import { formatDateTime } from "@/lib/utils";
import { getUserById } from "@/lib/actions/user.actions";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ListingList from "@/components/shared/ListingList";

const ListingPage = async ({ params: { id } }: SearchParamProps) => {
  const listing = await getListingById(id);
  const user = await getUserById(listing.user);
  const allListings = await getAllListings({ limit: 6 });

  const filteredListings = allListings?.data.filter(
    (item: any) =>
      listing.category === item.category && listing._id !== item._id
  );

  return (
    <>
      <div className="flex items-center lg:justify-center gap-5 lg:flex-row flex-col mt-5 mb-32">
        <div>
          <Image
            src={listing.imageUrl}
            alt="product image"
            height={350}
            width={350}
            className="rounded-2xl border-black border-[1px]"
          />
        </div>
        <article>
          <h3 className="font-bold text-xl p-5 pl-0">{listing.title}</h3>
          <section className="flex gap-10">
            <div className="flex flex-col gap-3 text-lg font-light">
              <p>Category: {listing.category}</p>
              <p>Console: {listing.console}</p>
              <p>Condition: {listing.condition}</p>
              <div>
                <p>Posted: {formatDateTime(listing.datePosted).dateOnly}</p>
                <p>Location: {listing.location}</p>
                <p>
                  Seller:{" "}
                  <Link
                    href={`/profile/${user._id}`}
                    className="text-blue-500 underline"
                  >
                    {user.username}
                  </Link>
                </p>
              </div>
            </div>
            {user._id === listing.user ? (
              <div className="flex flex-col p-5 gap-3">
                <Link href={`/listings/${listing._id}/edit`}>
                  <Button>Edit listing</Button>
                </Link>
                <Button>Delete listing</Button>
              </div>
            ) : (
              <div className="flex flex-col p-5 gap-3 border-black border-[1px] rounded-md">
                <p>Price: £{listing.price}</p>
                <Button>Buy now</Button>
                <Button>Add to basket</Button>
                {/* <Button>Watch item</Button> */}
                <Button>Save item</Button>
              </div>
            )}
          </section>
        </article>
      </div>
      <ListingList
        data={filteredListings}
        emptyTitle="No related products"
        listTitle="Related products"
      />
    </>
  );
};

export default ListingPage;
