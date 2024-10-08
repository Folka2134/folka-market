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
    <header className="w-full">
      <div className="flex items-center justify-between w-full h-14 ">
        <div className="flex gap-5">
          <SignedIn>
            <div className="bg-white rounded-lg flex justify-center items-center px-3 gap-5 border-[1px] border-gray-400">
              <DropdownMenu>
                <DropdownMenuTrigger>My Account</DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <Link href={`/profile/${userId}/listings`}>
                    <DropdownMenuItem className="cursor-pointer">
                      Profile
                    </DropdownMenuItem>
                  </Link>
                  {/* <DropdownMenuItem className="cursor-pointer">
                    <Link href={`/profile/${userId}/saved`}>Saved items</Link>
                  </DropdownMenuItem> */}
                  <DropdownMenuItem className="cursor-pointer">
                    <Link href={`/profile/${userId}/orders`}>Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    Settings
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button className="font-semibold text-md p-0">
                <Link href="/listings/create">Create listing</Link>
              </Button>
            </div>
          </SignedIn>
        </div>
        <div className="flex w-34 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <button className="bg-white rounded-lg px-3 hover:bg-[#FF5E00] transition-colors duration-300 ease-in-out">
              <Link href="/sign-in">Signin / Signup</Link>
            </button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
