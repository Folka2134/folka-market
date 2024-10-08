"use client";

import Image from "next/image";
import { useCallback, Dispatch, SetStateAction } from "react";
// import type { FileWithPath } from "@uploadthing/react";
import { useDropzone } from "@uploadthing/react/hooks";
import { generateClientDropzoneAccept } from "uploadthing/client";

import { convertFileToUrl } from "@/lib/utils";

type FileUploaderProps = {
  onFieldChange: (url: string) => void;
  imageUrl: string;
  setFiles: Dispatch<SetStateAction<File[]>>;
};

export function FileUploader({
  imageUrl,
  onFieldChange,
  setFiles,
}: FileUploaderProps) {
  const onDrop = useCallback((acceptedFiles: any[]) => {
    setFiles(acceptedFiles);
    onFieldChange(convertFileToUrl(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*" ? generateClientDropzoneAccept(["image/*"]) : undefined,
  });

  return (
    <div
      {...getRootProps()}
      className="bg-dark-3 flex h-52 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl bg-gray-50"
    >
      <input {...getInputProps()} className="cursor-pointer" />

      {imageUrl ? (
        <div className="flex h-full w-full flex-1 justify-center ">
          <Image
            src={imageUrl}
            alt="image"
            width={250}
            height={250}
            className="w-full object-cover object-center"
          />
        </div>
      ) : (
        <div className="text-grey-500 flex flex-col items-center justify-center py-5">
          <Image
            src="/assets/icons/upload.svg"
            width={100}
            height={50}
            alt="file upload"
          />
          <h3 className="">Click/Drag image here</h3>
          <p className="p-medium-12">(SVG, PNG, JPG)</p>
          {/* <Button type="button" className="rounded-full">
            Select from computer
          </Button> */}
        </div>
      )}
    </div>
  );
}
