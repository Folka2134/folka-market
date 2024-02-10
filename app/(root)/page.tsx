import { getAllListings } from "@/lib/actions/listing.actions";
import Banner from "@/components/shared/Banner";
import ListingList from "@/components/shared/ListingList";
import { SearchParamProps } from "@/types";

export default async function Home({ searchParams }: SearchParamProps) {
  const pages = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";

  const listings = await getAllListings({
    query: searchText,
    pages,
    limit: 6,
  });

  return (
    <main className="flex flex-col items-center ">
      <Banner />
      <section className="my-10 w-full">
        <ListingList
          data={listings?.data}
          emptyTitle="No Listings Found"
          listTitle="New Products"
        />
      </section>
    </main>
  );
}
