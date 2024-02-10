import React from "react";
import { CategoryList } from "@/constants/index";
import Link from "next/link";

const Categorybar = () => {
  return (
    <ul className="gap-5 mt-3 hidden md:flex md:flex-wrap">
      {CategoryList.map((category) => (
        <Link key={category.label} href={`/categories/${category.label}`}>
          <li className="hover:scale-105 transition-transform duration-75">
            {category.label}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Categorybar;
