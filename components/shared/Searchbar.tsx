import React from "react";
import { Input } from "../ui/input";

import { Button } from "../ui/button";
import Categorybar from "./Categorybar";

const Searchbar = () => {
  return (
    <div className="flex">
      <Input />
      <Button className="w-44 ml-2">Search</Button>
    </div>
  );
};

export default Searchbar;
