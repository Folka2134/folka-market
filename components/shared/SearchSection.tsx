import React from "react";
import Categorybar from "./Categorybar";
import Searchbar from "./Searchbar";

const SearchSection = () => {
  return (
    <div className="flex-1 flex flex-col items-center gap-3">
      <Searchbar />
      <Categorybar />
    </div>
  );
};

export default SearchSection;
