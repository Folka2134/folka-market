import React from "react";
import Categorybar from "./Categorybar";
import Searchbar from "./Searchbar";

const SearchSection = () => {
  return (
    <div className="flex-1">
      <Searchbar />
      <Categorybar />
    </div>
  );
};

export default SearchSection;
