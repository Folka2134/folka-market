import ListingForm from "@/components/shared/ListingForm";
import { auth } from "@clerk/nextjs";
import React from "react";

const CreateListingPage = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <div className="flex justify-center">
      <section>
        <h1 className="text-center my-10 font-bold text-2xl">Create Listing</h1>

        <div className="">
          <ListingForm userId={userId} type="Create" />
        </div>
      </section>
    </div>
  );
};

export default CreateListingPage;
