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
      <div className="flex items-center justify-between w-full h-14">
        <div className="flex gap-5">
          <SignedIn>
            <DropdownMenu>
              <DropdownMenuTrigger>My Account</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href={`/profile/${userId}/listings`}>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Saved items</DropdownMenuItem>
                <DropdownMenuItem>Orders</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="bg-pink-400">
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
