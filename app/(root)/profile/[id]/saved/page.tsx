import { auth } from "@clerk/nextjs";

import { getListingsByUser } from "@/lib/actions/listing.actions";
import ListingList from "@/components/shared/ListingList";

type SavedListingsPageProps = {
  params: {
    id: string;
  };
};

const SavedListingsPage = async ({
  params: { id },
}: SavedListingsPageProps) => {
  const { sessionClaims } = auth();
  const currentUser = sessionClaims?.userId as string;

  const userListings = await getListingsByUser({ userId: id, page: 1 });

  return (
    <div>
      <h2 className="flex justify-center my-5 font-medium text-xl">
        Saved Listings
      </h2>
      {currentUser === id && (
        <ListingList
          data={userListings?.data}
          emptyTitle="No user listings"
          listTitle="User listings"
        />
      )}
    </div>
  );
};

export default SavedListingsPage;
