import React from "react";
import { CategoryList } from "@/constants/index";

const Categorybar = () => {
  return (
    <ul className="flex gap-5 mt-3">
      {CategoryList.map((category) => (
        <li key={category.label}>{category.label}</li>
      ))}
    </ul>
  );
};

export default Categorybar;
