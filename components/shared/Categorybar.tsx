import React from "react";
import { CategoryList } from "@/constants/index";

const Categorybar = () => {
  return (
    <ul className="gap-5 mt-3 hidden sm:flex">
      {CategoryList.map((category) => (
        <li key={category.label}>{category.label}</li>
      ))}
    </ul>
  );
};

export default Categorybar;
