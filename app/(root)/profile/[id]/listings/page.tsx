import { auth } from "@clerk/nextjs";

import { getListingsByUser } from "@/lib/actions/listing.actions";
import ListingList from "@/components/shared/ListingList";

type ListingsPageProps = {
  params: {
    id: string;
  };
};

const ListingsPage = async ({ params: { id } }: ListingsPageProps) => {
  const userListings = await getListingsByUser({ userId: id, page: 1 });

  return (
    <div>
      <ListingList
        data={userListings?.data}
        emptyTitle="No user listings"
        listTitle="User listings"
      />
    </div>
  );
};

export default ListingsPage;
