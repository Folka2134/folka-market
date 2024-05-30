"use client";

import { defaultListingValues } from "@/constants";
import { listingFormSchema } from "@/lib/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import FormDropDown from "./FormDropdown";

import { categories } from "@/constants";
import { conditions } from "@/constants";
import { consoles } from "@/constants";
import { useUploadThing } from "@/lib/uploadthing";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createListing, updateListing } from "@/lib/actions/listing.actions";
import { FileUploader } from "./FileUploader";
import { IListing } from "@/lib/database/models/listing.model";

type ListingFormProps = {
  userId: string;
  type: "Create" | "Edit";
  listingId?: string;
  listing?: IListing;
};

const ListingForm = ({
  userId,
  type,
  listingId,
  listing,
}: ListingFormProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const router = useRouter();

  const initialValues =
    listing && type === "Edit" ? listing : defaultListingValues;

  const { startUpload } = useUploadThing("imageUploader");
  // 1. Define your form.
  const form = useForm<z.infer<typeof listingFormSchema>>({
    resolver: zodResolver(listingFormSchema),
    defaultValues: initialValues,
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof listingFormSchema>) {
    console.log(values);

    let uploadedImageUrl = values.imageUrl;

    console.log(uploadedImageUrl);

    if (files.length > 0) {
      const uploadedImages = await startUpload(files);

      if (!uploadedImages) {
        return;
      }

      uploadedImageUrl = uploadedImages[0].url;
    }
    if (type === "Create") {
      console.log("trying to create");

      try {
        const newListing = await createListing({
          listing: {
            ...values,
            imageUrl: uploadedImageUrl,
          },
          userId,
          path: "/profile",
        });
        if (newListing) {
          form.reset();
          router.push(`/listings/${newListing._id}`);
        }
      } catch (error) {
        console.log(error);
      }
    }

    // if (type === "Edit") {
    //   console.log("trying to edit");
    //   if (!listingId) {
    //     router.back();
    //   }

    //   try {
    //     const newListing = await updateListing({
    //       listing: {
    //         ...values,
    //         imageUrl: uploadedImageUrl,
    //         _id: listingId,
    //       },
    //       userId,
    //       path: `/listings/${listingId}`,
    //     });
    //     if (newListing) {
    //       form.reset();
    //       router.push(`/listings/${newListing._id}`);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl className="h-72">
                <FileUploader
                  onFieldChange={field.onChange}
                  imageUrl={field.value}
                  setFiles={setFiles}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <FormDropDown
                    onChangeHandler={field.onChange}
                    value={field.value}
                    items={categories}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="condition"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <FormDropDown
                    onChangeHandler={field.onChange}
                    value={field.value}
                    items={conditions}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Location" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="console"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <FormDropDown
                    onChangeHandler={field.onChange}
                    value={field.value}
                    items={consoles}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default ListingForm;
