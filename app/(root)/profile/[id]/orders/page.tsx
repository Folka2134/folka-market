import { auth } from "@clerk/nextjs";

import { getListingsByUser } from "@/lib/actions/listing.actions";
import ListingList from "@/components/shared/ListingList";

type OrdersPageProps = {
  params: {
    id: string;
  };
};

const OrdersPage = async ({ params: { id } }: OrdersPageProps) => {
  const userListings = await getListingsByUser({ userId: id, page: 1 });

  return (
    <div>
      <ListingList
        data={userListings?.data}
        emptyTitle="No user orders"
        listTitle="User orders"
      />
    </div>
  );
};

export default OrdersPage;
