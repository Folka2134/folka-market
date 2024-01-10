import ListingList from "@/components/shared/ListingList";
import { getAllListings } from "@/lib/actions/listing.actions";
import React from "react";

type SearchPageProps = {
  params: {
    search: string;
  };
};

const SearchPage = async ({ params: { search } }: SearchPageProps) => {
  const listings = await getAllListings({
    query: search,
    pages: 1,
    limit: 6,
  });

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <section className="my-10 w-full">
        <ListingList
          data={listings?.data}
          emptyTitle="No Listings Found"
          listTitle={`Search Results for "${search}"`}
        />
      </section>
    </main>
  );
};

export default SearchPage;
