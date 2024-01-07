import { getAllListings } from "@/lib/actions/listing.actions";
import Banner from "@/components/shared/Banner";
import ListingList from "@/components/shared/ListingList";

export default async function Home() {
  const listings = await getAllListings({ limit: 6 });

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Banner />
      <section className="my-10">
        <ListingList
          data={listings?.data}
          emptyTitle="No Jobs Found"
          listTitle="New Products"
        />
      </section>
    </main>
  );
}
