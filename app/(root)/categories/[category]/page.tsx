import ListingList from "@/components/shared/ListingList";
import { getListingsByCategory } from "@/lib/actions/listing.actions";
import React from "react";

type CategoryPageProps = {
  params: {
    category: string;
  };
};

const CategoryPage = async ({ params: { category } }: CategoryPageProps) => {
  const listings = await getListingsByCategory(category);

  return (
    <div className="mt-5 mb-52">
      <ListingList
        data={listings?.data}
        emptyTitle={`No ${category} listings found`}
        listTitle={`${category} listings`}
      />
    </div>
  );
};

export default CategoryPage;
