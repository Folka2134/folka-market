"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Searchbar = ({
  placeholder = "Search title...",
}: {
  placeholder?: string;
}) => {
  const [query, setQuery] = useState("");

  const handleEnterKeyPress = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (query.trim() !== "") {
        document.getElementById("searchButton")?.click();
      }
    }
  };

  return (
    <div className="flex min-w-[54px] max-w-96">
      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-xl"
        onKeyDown={handleEnterKeyPress}
      />
      <Link href={query.trim() !== "" ? `/search/${query}` : "#"}>
        <Button
          id="searchButton"
          className="ml-2 hover:scale-105 transition-transform duration-100 rounded-xl bg-white"
          variant="outline"
        >
          Search
        </Button>
      </Link>
    </div>
  );
};

export default Searchbar;
