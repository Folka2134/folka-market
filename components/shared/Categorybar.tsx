import React from "react";
import { CategoryList } from "@/constants/index";
import Link from "next/link";

const Categorybar = () => {
  return (
    <ul className="gap-5 mt-3 hidden sm:flex">
      {CategoryList.map((category) => (
        <Link key={category.label} href={`/categories/${category.label}`}>
          <li>{category.label}</li>
        </Link>
      ))}
    </ul>
  );
};

export default Categorybar;
