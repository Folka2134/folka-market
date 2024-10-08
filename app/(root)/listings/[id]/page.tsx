import { getAllListings, getListingById } from "@/lib/actions/listing.actions";
import { SearchParamProps } from "@/types";
import React from "react";
import Image from "next/image";
import { formatDateTime } from "@/lib/utils";
import { getUserById } from "@/lib/actions/user.actions";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ListingList from "@/components/shared/ListingList";
import { auth } from "@clerk/nextjs";
import CheckoutButton from "@/components/shared/CheckoutButton";
import { DeleteModal } from "@/components/shared/DeleteModal";

const ListingPage = async ({ params: { id } }: SearchParamProps) => {
  const { sessionClaims } = auth();
  const currentUser = sessionClaims?.userId as string;

  const listing = await getListingById(id);
  const user = await getUserById(listing.user);

  const allListings = await getAllListings({ limit: 6, query: "", pages: 1 });

  const filteredListings = allListings?.data.filter(
    (item: any) =>
      listing.category === item.category && listing._id !== item._id
  );

  return (
    <>
      <div className="flex justify-center mt-10 mb-24">
        <div className="flex lg:justify-center gap-5 lg:flex-row flex-col items-center">
          <Image
            src={listing.imageUrl}
            alt="product image"
            height={350}
            width={350}
            className=""
          />
          <article className="p-5 rounded-xl">
            <h3 className="font-bold text-xl p-2 mb-3 pl-0">{listing.title}</h3>
            <section className="flex gap-10">
              <div className="flex flex-col gap-5 text-lg font-light">
                <p>Category: {listing.category}</p>
                <p>Console: {listing.console}</p>
                <p>Condition: {listing.condition}</p>
                <div>
                  <p>Post by: {formatDateTime(listing.datePosted).dateOnly}</p>
                  <p>Location: {listing.location}</p>
                  <p>
                    Seller:{" "}
                    <Link
                      href={`/profile/${user._id}/listings`}
                      className="text-blue-500 underline"
                    >
                      {user.username}
                    </Link>
                  </p>
                </div>
              </div>
              {currentUser === listing.user ? (
                <div className="flex flex-col p-5 gap-2">
                  <Link href={`/listings/${listing._id}/edit`}>
                    <Button className="button hover:scale-105 transition-transform duration-75">
                      Edit listing
                    </Button>
                  </Link>
                  <DeleteModal listingId={listing._id} />
                </div>
              ) : (
                <div className="flex flex-col p-5 gap-3 text-center">
                  <p>Price: £{listing.price}</p>
                  <CheckoutButton listing={listing} />
                  <Button className="button hover:scale-105 transition-transform duration-75 border-2">
                    Add to basket
                  </Button>
                  {/* <Button className="button hover:scale-105 transition-transform duration-75">
                    Save item
                  </Button> */}
                </div>
              )}
            </section>
          </article>
        </div>
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
