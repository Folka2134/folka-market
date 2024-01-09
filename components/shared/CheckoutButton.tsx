"use client";

import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";

import { IListing } from "@/lib/database/models/listing.model";
import Link from "next/link";
import Checkout from "./Checkout";

const CheckoutButton = ({ listing }: { listing: IListing }) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;

  return (
    <>
      <SignedOut>
        <Button asChild className="button hover:bg-[#B5B0FF]">
          <Link href="/sign-in">Buy product</Link>
        </Button>
      </SignedOut>

      <SignedIn>
        <Checkout listing={listing} userId={userId} />
      </SignedIn>
    </>
  );
};

export default CheckoutButton;
