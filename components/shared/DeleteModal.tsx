"use client";

import { useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { deleteListingById } from "@/lib/actions/listing.actions";
import { Button } from "../ui/button";

export const DeleteModal = ({ listingId }: { listingId: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  let [isPending, startTransition] = useTransition();

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="text-sm px-3 rounded-lg hover:scale-105 transition-all duration-75">
          Delete listing
        </div>
      </AlertDialogTrigger>

      <AlertDialogContent className="bg-black bg-opacity-80 text-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to delete?</AlertDialogTitle>
          <AlertDialogDescription className="p-regular-16 text-grey-600">
            This will permanently delete this listing
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <AlertDialogAction
            onClick={() =>
              startTransition(async () => {
                await deleteListingById({ listingId, path: pathname });

                router.push(`/`);
              })
            }
          >
            {isPending ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
