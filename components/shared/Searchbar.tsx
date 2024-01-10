"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";

import { Button } from "../ui/button";
import Categorybar from "./Categorybar";

const Searchbar = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex min-w-[54px]">
      <Input />
      <Button className="w-44 ml-2">Search</Button>
    </div>
  );
};

export default Searchbar;
