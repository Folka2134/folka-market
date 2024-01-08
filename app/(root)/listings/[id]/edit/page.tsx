import React from "react";

import { SearchParamProps } from "@/types";
import ListingForm from "@/components/shared/ListingForm";
import { auth } from "@clerk/nextjs";
import { getListingById } from "@/lib/actions/listing.actions";

type EditListingProps = {
  params: {
    id: string;
  };
};

const listingEditPage = async ({ params: { id } }: EditListingProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const listing = await getListingById(id);

  return (
    <>
      <section>
        <h1 className="text-center my-10 font-bold text-2xl">Edit Listing</h1>

        <div className="wrapper">
          <ListingForm
            userId={userId}
            type="Edit"
            listingId={id}
            listing={listing}
          />
        </div>
      </section>
    </>
  );
};

export default listingEditPage;
