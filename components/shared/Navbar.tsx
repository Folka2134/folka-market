import { SignedIn, SignedOut, UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

const Navbar = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <header className="w-full border-b">
      <div className="flex items-center justify-between w-full h-14 ">
        <div className="flex gap-5">
          <SignedIn>
            <DropdownMenu>
              <DropdownMenuTrigger>My Account</DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#524D96]">
                <Link href={`/profile/${userId}/listings`}>
                  <DropdownMenuItem className="hover:bg-[#938FC9] cursor-pointer">
                    Profile
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem className="hover:bg-[#938FC9] cursor-pointer">
                  <Link href={`/profile/${userId}/saved`}>Saved items</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#938FC9] cursor-pointer">
                  <Link href={`/profile/${userId}/listings`}>Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#938FC9] cursor-pointer">
                  Settings
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="bg-[#B5B0FF] font-semibold text-md">
              <Link href="/listings/create">Create listing</Link>
            </Button>
          </SignedIn>
        </div>
        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <button className="rounded-full">
              <Link href="/sign-in">Signin/Signup</Link>
            </button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
